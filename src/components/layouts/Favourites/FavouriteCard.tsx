"use client";

import { Movie } from "@/types/movie";
import { Heart } from "lucide-react";
import { useFavouritesStore } from "@/stores/useFavouritesStore";

interface Props {
  movie: Movie;
}

export default function FavouriteCard({ movie }: Props) {
  const removeFromFavourites = useFavouritesStore(
    (state) => state.removeFromFavourites
  );

  const hasPoster = !!movie.poster;

  return (
    <div className="bg-bg-light rounded-xl overflow-hidden border border-border hover:scale-[1.02] transition">
      {hasPoster ? (
        <img
          src={movie.poster}
          alt={movie.title}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-bg-light flex items-center justify-center text-text-secondary text-sm">
          No Image Available
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">{movie.title}</h2>

          <button
            onClick={() => removeFromFavourites(movie.id)}
            className="p-1"
          >
            <Heart
              size={22}
              className="cursor-pointer transition"
              color="red"
              fill="red"
            />
          </button>
        </div>

        <div className="text-text-secondary text-sm space-y-1">
          <p>
            <strong>Year:</strong> {movie.year}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {movie.rating}
          </p>
          <p className="line-clamp-2">
            <strong>Overview:</strong> {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
