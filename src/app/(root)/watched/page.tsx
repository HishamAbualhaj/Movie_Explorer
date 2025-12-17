"use client";

import LoginRequiredBox from "@/components/layouts/Favourites&WatchLater/LoginRequiredBox";
import Button from "@/components/ui/Button";
import WatchedButton from "@/components/ui/WatchedButton";
import { useAuthStore } from "@/stores/authStore";
import { useWatchedStore } from "@/stores/watchedStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WatchedPage() {
  const watched = useWatchedStore((state) => state.watched);
  const removeWatched = useWatchedStore((state) => state.removeWatched);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [watched]);

  return (
    <section className="flex-1 container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-main">
          Your Watched Media
        </h1>

        <Link href="/movies&shows" className="inline-block">
          <Button
            variant="primary"
            className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-base"
          >
            Add More Watched Media
          </Button>
        </Link>
      </div>
      {!isLoggedIn ? (
        <LoginRequiredBox />
      ) : loading ? (
        <div className="w-full flex justify-center py-20">
          <p className="text-text-secondary text-xl animate-pulse">
            Loading your list...
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-6">
          {watched.map((m, i) => (
            <li
              key={m.id}
              className="flex items-center gap-3 bg-bg-dark rounded-md p-3"
            >
              <div className="relative w-20 h-12 rounded overflow-hidden shrink-0">
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-4
                                            bg-linear-to-br from-zinc-700/80 via-zinc-900/90 to-black backdrop-blur-3xl"
                />
                {m.poster && (
                  <Image
                    src={m.poster}
                    alt={m.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-text-secondary">#{i + 1}</div>
                    <div className="text-sm font-medium text-text-main">
                      {m.title}{" "}
                      <span className="text-xs text-text-muted">
                        ({m.year})
                      </span>
                    </div>
                    <div className="text-xs text-text-muted">
                      {m.genre?.join(", ")}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-xs text-text-muted bg-bg-light px-2 py-1 rounded">
                      {m.rating ? `⭐ ${m.rating}` : ""}
                    </div>
                    <WatchedButton
                      active={true}
                      onClick={() => {
                        removeWatched(m.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
