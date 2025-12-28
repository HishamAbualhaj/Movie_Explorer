import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/supabase/client";

export interface Movie {
  id: string;
  title: string;
  duration: number;
  year: number;
  poster?: string;
  overview: string;
  rating: number;
  release_date?: string;
  genre?: string[];
  language?: string;
}

export interface MovieSearchParams {
  search?: string;
  category?: string;
  language?: string;
  sort?: "Newest" | "Oldest";
  duration?: "90 min" | "90 - 120 min" | "120+ min";
  type?: "Top Rated" | "Masterpiece" | "Recommended";
}

const fetchMovies = async (params?: MovieSearchParams) => {
  let query = supabase.from("movies").select("*");

  if (params?.search) {
    query = query.ilike("title", `%${params.search}%`);
  }

  if (params?.category) {
    query = query.contains("genre", [params.category]);
  }

  if (params?.language) {
    query = query.eq("language", params.language);
  }

  if (params?.duration === "90 min") {
    query = query.lte("duration", 90);
  }
  if (params?.duration === "90 - 120 min") {
    query = query.gte("duration", 90).lte("duration", 120);
  }
  if (params?.duration === "120+ min") {
    query = query.gte("duration", 120);
  }

  if (params?.type === "Top Rated") {
    query = query.gte("rating", 8);
  }
  if (params?.type === "Masterpiece") {
    query = query.gte("rating", 9);
  }

  if (params?.sort === "Newest") {
    query = query.order("year", { ascending: false });
  }
  if (params?.sort === "Oldest") {
    query = query.order("year", { ascending: true });
  }

  const { data, error } = await query;

  if (error) throw error;
  return data;
};

export const useMovies = (params?: MovieSearchParams) => {
  return useQuery({
    queryKey: ["movies", params],
    queryFn: () => fetchMovies(params),
    staleTime: 1000 * 60 * 5,
  });
};
