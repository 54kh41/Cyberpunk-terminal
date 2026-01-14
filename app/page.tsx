export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "3rem",
      background: "#000",
      color: "#00ff99",
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace"
    }}>
      <h1 style={{ margin: 0, fontSize: "2rem" }}>Welcome to The Calculus Of A Shattered Soul</h1>
      <p style={{ opacity: 0.85, marginTop: "1rem" }}>
        This is a stable, deployable landing page. Replace this file later with your full terminal UI
        (the rest of your `app/` files and components will continue to work).
      </p>
      <p style={{ marginTop: "2rem", opacity: 0.7 }}>
        To enable full features (comments, translations, uploads) set Supabase keys in Vercel environment variables.
      </p>
    </main>
  );
}
