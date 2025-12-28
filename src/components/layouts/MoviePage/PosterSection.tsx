"use client";
import { useState } from "react";
import { Play, Clock } from "lucide-react";
import HeartButton from "@/components/ui/HeartButton";
import { PosterSectionProps } from "@/types/movie";

export default function PosterSection({ title = "Stranger Things", description = "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces.", image = "https://wallpapercave.com/wp/wp1917154.jpg" }: PosterSectionProps) {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleWatchLater = () => {
    alert("Added to Watch Later");
  };

  return (
    <section className="relative flex justify-center pt-8 w-full">
      <div className="relative w-[95%] h-[420px] rounded-xl overflow-hidden shadow-2xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] text-center flex flex-col items-center gap-4">
          <h1 className="text-xl font-semibold text-white drop-shadow-lg">{title}</h1>

          <p className="text-sm text-neutral-300 drop-shadow-lg">{description}</p>
          <div className="flex items-center gap-4 mt-2">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-lg text-sm font-medium text-white">
              <Play className="h-4 w-4" />
              Watch Now
            </button>

            <button onClick={handleWatchLater} className="flex items-center gap-2 bg-black/80 hover:bg-black/90 transition px-4 py-2 rounded-lg text-sm text-white border border-white/10">
              <Clock className="h-4 w-4" />
              Watch Later
            </button>
            <HeartButton filled={isFavourite} onClick={() => setIsFavourite((prev) => !prev)} />
          </div>
        </div>
      </div>
    </section>
  );
}
