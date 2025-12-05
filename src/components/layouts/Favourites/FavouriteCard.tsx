import { Movie } from "@/types/movie";

interface Props {
  movie: Movie;
}

export default function FavouriteCard({ movie }: Props) {
  const hasPoster = !!movie.poster;

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:scale-[1.02] transition">
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
        <div className="w-full h-64 bg-zinc-800 flex items-center justify-center text-gray-400 text-sm">
          No Image Available
        </div>
      )}

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>

        <div className="text-gray-400 text-sm space-y-1">
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
          <p className="line-clamp-2"><strong>Overview:</strong> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
