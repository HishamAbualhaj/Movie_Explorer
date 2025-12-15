import Image from "next/image";
import HeartButton from "@/components/ui/HeartButton";
import WatchedButton from "@/components/ui/WatchedButton";
import { Movie, Show } from "@/types/movie";
import WatchLaterButton from "@/components/ui/WatchLatterButton";

type Props = {
  movie: Movie | Show;
  isFavorite?: boolean;
  isWatchLater?: boolean;
  isWatched?: boolean;
  onToggleFavorite?: () => void;
  onToggleWatchLater?: () => void;
  onToggleWatched?: () => void;
  size?: "small" | "medium";
  showRating?: boolean;
  showYear?: boolean;
  showDuration?: boolean;
  showSeasons?: boolean;
};

export default function MovieCard({
  movie: media,
  isFavorite = false,
  isWatchLater = false,
  isWatched = false,
  onToggleFavorite,
  onToggleWatchLater,
  onToggleWatched,
  size = "medium",
  showRating = false,
  showYear = false,
  showDuration = false,
  showSeasons = false,
}: Props) {
  const isShow = "seasons" in media;

  return (
    <article
      aria-labelledby={`media-${media.id}-title`}
      className={`flex flex-col rounded-lg overflow-hidden bg-bg-light shadow-lg ${
        size === "small" ? "w-60" : "w-80"
      }`}
    >
      <div className="relative h-56 md:h-64 m-3 rounded-md overflow-hidden">
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4
                  bg-linear-to-br from-zinc-700/80 via-zinc-900/90 to-black backdrop-blur-3xl"
        >
          <div className="absolute inset-0 bg-black/20" />
          <h3 className="text-base font-semibold text-text-main leading-snug">
            {media.title}
          </h3>

          <div className="mt-2 text-xs text-text-secondary">
            <span>{media.year}</span>
            <span className="mx-1">•</span>
            <span>⭐ {media.rating}</span>
          </div>
        </div>

        {media.poster && (
          <Image
            src={media.poster}
            alt={media.title}
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

      <div className="flex-1 flex flex-col justify-between mx-3 px-2 my-1">
        <div className="flex-1  flex flex-row justify-between">
          <h3
            id={`media-${media.id}-title`}
            className="text-sm font-semibold text-text-main line-clamp-2"
          >
            {media.title}
            {/* <span className="text-text-muted text-xs">({media.year})</span> */}
          </h3>
          <div className="flex items-center gap-2">
            <WatchLaterButton
              active={isWatchLater}
              onClick={onToggleWatchLater}
            />
            <WatchedButton active={isWatched} onClick={onToggleWatched} />
          </div>
        </div>
      </div>
      <div className="mx-3 mt-1 mb-3 px-2">
        <div className="flex flex-wrap gap-2">
          {showRating && media.rating && (
            <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-bg text-text-main">
              ⭐ {media.rating}
            </span>
          )}

          {showYear && media.releaseDate && (
            <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-bg text-text-main">
              Released: {media.releaseDate}
            </span>
          )}

          {showDuration && !isShow && media.duration && (
            <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-bg text-text-main">
              {media.duration} min
            </span>
          )}

          {showSeasons && isShow && (
            <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-bg text-text-main">
              {media.seasons} {media.seasons === 1 ? "season" : "seasons"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
