import { create } from "zustand";
import { Movie } from "@/types/movie";
import { favouriteMovies } from "@/data/FavouriteMovies"; // temporary source

interface FavouritesState {
  movies: Movie[];
  addToFavourites: (movie: Movie) => void;
  removeFromFavourites: (id: string) => void;
  loadInitialData: () => void;
}

export const useFavouritesStore = create<FavouritesState>((set) => ({
  movies: [],

  // TEMPORARY: load from data file
  loadInitialData: () =>
    set(() => ({
      movies: favouriteMovies,
    })),

  addToFavourites: (movie) =>
    set((state) => ({
      movies: [...state.movies, movie],
    })),

  removeFromFavourites: (id) =>
    set((state) => ({
      movies: state.movies.filter((m) => m.id !== id),
    })),
}));
