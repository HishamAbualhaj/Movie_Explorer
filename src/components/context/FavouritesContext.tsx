"use client";
import { createContext, useContext, useState } from "react";
import { Movie } from "@/types/movie";
import { FavouritesContextType } from "@/types/movie";

const FavouritesContext = createContext<FavouritesContextType | null>(null);

export function FavouritesProvider({ children }: { children: React.ReactNode }) {
  const [favourites, setFavourites] = useState<Movie[]>([]);
  const addFavourite = (movie: Movie) => {
    setFavourites((prev) => (prev.find((m) => m.id === movie.id) ? prev : [...prev, movie]));
  };

  const removeFavourite = (id: string) => {
    setFavourites((prev) => prev.filter((m) => m.id !== id));
  };

  const isFavourite = (id: string) => {
    return favourites.some((m) => m.id === id);
  };

  return <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFavourite, isFavourite }}>{children}</FavouritesContext.Provider>;
}

export function useFavourites() {
  const ctx = useContext(FavouritesContext);
  if (!ctx) throw new Error("useFavourites must be used inside provider");
  return ctx;
}
