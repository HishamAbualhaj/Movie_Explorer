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
  const shows = useMemo(() => showsData, []);
  const top10Action = useMemo(() => sampleTop10, []);

  return (
    <main className="max-w-7xl mx-auto pt-6 pb-12">
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
        />

        <SectionRow
          title="New Releases"
          items={newReleases}
          itemSize="small"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/new-releases"
        />

        <Top10List title="Top 10 — Action" items={top10Action} />

        <SectionRow
          title="Must-Watch Movies"
          items={mustWatch}
          itemSize="medium"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/must-watch"
        />

        <SectionRow
          title="Trending Shows"
          items={shows}
          itemSize="small"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/shows"
        />
      </SectionRapper>
      <SectionRapper type="Movies">
        <SectionRow
          title="Trending Now"
          items={trending}
          itemSize="small"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/trending"
        />

        <SectionRow
          title="New Releases"
          items={newReleases}
          itemSize="small"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/new-releases"
        />

        <Top10List title="Top 10 — Action" items={top10Action} />

        <SectionRow
          title="Must-Watch Movies"
          items={mustWatch}
          itemSize="medium"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/must-watch"
        />

        <SectionRow
          title="Trending Shows"
          items={shows}
          itemSize="small"
          getStateFor={getStateFor}
          onToggle={toggle}
          seeAllHref="/shows"
        />
      </SectionRapper>
    </main>
  );
}
