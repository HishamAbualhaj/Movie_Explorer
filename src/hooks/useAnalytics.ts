import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/supabase/client";

export const useAnalytics = () => {
  return useQuery({
    queryKey: [""],
    queryFn: async () => {
      const { count: totalMovies } = await supabase
        .from("movies")
        .select("*", { count: "exact" });

      const { data: totalViewsData } = await supabase
        .from("movies")
        .select("views");

      const totalViews =
        totalViewsData?.reduce((acc, m) => acc + (m.views || 0), 0) ?? 0;

      const { data: ratingsData } = await supabase
        .from("movies")
        .select("rating");

      const avgRating =
        ratingsData && ratingsData.length > 0
          ? ratingsData.reduce((acc, m) => acc + m.rating, 0) /
            ratingsData.length
          : 0;

      const { count: totalReviews } = await supabase
        .from("reviews")
        .select("*", { count: "exact" });

      const { data: moviesByGenreData } = await supabase
        .from("movies")
        .select("genre");

      const moviesByGenre: { genre: string; count: number }[] = [];
      if (moviesByGenreData) {
        const genreMap: Record<string, number> = {};
        moviesByGenreData.forEach((m: any) => {
          m.genre?.forEach((g: string) => {
            genreMap[g] = (genreMap[g] || 0) + 1;
          });
        });
        for (const key in genreMap)
          moviesByGenre.push({ genre: key, count: genreMap[key] });
      }

      const { data: viewsByMonthData } = await supabase
        .from("views_log")
        .select("views, created_at");

      const viewsByMonth: { month: string; views: number }[] = [];
      if (viewsByMonthData) {
        const monthMap: Record<string, number> = {};
        viewsByMonthData.forEach((v: any) => {
          const month = new Date(v.created_at).toLocaleString("default", {
            month: "short",
          });
          monthMap[month] = (monthMap[month] || 0) + v.views;
        });
        for (const key in monthMap)
          viewsByMonth.push({ month: key, views: monthMap[key] });
      }

      return {
        summary: { totalMovies, totalViews, avgRating, totalReviews },
        moviesByGenre,
        viewsByMonth,
      };
    },
  });
};
