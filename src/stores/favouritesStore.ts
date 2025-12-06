import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Movie } from "@/types/movie";
import { favouriteMovies } from "@/data/FavouriteMovies"; //temporary

type FavouritesState = {
  favourites: Movie[];
  addFavourite: (movie: Movie) => void;
  removeFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;

  // if you still want to load initial data
  loadInitialData: () => void;
};

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favourites: [],

      loadInitialData: () => {
        set(() => ({
          favourites: favouriteMovies,
        }));
      },

      addFavourite: (movie) =>
        set((state) => {
          if (state.favourites.some((m) => m.id === movie.id)) return state;
          return { favourites: [...state.favourites, movie] };
        }),

      removeFavourite: (id) =>
        set((state) => ({
          favourites: state.favourites.filter((m) => m.id !== id),
        })),

      isFavourite: (id) =>
        get().favourites.some((m) => m.id === id),
    }),
    {
      name: "favourites-storage", 
    }
  )
);
