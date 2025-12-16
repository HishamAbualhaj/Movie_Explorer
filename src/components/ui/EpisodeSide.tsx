import { Clock } from "lucide-react";
import { EpisodeSideProps } from "@/types/movie";

export default function EpisodeSide({ episode }: EpisodeSideProps) {
  return (
    <button type="button" className="w-full flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 px-4 py-3 text-left transition">
      <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-neutral-700/40 text-neutral-200 text-sm font-semibold">{episode.number}</div>

      <div className="flex-1">
        <p className="text-base font-medium text-neutral-100">Episode {episode.number}</p>

        <div className="flex items-center gap-1 mt-1 text-xs text-neutral-400">
          <Clock className="w-3 h-3" />
          {episode.duration}
        </div>
      </div>
    </button>
  );
}
