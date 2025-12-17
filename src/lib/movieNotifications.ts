import { toast } from "sonner";

export type MovieAction =
  | "favourite"
  | "watched"
  | "watchLater"
  | "removeFavourite"
  | "removeWatched"
  | "removeWatchLater";

export function notifyMovieAction(action: MovieAction, movieTitle: string) {
  switch (action) {
    case "favourite":
      toast.success(`"${movieTitle}" added to Favorites ❤️`);
      break;

    case "watched":
      toast.success(`"${movieTitle}" marked as Watched 🎬`);
      break;

    case "watchLater":
      toast.success(`"${movieTitle}" saved for Watch Later ⏳`);
      break;

    case "removeFavourite":
      toast(`"${movieTitle}" removed from Favorites`, {
        icon: "❌",
      });
      break;

    case "removeWatched":
      toast(`"${movieTitle}" removed from Watched list`, {
        icon: "❌",
      });
      break;

    case "removeWatchLater":
      toast(`"${movieTitle}" removed from Watch Later`, {
        icon: "❌",
      });
      break;
  }
}
