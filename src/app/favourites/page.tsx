"use client";

import { useEffect } from "react";
import FavouritesList from "@/components/layouts/Favourites/FavouritesList";
import { useFavouritesStore } from "@/stores/useFavouritesStore";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function FavouritesPage() {
  const movies = useFavouritesStore((state) => state.movies);
  const loadInitialData = useFavouritesStore((state) => state.loadInitialData);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  return (
    <section className="min-h-screen bg-bg text-text-secondary py-12 px-4 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Your Favourite Movies</h1>

          <Link href="/" className="inline-block">
            <Button variant="primary">
              Add More Favourites
            </Button>
          </Link>
        </div>

        <FavouritesList movies={movies} />
      </div>
    </section>
  );
}
