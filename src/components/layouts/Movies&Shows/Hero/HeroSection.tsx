"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroMovies } from "./Movies.data";
import HeroCard from "./HeroCard";

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  const [favorites, setFavorites] = useState<Record<number, boolean>>({});
  const [watchLater, setWatchLater] = useState<Record<number, boolean>>({});
  const [watched, setWatched] = useState<Record<number, boolean>>({});

  const prevMovie = () =>
    setIndex((prev) => (prev === 0 ? heroMovies.length - 1 : prev - 1));
  const nextMovie = () =>
    setIndex((prev) => (prev === heroMovies.length - 1 ? 0 : prev + 1));

  const toggleFavorite = (i: number) =>
    setFavorites((prev) => ({ ...prev, [i]: !prev[i] }));

  const toggleWatchLater = (i: number) =>
    setWatchLater((prev) => ({ ...prev, [i]: !prev[i] }));

  const toggleWatched = (i: number) =>
    setWatched((prev) => ({ ...prev, [i]: !prev[i] }));

  const movie = heroMovies[index];

  return (
    <div className="container-wrapper">
      <section className="px-1 sm:px-2 lg:px-3 my-6">
        <div className="relative">
          <HeroCard
            movie={movie}
            index={index}
            isFavorite={!!favorites[index]}
            isWatchLater={!!watchLater[index]}
            isWatched={!!watched[index]}
            onToggleFavorite={() => toggleFavorite(index)}
            onToggleWatchLater={() => toggleWatchLater(index)}
            onToggleWatched={() => toggleWatched(index)}
          />

          <button
            onClick={prevMovie}
            aria-label="Previous movie"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-bg hover:bg-bg-dark text-text-main"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextMovie}
            aria-label="Next movie"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-bg hover:bg-bg-dark text-text-main"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </section>
    </div>
  );
}
