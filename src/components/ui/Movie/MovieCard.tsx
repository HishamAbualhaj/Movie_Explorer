import { Movie } from "@/types/movie";
import Image from "next/image";
import RatingBadge from "./RatingBadge";
import { Clock, Star } from "lucide-react";

const MovieCard = ({
  title,
  poster,
  overview,
  year,
  rating,
  genre,
  duration,
}: Movie) => {
  const hours = Math.floor(duration / 60);
  const mins = duration % 60;
  return (
    <div className="border border-border rounded-lg bg-bg-light p-5 max-w-[450px] ">
      <div className="flex items-center min-h-[400px] border border-border p-2 rounded-lg mt-5 relative">
        <Image
          className="object-contain"
          src={poster ?? ""}
          alt=""
          height={200}
          width={400}
        />
        <div className="absolute top-[6%] -left-[9%] -rotate-45">
          <RatingBadge rating={rating} />
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="lg:text-2xl text-xl text-white font-medium lg:line-clamp-1">
          {title}
        </div>

        <div className="w-fit rounded-md bg-bg border border-border text-white px-4 py-1 z-10 font-bold">
          {year}
        </div>
      </div>
      <div className="mt-5 text-text-secondary lg:line-clamp-3 line-clamp-4">
        {overview}
      </div>
      <div className="flex flex-wrap gap-2 mt-5">
        {genre?.map((gen, i) => (
          <div
            key={i}
            className="border border-border bg-bg text-white px-4 py-0.5 rounded-lg text-[15px]"
          >
            {gen}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="font-medium border border-border bg-bg rounded-2xl text-[15px] px-3 py-1 text-text-muted flex gap-2 items-center">
          <Clock size={19} />
          {hours}h {mins}min
        </div>
        <div className="text-white flex items-center gap-2">
          <Star size={19} fill="#FACC15" stroke="none" />
          {rating}
        </div>
      </div>
    </div>
  );
};
export default MovieCard