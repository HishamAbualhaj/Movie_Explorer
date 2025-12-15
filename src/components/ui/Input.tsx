import { cn } from "@/lib/utils";

type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  checked?: boolean;
  className?: string;
};

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  className,
  checked,
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && <label className="text-sm text-text-muted">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        checked={checked}
        onChange={onChange}
        className={cn(
          "px-4 py-2 rounded-xl  text-white border outline-none transition",
          error ? "border-red-500" : "border-bg-light focus:border-primary",
          "border border-border",
          className
        )}
      />

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
export default Input;
