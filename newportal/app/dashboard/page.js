

// Dynamic Rendering (SSR) – no caching, runs on every request
export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  // This data will always be fresh (no cache)
  const res = await fetch('https://jsonplaceholder.typicode.com/dashboard', {
    cache: 'no-store',
  });

  const data = await res.json();

  return (
    <main>
      <h1>User Dashboard</h1>
      <p>This page is dynamically rendered on every request.</p>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
