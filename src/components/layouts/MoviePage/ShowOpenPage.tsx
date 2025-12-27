"use client";
import PosterSection from "./PosterSection";
import EpisodesSection from "./EpisodesSection";
import SideInformation from "./SideInformation";
import Details from "./Details";

export default function ShowOpenPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PosterSection />
      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="w-full">
          <EpisodesSection />
        </div>

        <div className="flex flex-col gap-6">
          <SideInformation />

          <Details
            description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces."
            cast={[
              { id: 1, name: "Millie Bobby Brown" },
              { id: 2, name: "Finn Wolfhard" },
              { id: 3, name: "David Harbour" },
              { id: 4, name: "Winona Ryder" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
