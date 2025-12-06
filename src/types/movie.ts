export interface Movie {
  id: string;
  title: string;
  year: number;
  poster?: string;
  rating: number;
  overview: string;
  genre?: string[];
}