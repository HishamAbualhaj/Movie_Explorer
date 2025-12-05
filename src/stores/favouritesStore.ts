import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Movie } from "../types/movie";

type FavouritesState = {
  favourites: Movie[];
  addFavourite: (movie: Movie) => void;
  removeFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
};

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favourites: [],

      addFavourite: (movie) =>
        set((state) => {
          if (state.favourites.find((m) => m.id === movie.id)) return state;
          return { favourites: [...state.favourites, movie] };
        }),

      removeFavourite: (id) =>
        set((state) => ({
          favourites: state.favourites.filter((m) => m.id !== id),
        })),

      isFavourite: (id) =>
        get().favourites.some((m) => m.id === id),
    }),
    { name: "favourites-storage" }
  )
);
