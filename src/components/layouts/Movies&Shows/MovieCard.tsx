import Image from "next/image";
import HeartButton from "@/components/ui/HeartButton";
import WatchedButton from "@/components/ui/WatchedButton";
import { Movie } from "@/types/movie";
import WatchLaterButton from "@/components/ui/WatchLatterButton";

type Props = {
  movie: Movie;
  isFavorite?: boolean;
  isWatchLater?: boolean;
  isWatched?: boolean;
  onToggleFavorite?: () => void;
  onToggleWatchLater?: () => void;
  onToggleWatched?: () => void;
  size?: "small" | "medium";
};

export default function MovieCard({
  movie,
  isFavorite = false,
  isWatchLater = false,
  isWatched = false,
  onToggleFavorite,
  onToggleWatchLater,
  onToggleWatched,
  size = "medium",
}: Props) {
  return (
    <article
      aria-labelledby={`movie-${movie.id}-title`}
      className={`flex flex-col rounded-lg overflow-hidden bg-zinc-900 shadow-lg h-100 ${
        size === "small" ? "w-60" : "w-80"
      }`}
    >
      <div className="relative h-56 md:h-64 w-full">
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4
                  bg-linear-to-br from-zinc-700/80 via-zinc-900/90 to-black backdrop-blur-3xl"
        >
          <div className="absolute inset-0 bg-black/20" />
          <h3 className="text-base font-semibold text-text-main leading-snug">
            {movie.title}
          </h3>

          <div className="mt-2 text-xs text-text-secondary">
            <span>{movie.year}</span>
            <span className="mx-1">•</span>
            <span>⭐ {movie.rating}</span>
          </div>
        </div>

        {movie.poster && (
          <Image
            src={movie.poster}
            alt={movie.title}
            fill
            className="object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        <div className="absolute top-2 right-2 flex gap-2">
        <HeartButton filled={isFavorite} onClick={onToggleFavorite} />
      </div>
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3
            id={`movie-${movie.id}-title`}
            className="text-sm font-semibold text-text-main line-clamp-2"
          >
            {movie.title}{" "}
            <span className="text-text-muted text-xs">({movie.year})</span>
          </h3>

          <div className="text-xs text-text-secondary mt-1">
            <span>{movie.rating ? `⭐ ${movie.rating}` : ""}</span>
            {movie.genre ? ` • ${movie.genre.join(", ")}` : ""}
          </div>

          <p className="text-xs text-text-muted mt-2 line-clamp-3">
            {movie.overview}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <WatchLaterButton
              active={isWatchLater}
              onClick={onToggleWatchLater}
            />
            <WatchedButton active={isWatched} onClick={onToggleWatched} />
          </div>

          <button
            className="text-xs text-text-main bg-bg px-3 py-1 rounded-md"
            aria-label={`Details for ${movie.title}`}
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}
