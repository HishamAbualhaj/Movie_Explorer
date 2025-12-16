export interface Movie {
  id: string;
  title: string;
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
