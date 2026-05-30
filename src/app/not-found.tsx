export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#050510" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: 900, color: "#fff", margin: "0 0 1rem" }}>404</h1>
        <p style={{ color: "#71717a", marginBottom: "2rem" }}>Page not found.</p>
        <a href="/" style={{ color: "#818cf8", textDecoration: "underline" }}>← Back to home</a>
      </div>
    </main>
  );
}
