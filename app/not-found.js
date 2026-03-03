import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="container inner-hero reveal in">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p className="lead">
          The requested page does not exist. Return to homepage and continue
          browsing.
        </p>
      </section>
      <section className="container inner-content reveal in">
        <p>
          <Link href="/">Go Back To Home</Link>
        </p>
      </section>
    </main>
  );
}
