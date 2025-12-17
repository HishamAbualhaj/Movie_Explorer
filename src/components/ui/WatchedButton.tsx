import { Check, CheckCircle } from "lucide-react";

interface WatchedButtonProps {
  active?: boolean;
  size?: number;
  className?: string;
  onClick?: () => void;
}

export default function WatchedButton({
  active = false,
  size = 22,
  className = "",
  onClick,
}: WatchedButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Watched"
      className={`transition-all duration-200 ${className}`}
    >
      {active ? (
        <CheckCircle
          size={size}
          className="text-black fill-green-400 transition-all duration-200"
        />
      ) : (
        <Check
          size={size}
          className="text-white transition-all duration-200"
        />
      )}
    </button>
  );
}
