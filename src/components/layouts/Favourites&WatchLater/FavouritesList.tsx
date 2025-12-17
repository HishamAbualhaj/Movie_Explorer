import { Movie, Show } from "@/types/movie";
import FavouriteCard from "./FavouriteCard";

interface Props {
  movies: (Movie|Show)[];
}

export default function FavouritesList({ movies }: Props) {
  if (!movies.length) {
    return <p className="text-text-secondary text-lg">You haven’t added any favourites yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <FavouriteCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
