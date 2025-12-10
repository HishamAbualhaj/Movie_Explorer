import Link from "next/link";

export default function NovaHeader() {
  return (
    <div className="p-4 bg-bg-dark border-b border-border flex justify-between items-center">
      <h2 className="text-xl font-semibold text-text-main">Nova</h2>
      <Link href="/novabot" className="text-primary hover:underline text-sm">
        Open Full Chat
      </Link>
    </div>
  );
}
