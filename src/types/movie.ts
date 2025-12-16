export interface Movie {
  id: string;
  title: string;
  duration: number;
  year: number;
  poster?: string;
  rating: number;
  overview: string;
  genre?: string[];
}

export interface ShowPageProps {
  params: {
    id: string;
  };
}

export interface EpisodeSectionProps {
  isSubscribed: boolean;
}

export interface ShowOpenPageProps {
  isSubscribed?: boolean;
}

export interface Episode {
  id: number;
  title: string;
  number: string;
  duration: string;
  isLocked: boolean;
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
