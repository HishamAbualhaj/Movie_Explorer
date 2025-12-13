import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

type RowProps = {
  title: string;
  items: Movie[];
  getStateFor?: (movie: Movie) => {
    isFavorite: boolean;
    isWatchLater: boolean;
    isWatched: boolean;
  };
  onToggle?: (movie: Movie, action: "fav" | "later" | "watched") => void;
  itemSize?: "small" | "medium";
  seeAllHref?: string;
};

export default function SectionRow({
  title,
  items,
  getStateFor,
  onToggle,
  itemSize = "small",
  seeAllHref,
}: RowProps) {
  return (
    <section className="my-8">
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-text-main">{title}</h2>
        {seeAllHref && (
          <a href={seeAllHref} className="text-sm text-text-secondary hover:underline">
            See all
          </a>
        )}
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {items.map((m) => {
            const state = getStateFor ? getStateFor(m) : { isFavorite: false, isWatchLater: false, isWatched: false };

            return (
              <div key={m.id} className="shrink-0">
                <MovieCard
                  movie={m}
                  size={itemSize}
                  isFavorite={state.isFavorite}
                  isWatchLater={state.isWatchLater}
                  isWatched={state.isWatched}
                  onToggleFavorite={() => onToggle?.(m, "fav")}
                  onToggleWatchLater={() => onToggle?.(m, "later")}
                  onToggleWatched={() => onToggle?.(m, "watched")}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
