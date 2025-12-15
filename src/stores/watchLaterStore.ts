import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Movie, Show } from "@/types/movie";

type Media = Movie | Show;

type WatchLaterState = {
  watchLater: Media[];
  addWatchLater: (media: Media) => void;
  removeWatchLater: (id: string) => void;
  isWatchLater: (id: string) => boolean;
};

export const useWatchLaterStore = create<WatchLaterState>()(
  persist(
    (set, get) => ({
      watchLater: [],

      addWatchLater: (media) =>
        set((state) => {
          if (state.watchLater.some((m) => m.id === media.id)) return state;
          return { watchLater: [...state.watchLater, media] };
        }),

      removeWatchLater: (id) =>
        set((state) => ({
          watchLater: state.watchLater.filter((m) => m.id !== id),
        })),

      isWatchLater: (id) =>
        get().watchLater.some((m) => m.id === id),
    }),
    {
      name: "watch-later-storage",
    }
  )
);
