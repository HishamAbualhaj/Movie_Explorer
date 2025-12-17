import { Bookmark, BookmarkCheck, Clock, ClockIcon } from "lucide-react";

interface WatchLaterButtonProps {
  active?: boolean;
  size?: number;
  className?: string;
  onClick?: () => void;
}

export default function WatchLaterButton({
  active = false,
  size = 22,
  className = "",
  onClick,
}: WatchLaterButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Watch Later"
      className={`transition-all duration-200 ${className}`}
    >
      {active ? (
        <BookmarkCheck
          size={size}
          className="text-black fill-blue-400 transition-all duration-200"
        />
      ) : (
        <Bookmark
          size={size}
          className="text-white transition-all duration-200"
        />
      )}
    </button>
  );
}
