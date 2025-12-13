import Link from "next/link";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#0A0A0A_0%,#2B0B0F_45%,#5A0E14_100%)]">
      <div className="text-center px-6">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
          <span className="text-primary text-2xl font-bold">!</span>
        </div>

        <h1 className="text-4xl font-bold text-white">404 – Page Not Found</h1>

        <p className="mt-4 text-text-muted max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved. Let’s get
          you back to discovering great content.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
