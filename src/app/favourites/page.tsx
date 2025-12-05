"use client";

import { useState, useEffect } from "react";
import FavouritesList from "@/components/layouts/Favourites/FavouritesList";
import { favouriteMovies } from "@/components/layouts/Favourites/FavouriteMovies";
import { Movie } from "@/types/movie";

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState<Movie[]>([]);

  useEffect(() => {
    // temporary: load from data file
    setFavourites(favouriteMovies);

    // Future: Replace with Redux selector
    // setFavourites(useAppSelector(state => state.favourites.movies));
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-12 px-4 flex justify-center">
    <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-8">Your Favourite Movies</h1>
        <FavouritesList movies={favourites} />
    </div>
    </section>
  );
}
