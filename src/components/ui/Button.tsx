type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  children,
  iconLeft,
  iconRight,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200";

  const variants = {
    primary: `bg-primary text-white hover:bg-primary-light active:bg-primary-dark`,
    secondary: `bg-bg-dark text-text-main border border-border hover:bg-bg active:bg-bg-dark`,
  };

  return (
    <button className={`${variants[variant]} ${base} ${className}`} {...props}>
      {iconLeft && <span className="text-lg">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="text-lg">{iconRight}</span>}
    </button>
  );
}
