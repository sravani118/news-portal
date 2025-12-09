

// Static Rendering (SSG) – only at build time
export const revalidate = false;

export default function AboutPage() {
  return (
    <main>
      <h1>About DailyEdge</h1>
      <p>
        DailyEdge is a modern news portal focused on fast, reliable, and
        relevant information for our readers.
      </p>
      <p>
        This page is statically generated at build time and will not re-render
        on the server until the next deployment.
      </p>
    </main>
  );
}
