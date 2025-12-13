"use client";

import Image from "next/image";
import { Movie } from "@/types/movie";

type Props = {
  title: string;
  items: Movie[]; // expects <= 10
};

export default function Top10List({ title, items }: Props) {
  return (
    <section className="my-8 px-4 sm:px-6 lg:px-8">
      <h3 className="text-lg font-semibold text-text-main mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.slice(0, 10).map((m, i) => (
          <div
            key={m.id}
            className="flex items-center gap-3 bg-bg-dark rounded-md p-3"
          >
            <div className="relative w-20 h-12 rounded overflow-hidden shrink-0">
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4
                                bg-linear-to-br from-zinc-700/80 via-zinc-900/90 to-black backdrop-blur-3xl"
              />
              {m.poster && (
                <Image
                  src={m.poster}
                  alt={m.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-text-secondary">#{i + 1}</div>
                  <div className="text-sm font-medium text-text-main">
                    {m.title}{" "}
                    <span className="text-xs text-text-muted">({m.year})</span>
                  </div>
                  <div className="text-xs text-text-muted">
                    {m.genre?.join(", ")}
                  </div>
                </div>
                <div className="text-xs text-text-muted">
                  {m.rating ? `⭐ ${m.rating}` : ""}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
