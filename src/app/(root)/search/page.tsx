import SearchMovie from "@/components/layouts/Search/SearchMovie";
import MovieSkeletonCard from "@/components/ui/Movie/MovieSkeletonCard";


const page = () => {
  const isFound = false;

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

      <div className="mt-10 pb-20 ">
        <div className="grid grid-cols-4 gap-3">
          <MovieSkeletonCard />
        </div>

        <div className="">
          {isFound && (
            <div className="text-text-secondary text-2xl text-center font-medium">
              Start typing to explore movies from our collection.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
