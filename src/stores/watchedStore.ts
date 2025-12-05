import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Movie } from "../types/movie";

type WatchedState = {
  watched: Movie[];
  addWatched: (movie: Movie) => void;
  removeWatched: (id: string) => void;
  isWatched: (id: string) => boolean;
};

export const useWatchedStore = create<WatchedState>()(
  persist(
    (set, get) => ({
      watched: [],

      addWatched: (movie) =>
        set((state) => {
          if (state.watched.find((m) => m.id === movie.id)) return state;
          return { watched: [...state.watched, movie] };
        }),

      removeWatched: (id) =>
        set((state) => ({
          watched: state.watched.filter((m) => m.id !== id),
        })),

      isWatched: (id) =>
        get().watched.some((m) => m.id === id),
    }),
    { name: "watched-storage" }
  )
);
