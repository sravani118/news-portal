// app/news/page.js

// Hybrid Rendering (ISR) – revalidate every 60 seconds
export const revalidate = 60;

export default async function NewsListPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
    // default cache works with ISR
    // (no need to specify cache here)
  });

  if (!res.ok) {
    throw new Error('Failed to load news list');
  }

  const payload = await res.json();
  const news = Array.isArray(payload) ? payload : [];

  return (
    <main>
      <h1>Latest News</h1>
      <p>
        This page is statically generated and revalidated every 60 seconds.
      </p>

      <ul>
        {news.map((item) => {
          const slug = item?.slug ?? `post-${item?.id ?? 'unknown'}`;
          return (
            <li key={item.id ?? slug}>
              <a href={`/news/${slug}`}>
                <strong>{item.title}</strong>
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
