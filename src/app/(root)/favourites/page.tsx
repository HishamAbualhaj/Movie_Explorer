"use client";

import { useEffect, useState } from "react";
import FavouritesList from "@/components/layouts/Favourites/FavouritesList";
import { useFavouritesStore } from "@/stores/favouritesStore";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useAuthStore } from "@/stores/authStore";
import LoginRequiredBox from "@/components/layouts/Favourites/LoginRequiredBox";

export default function FavouritesPage() {
  const movies = useFavouritesStore((state) => state.favourites);
  const loadInitialData = useFavouritesStore((state) => state.loadInitialData);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInitialData();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loadInitialData]);

  return (
    <section className="min-h-screen bg-bg text-text-secondary py-12 px-4 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Your Favourite Movies</h1>

          <Link href="/" className="inline-block">
            <Button variant="primary" className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-base">Add More Favourites</Button>
          </Link>
        </div>
        {!isLoggedIn ? (
          <LoginRequiredBox />
        ) : loading ? (
          <div className="w-full flex justify-center py-20">
            <p className="text-text-secondary text-xl animate-pulse">
              Loading your favourites...
            </p>
          </div>
        ) : (
          <FavouritesList movies={movies} />
        )}
      </div>
    </section>
  );
}
