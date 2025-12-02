export default function LabelForm({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
      {children}
    </p>
  );
}