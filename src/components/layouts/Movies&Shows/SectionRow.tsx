import MovieCard from "./MovieCard";
import { Movie, Show } from "@/types/movie";

type RowProps = {
  title: string;
  items: Array<Movie | Show>;
  getStateFor?: (media: Movie | Show) => {
    isFavorite: boolean;
    isWatchLater: boolean;
    isWatched: boolean;
  };
  onToggle?: (
    media: Movie | Show,
    action: "fav" | "later" | "watched"
  ) => void;
  itemSize?: "small" | "medium";
  seeAllHref?: string;
  showRating?: boolean;
  showYear?: boolean;
  showDuration?: boolean;
  showSeasons?: boolean;
};

export default function SectionRow({
  title,
  items,
  getStateFor,
  onToggle,
  itemSize = "small",
  seeAllHref,
  showRating = false,
  showYear = false,
  showDuration = false,
  showSeasons = false,
}: RowProps) {
  return (
    <section className="my-8">
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-text-main">{title}</h2>

        {seeAllHref && (
          <a
            href={seeAllHref}
            className="text-sm text-text-secondary hover:underline"
          >
            See all
          </a>
        )}
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {items.map((media) => {
            const state = getStateFor
              ? getStateFor(media)
              : {
                  isFavorite: false,
                  isWatchLater: false,
                  isWatched: false,
                };

            return (
              <div key={media.id} className="shrink-0">
                <MovieCard
                  movie={media}
                  size={itemSize}
                  isFavorite={state.isFavorite}
                  isWatchLater={state.isWatchLater}
                  isWatched={state.isWatched}
                  onToggleFavorite={() => onToggle?.(media, "fav")}
                  onToggleWatchLater={() => onToggle?.(media, "later")}
                  onToggleWatched={() => onToggle?.(media, "watched")}
                  showRating={showRating}
                  showYear={showYear}
                  showDuration={showDuration}
                  showSeasons={showSeasons}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
