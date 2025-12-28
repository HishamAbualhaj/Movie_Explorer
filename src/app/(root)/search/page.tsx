"use client";
import FilterMovie from "@/components/layouts/Search/FilterMovie";
import SearchMovie from "@/components/layouts/Search/SearchMovie";
import MovieCard from "@/components/ui/Movie/MovieCard";
import MovieSkeletonCard from "@/components/ui/Movie/MovieSkeletonCard";
import { movies } from "@/data/movies";
import { useMovies } from "@/hooks/useMovies";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const language = searchParams.get("language") || "";
  const sort = searchParams.get("order") as "Newest" | "Oldest" | undefined;
  const duration = searchParams.get("duration") as
    | "90 min"
    | "90 - 120 min"
    | "120+ min"
    | undefined;
  const type = searchParams.get("type") as
    | "Top Rated"
    | "Masterpiece"
    | "Recommended"
    | undefined;

  const {
    data: movies,
    isLoading,
    isError,
  } = useMovies({
    category,
    language,
    sort,
    duration,
    type,
    search,
  });
  const isFound = movies?.length === 0;
  return (
    <div className="container-wrapper">
      <div className="py-8">
        <div className="text-3xl text-white">Explore Movies and Shows</div>
        <div className="mt-3 text-text-secondary text-lg">
          Search for movies by title, genre, or year and discover something new.
        </div>
      </div>
      <div className="mt-5 lg:flex justify-between items-end gap-5">
        <SearchMovie />
      </div>

      <div className="py-5">
        <FilterMovie />
      </div>

      <div className="mt-10 pb-20 ">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-3">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <MovieSkeletonCard key={i} />
              ))
            : movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)}
          {/* {movies.map((movie, i) => (
            <MovieCard key={i} {...movie} />
          ))} */}
        </div>
        {isFound && (
          <div className="h-[calc(100vh-500px)] mt-5">
            <div className="text-text-secondary text-2xl text-center font-medium">
              Start typing to explore movies from our collection.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
