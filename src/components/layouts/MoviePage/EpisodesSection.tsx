"use client";
import { useState } from "react";
import { Lock, Play, Star, Plus, ArrowLeft, ArrowRight } from "lucide-react";
import { EpisodeSectionProps } from "@/types/movie";
import LockedEpisodes from "@/components/ui/LockedEpsoides";

function Stars({ count = 4 }) {
  return (
    <div className="flex text-yellow-400 mt-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={"f" + i} size={16} fill="yellow" className="text-yellow-400" />
      ))}
      {Array.from({ length: 5 - count }).map((_, i) => (
        <Star key={"e" + i} size={16} fill="none" className="text-yellow-400 opacity-40" />
      ))}
    </div>
  );
}

export default function EpisodeSection({ isSubscribed }: EpisodeSectionProps) {
  const seasons = [
    {
      season: 1,
      episodes: [
        { number: 1, title: "Chapter One", duration: "48 min", locked: false },
        { number: 2, title: "Chapter Two", duration: "53 min", locked: true },
        { number: 3, title: "Chapter Three", duration: "50 min", locked: true },
        { number: 4, title: "Chapter Four", duration: "44 min", locked: true },
        { number: 5, title: "Chapter Five", duration: "56 min", locked: true },
      ],
    },
    {
      season: 2,
      episodes: [
        { number: 1, title: "Chapter One", duration: "43 min", locked: true },
        { number: 2, title: "Chapter Two", duration: "47 min", locked: true },
        { number: 3, title: "Chapter Three", duration: "50 min", locked: true },
        { number: 4, title: "Chapter Four", duration: "44 min", locked: true },
      ],
    },
    {
      season: 3,
      episodes: [
        { number: 1, title: "Chapter One", duration: "42 min", locked: true },
        { number: 2, title: "Chapter Two", duration: "47 min", locked: true },
        { number: 3, title: "Chapter Three", duration: "50 min", locked: true },
        { number: 4, title: "Chapter Four", duration: "44 min", locked: true },
      ],
    },
  ];

  const cast = [1, 2, 3, 4, 5, 6];

  const reviews = [
    {
      name: "Layla",
      country: "From Egypt",
      rating: 4,
      oponion: "Wonderful series.",
    },
    {
      name: "Saed",
      country: "From Lebanon",
      rating: 5,
      oponion: "Amazing show!",
    },
  ];

  const [openSeason, setOpenSeason] = useState(1);
  const [currentReview, setCurrentReview] = useState(0);

  const handleNext = () => setCurrentReview((prev) => (prev + 1) % reviews.length);

  const handlePrev = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="space-y-10 text-white mt-4 w-full">
      <h2 className="text-2xl font-semibold">Seasons & Episodes</h2>

      {seasons.map((s) => (
        <div key={s.season} className="border border-white/10 rounded-xl bg-white/5 p-4 sm:p-5">
          <button onClick={() => setOpenSeason(openSeason === s.season ? -1 : s.season)} className="w-full flex justify-between items-center px-4 py-3">
            <span className="text-lg font-medium">Season {s.season}</span>
            <span className="text-sm text-gray-400">{s.episodes.length} Episodes</span>
          </button>

          {openSeason === s.season && (
            <div className="space-y-3 px-4 pb-4">
              {s.episodes.map((ep) => {
                const locked = ep.locked && !isSubscribed;

                return (
                  <div key={ep.number} className="flex items-center gap-4 p-3 bg-black/40 rounded-lg border border-white/10">
                    <div className="w-24 h-16 md:w-28 md:h-20 bg-gray-700 rounded-md flex items-center justify-center">{locked ? <Lock size={22} className="text-gray-300" /> : <Play size={22} className="text-gray-300" />}</div>

                    <div className="flex-1">
                      <h3 className="font-semibold">Episode {ep.number}</h3>
                      <p className="text-gray-300 text-sm">{ep.title}</p>
                    </div>

                    <span className="text-gray-400 text-sm whitespace-nowrap">{ep.duration}</span>
                  </div>
                );
              })}

              {!isSubscribed && <LockedEpisodes />}
            </div>
          )}
        </div>
      ))}

      {isSubscribed && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-gray-300 text-sm leading-6">When a young boy vanishes, a small town uncovers a mystery involving supernatural forces and one strange little girl.</p>
        </div>
      )}

      {isSubscribed && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-xl font-semibold mb-3">Cast</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {cast.map((c, i) => (
              <div key={i} className="w-16 h-16 bg-gray-700 rounded-md shrink-0"></div>
            ))}
          </div>
        </div>
      )}

      {isSubscribed && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Reviews</h3>

            <button className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md text-sm">
              <Plus size={16} /> Add Your Review
            </button>
          </div>

          <div className="relative">
            <div className="bg-black/40 p-4 rounded-lg border border-white/10 space-y-2 max-w-sm mx-auto">
              <h4 className="font-semibold">
                {reviews[currentReview].name}
                <span className="text-gray-400 text-sm"> {reviews[currentReview].country}</span>
              </h4>

              <Stars count={reviews[currentReview].rating} />

              <p className="text-gray-300 text-sm">{reviews[currentReview].oponion}</p>
            </div>

            <div className="flex justify-center items-center gap-4 mt-3">
              <button className="p-2 bg-white/10 rounded-full" onClick={handlePrev}>
                <ArrowLeft size={18} />
              </button>

              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${i === currentReview ? "bg-white" : "bg-gray-500"}`}></span>
                ))}
              </div>

              <button className="p-2 bg-white/10 rounded-full" onClick={handleNext}>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
