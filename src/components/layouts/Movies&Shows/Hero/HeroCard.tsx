import Image from "next/image";
import { Bookmark, Clock, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import HeartButton from "@/components/ui/HeartButton";
import WatchLaterButton from "@/components/ui/WatchLatterButton";
import WatchedButton from "@/components/ui/WatchedButton";

type Movie = {
  title: string;
  description: string;
  image: string;
  id?: string | number;
};

type HeroCardProps = {
  movie: Movie;
  index: number;
  isFavorite: boolean;
  isWatchLater: boolean;
  isWatched: boolean;
  onToggleFavorite: () => void;
  onToggleWatchLater: () => void;
  onToggleWatched: () => void;
};

export default function HeroCard({
  movie,
  index,
  isFavorite,
  isWatchLater,
  isWatched,
  onToggleFavorite,
  onToggleWatchLater,
  onToggleWatched,
}: HeroCardProps) {
    const handleDetailsClick = (id: string | number | undefined) => {
      // Implement navigation to details page
      console.log(`Navigate to details of movie ID: ${id}`);
    }
  return (
    <div className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden rounded-2xl shadow-2xl">
      <Image
        src={movie.image}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/30" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-full px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center text-text-main">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {movie.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-6 line-clamp-3">
            {movie.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <div className="flex items-center gap-4 justify-center">
              <HeartButton
                className="hover:bg-bg-light"
                filled={isFavorite}
                onClick={onToggleFavorite}
              />

              <WatchLaterButton
                className="hover:bg-bg-light"
                active={isWatchLater}
                onClick={onToggleWatchLater}
              />

              <WatchedButton
                className="hover:bg-bg-light"
                active={isWatched}
                onClick={onToggleWatched}
              />
            </div>

            <Button
              variant="secondary"
              className="border-0 hidden sm:inline-flex"
              onClick={() => handleDetailsClick(movie.id)}
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
