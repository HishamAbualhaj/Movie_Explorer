import { Heart, HeartIcon } from "lucide-react";

interface HeartButtonProps {
  filled?: boolean;
  size?: number;
  className?: string;
  onClick?: () => void;
}

export default function HeartButton({
  filled = false,
  size = 22,
  className = "",
  onClick,
}: HeartButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Favourite"
      className={`transition-all duration-200 ${className}`}
    >
      {filled ? (
        <HeartIcon
          size={size}
          className="text-red-500 fill-red-500 transition-all duration-200"
        />
      ) : (
        <Heart
          size={size}
          className="text-white transition-all duration-200"
        />
      )}
    </button>
  );
}
