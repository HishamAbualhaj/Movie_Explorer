import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Movie, Show } from "@/types/movie";

type Media = Movie | Show;

type WatchedState = {
  watched: Media[];
  addWatched: (media: Media) => void;
  removeWatched: (id: string) => void;
  isWatched: (id: string) => boolean;
};

export const useWatchedStore = create<WatchedState>()(
  persist(
    (set, get) => ({
      watched: [],

      addWatched: (media) =>
        set((state) => {
          if (state.watched.some((m) => m.id === media.id)) return state;
          return { watched: [...state.watched, media] };
        }),

      removeWatched: (id) =>
        set((state) => ({
          watched: state.watched.filter((m) => m.id !== id),
        })),

      isWatched: (id) =>
        get().watched.some((m) => m.id === id),
    }),
    {
      name: "watched-storage",
    }
  )
);
