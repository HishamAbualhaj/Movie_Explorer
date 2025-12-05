import LabelForm from "./LabelForm";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function InputForm({ label, className, ...props }: InputProps) {
  return (
    <div>
      <LabelForm>{label}</LabelForm>
      <input
        {...props}
        className={[
          'mt-2 w-full rounded-2xl bg-bg-dark border border-border px-4 py-3 text-sm outline-none focus:border-primary',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      />
    </div>
  );
}