import { DetailsProps } from "@/types/movie";

export default function Details({ description, cast }: DetailsProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-sm text-gray-300 leading-6">{description}</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <h3 className="text-lg font-semibold mb-3">Cast</h3>

        <div className="flex flex-wrap gap-2">
          {cast.map((actor) => (
            <span key={actor.id} className="px-3 py-1 text-xs rounded-full bg-black/40 border border-white/10 text-gray-300">
              {actor.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
