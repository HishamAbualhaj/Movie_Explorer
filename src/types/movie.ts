export interface Movie {
  id: string;
  title: string;
  duration: number;
  year: number;

  poster?: string;
  overview: string;
  rating: number;

  releaseDate?: string;
  genre?: string[];
}

export interface Show extends Omit<Movie, "duration"> {
  seasons: number;
  episodesCount?: number;
  episodeDuration?: number;
}

export interface ShowPageProps {
  params: {
    id: string;
  };
}

export interface Episode {
  number: number;
  duration: string;
}

export interface EpisodeSideProps {
  episode: Episode;
}

export interface PosterSectionProps {
  title?: string;
  description?: string;
  image?: string;
}
export interface SideInfo {
  label: string;
  value: string;
}

export interface Review {
  name: string;
  country?: string;
  rating: number;
  opinion: string;
}

export interface Cast {
  id: number;
  name: string;
  image?: string;
}

export interface DetailsProps {
  description: string;
  cast: Cast[];
}

export interface Episode {
  id: number;
  title: string;
  number: string;
  duration: string;
}

export interface EpisodeSideProps {
  episode: Episode;
}

export interface PosterSectionProps {
  onPlay: () => void;
  title?: string;
  description?: string;
  image?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profileImage?: string;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
}

export interface MovieDetails {
  id: string;
  title: string;
  tagline?: string;
  description: string;

  releaseYear: number;
  duration: number;
  rating: number;
  votes: number;

  genres: string[];

  director: string;
  writers: string[];
  cast: CastMember[];

  language: string;
  country: string;

  poster: string;
  trailerUrl?: string;

  budget?: number;
  revenue?: number;

  imdbUrl?: string;
  keywords?: string[];
}
