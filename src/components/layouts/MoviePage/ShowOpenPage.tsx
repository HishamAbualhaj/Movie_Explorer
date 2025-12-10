"use client";

import { useState } from "react";
import HeroSection from "./PosterSection";
import EpisodesSection from "./EpisodesSection";
import SideInformation from "./SideInformation";
import PlayLoader from "@/components/ui/PlayLoader";
import { ShowOpenPageProps } from "@/types/movie";

export default function ShowOpenPage(props: ShowOpenPageProps) {
  const { isSubscribed = true } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection onPlay={handlePlay} isSubscribed={isSubscribed} />

      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Left: Episodes Section */}
        <div className="w-full">
          <EpisodesSection isSubscribed={isSubscribed} />
        </div>

        {/* Right: Side Information */}
        <div className="h-fit sticky top-24">
          <SideInformation />
        </div>
      </div>

      {isLoading && <PlayLoader />}
    </div>
  );
}
