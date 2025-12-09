// app/breaking/page.js

// Force dynamic rendering for always-fresh breaking news
export const dynamic = 'force-dynamic';

export default async function BreakingNewsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to load breaking news');
  }

  const payload = await res.json();
  const news = Array.isArray(payload) ? payload : [];

  return (
    <main>
      <h1>Breaking News</h1>
      <p>This page is always rendered on the server with the latest headlines.</p>

      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> – {item?.category ?? 'Breaking'}
          </li>
        ))}
      </ul>
    </main>
  );
}
