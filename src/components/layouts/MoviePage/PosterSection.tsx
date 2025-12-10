"use client";

import { Play, ThumbsUp, Plus, Info } from "lucide-react";
import { PosterSectionProps } from "@/types/movie";

export default function PosterSection({ onPlay, title = "Stranger Things", description = "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, supernatural forces and one strange little girl.", image = "https://wallpapercave.com/wp/wp1917154.jpg" }: PosterSectionProps) {
  return (
    <section className="relative flex justify-center pt-8 w-full">
      <div className="relative w-[95%] h-[420px] rounded-xl overflow-hidden shadow-2xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] text-center flex flex-col items-center">
          <h1 className="text-xl font-semibold text-white drop-shadow-lg">{title}</h1>

          <p className="text-sm text-neutral-300 mt-1 truncate max-w-full drop-shadow-lg">{description}</p>
          <div className="flex items-center gap-4 mt-4">
            <button onClick={onPlay} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-lg text-white text-sm font-medium shadow-lg">
              <Play className="h-5 w-5" />
              Play Now
            </button>

            <div className="flex items-center gap-3">
              <button className="p-3 rounded-lg bg-black/80 hover:bg-black/90 border border-white/10 shadow-md">
                <ThumbsUp className="h-5 w-5 text-white" />
              </button>

              <button className="p-3 rounded-lg bg-black/80 hover:bg-black/90 border border-white/10 shadow-md">
                <Plus className="h-5 w-5 text-white" />
              </button>

              <button className="p-3 rounded-lg bg-black/80 hover:bg-black/90 border border-white/10 shadow-md">
                <Info className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
