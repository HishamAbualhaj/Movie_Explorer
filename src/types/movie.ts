export interface Movie {
  id: string;
  title: string;
  year: number;

  poster?: string;
  overview: string;
  rating: number;

  releaseDate?: string;
  duration?: number;
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
