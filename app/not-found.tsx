import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", padding: "4rem 0" }}>
        <span className="badge">404</span>
        <h1 className="hero-title">Page Not Found</h1>
        <p className="hero-bio" style={{ margin: "0 auto 1.5rem" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
