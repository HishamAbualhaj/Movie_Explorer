import Button from "@/components/ui/Button";
import Link from "next/link";

export default function LoginRequiredBox() {
  return (
    <div className="bg-bg-dark border border-border p-8 rounded-xl w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-text-main">
            Login Required
          </h2>
          <p className="text-text-secondary text-lg mt-2">
            You need to be logged in to view your favourite movies.
          </p>
        </div>

        <div className="flex gap-4 justify-center md:justify-end">
          <Link href="/login" className="inline-block">
            <Button variant="primary">Login</Button>
          </Link>
          <Link href="/signup" className="inline-block">
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
