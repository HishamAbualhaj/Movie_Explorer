"use client";

import { useState, useMemo } from "react";

// REPLACE these imports with your actual data source
import { movies } from "@/data/movies";
import { shows as showsData } from "@/data/shows";
import { top10Action as sampleTop10 } from "@/data/top10";
import HeroSection from "@/components/layouts/Movies&Shows/Hero/HeroSection";
import SectionRow from "@/components/layouts/Movies&Shows/SectionRow";
import Top10List from "@/components/layouts/Movies&Shows/Top10List";
import Categories from "@/components/layouts/Landing/Categories/Categories";
import SectionRapper from "@/components/layouts/Movies&Shows/SectionWrapper";
import Trial from "@/components/ui/Trial";

export default function MoviesAndShowsPage() {


  // Example section data - replace with your real data
  const trending = useMemo(() => movies.slice(0, 8), []);
  const newReleases = useMemo(() => movies.slice(4, 12), []);
  const mustWatch = useMemo(() => movies.slice(2, 10), []);
  const trendingShows = useMemo(() => showsData.slice(0, 8), []);
  const newReleasesShows = useMemo(() => showsData.slice(4, 12), []);
  const mustWatchShows = useMemo(() => showsData.slice(2, 10), []);
  const top10Action = useMemo(() => sampleTop10, []);

  return (
    <main className="min-h-screen bg-bg pt-4">
      <HeroSection />

      <Categories title="Categories" subtitle="Explore Categories" id="genres" py="py-10" />
      <SectionRapper type="Movies">
        <SectionRow
          id="trending-movies"
          title="Trending Now"
          items={trending}
          itemSize="small"
          seeAllHref="/trending"
          showDuration={true}
        />

        <SectionRow
          id="new-releases-movies"
          title="New Releases"
          items={newReleases}
          itemSize="small"
          seeAllHref="/new-releases"
          showYear={true}
        />

        <Top10List title="Top 10 — Action" items={top10Action} />

        <SectionRow
          id="must-watch-movies"
          title="Must-Watch Movies"
          items={mustWatch}
          itemSize="medium"
          seeAllHref="/must-watch"
          showDuration={true}
          showRating={true}
        />
      </SectionRapper>
      <SectionRapper type="Shows">
        <SectionRow
          id="trending-shows"
          title="Trending Now"
          items={trendingShows}
          itemSize="small"
          seeAllHref="/trending"
          showRating={true}
          showSeasons={true}
        />

        <SectionRow
          id="new-releases-shows"
          title="New Releases"
          items={newReleasesShows}
          itemSize="small"
          seeAllHref="/new-releases"
          showYear={true}
        />

        <SectionRow
          id="must-watch-shows"
          title="Must-Watch Movies"
          items={mustWatchShows}
          itemSize="medium"
          seeAllHref="/must-watch"
          showSeasons={true}
          showRating={true}
        />
      </SectionRapper>
      <Trial />
    </main>
  );
}
