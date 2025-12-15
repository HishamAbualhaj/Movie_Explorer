"use client";

import { useState, useMemo } from "react";

import { Movie } from "@/types/movie";

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
  // use movie.id (string) as the key for state
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [watchLater, setWatchLater] = useState<Record<string, boolean>>({});
  const [watched, setWatched] = useState<Record<string, boolean>>({});

  const toggle = (m: Movie, action: "fav" | "later" | "watched") => {
    const key = m.id;
    if (action === "fav") setFavorites((s) => ({ ...s, [key]: !s[key] }));
    if (action === "later") setWatchLater((s) => ({ ...s, [key]: !s[key] }));
    if (action === "watched") setWatched((s) => ({ ...s, [key]: !s[key] }));
  };

  const getStateFor = (m: Movie) => ({
    isFavorite: !!favorites[m.id],
    isWatchLater: !!watchLater[m.id],
    isWatched: !!watched[m.id],
  });

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

      <Categories title="Categories" subtitle="Explore Categories" py="py-10" />
      <SectionRapper type="Movies">
        <SectionRow
          title="Trending Now"
          items={trending}
          itemSize="small"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/trending"
          showDuration={true}
        />

        <SectionRow
          title="New Releases"
          items={newReleases}
          itemSize="small"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/new-releases"
          showYear={true}
        />

        <Top10List title="Top 10 — Action" items={top10Action} />

        <SectionRow
          title="Must-Watch Movies"
          items={mustWatch}
          itemSize="medium"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/must-watch"
          showDuration={true}
          showRating={true}
        />
      </SectionRapper>
      <SectionRapper type="Shows">
        <SectionRow
          title="Trending Now"
          items={trendingShows}
          itemSize="small"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/trending"
          showRating={true}
          showSeasons={true}
        />

        <SectionRow
          title="New Releases"
          items={newReleasesShows}
          itemSize="small"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/new-releases"
          showYear={true}
        />

        <SectionRow
          title="Must-Watch Movies"
          items={mustWatchShows}
          itemSize="medium"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/must-watch"
          showSeasons={true}
          showRating={true}
        />
      </SectionRapper>
      <Trial />
    </main>
  );
}
