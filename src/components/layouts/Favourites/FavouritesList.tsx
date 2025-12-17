import { Movie } from "@/types/movie";
import FavouriteCard from "./FavouriteCard";
import MovieCard from "../Movies&Shows/MovieCard";

interface Props {
  movies: Movie[];
}

export default function FavouritesList({ movies }: Props) {
  if (!movies.length) {
    return <p className="text-text-secondary text-lg">You haven’t added any favourites yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <FavouriteCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
