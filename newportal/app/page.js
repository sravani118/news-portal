export const revalidate = false; // Static Rendering (SSG)

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Welcome to My Next.js App</h1>
      <p>This homepage is statically generated at build time.</p>

      <p>
        This is perfect for fast-loading content like landing pages, product
        listings, or blog homepages that do not change frequently.
      </p>
    </main>
  );
}
