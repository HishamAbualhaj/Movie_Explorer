"use client";

import { useEffect, useState } from "react";
import FavouritesList from "@/components/layouts/Favourites&WatchLater/FavouritesList";
import { useFavouritesStore } from "@/stores/favouritesStore";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useAuthStore } from "@/stores/authStore";
import LoginRequiredBox from "@/components/layouts/Favourites&WatchLater/LoginRequiredBox";
import WatchLaterList from "@/components/layouts/Favourites&WatchLater/WatchLaterList";
import { useWatchLaterStore } from "@/stores/watchLaterStore";

export default function FavouritesPage() {
  const watchLater = useWatchLaterStore((state) => state.watchLater);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [watchLater]);

  return (
    <section className="min-h-screen bg-bg text-text-main py-12 px-4 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Your Watch Later List</h1>

          <Link href="/movies&shows" className="inline-block">
            <Button variant="primary" className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-base">Add More To Watch Later</Button>
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
          <WatchLaterList movies={watchLater} />
        )}
      </div>
    </section>
  );
}
