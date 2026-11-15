import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap py-24 lg:py-32">
      <h1 className="display-section">This page isn&apos;t in the pack</h1>
      <p className="lead mt-6 max-w-xl">
        The link may be old, or the product may have sold out and come down.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/shop/" className="btn btn-gold">
          Browse the shop
        </Link>
        <Link href="/" className="btn btn-line">
          Go to the home page
        </Link>
      </div>
    </div>
  );
}
