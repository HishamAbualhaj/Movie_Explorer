// data/shows.ts
import { Movie } from "@/types/movie";

export const shows: Movie[] = [
  {
    id: "s1",
    title: "Breaking Bad",
    year: 2008,
    poster: "/posters/breaking-bad.jpg",
    rating: 9.5,
    overview:
      "A high school chemistry teacher turned methamphetamine producer navigates the dangers of the drug trade.",
    genre: ["Crime", "Drama", "Thriller"],
  },
  {
    id: "s2",
    title: "Stranger Things",
    year: 2016,
    poster: "/posters/stranger-things.jpg",
    rating: 8.7,
    overview:
      "A group of kids uncover supernatural mysteries in their small town.",
    genre: ["Drama", "Fantasy", "Horror"],
  },
  {
    id: "s3",
    title: "The Boys",
    year: 2019,
    poster: "/posters/the-boys.jpg",
    rating: 8.7,
    overview:
      "A group of vigilantes set out to take down corrupt superheroes.",
    genre: ["Action", "Comedy", "Crime"],
  },
  {
    id: "s4",
    title: "Game of Thrones",
    year: 2011,
    poster: "/posters/game-of-thrones.jpg",
    rating: 9.2,
    overview:
      "Noble families vie for control of the Iron Throne in the land of Westeros.",
    genre: ["Drama", "Fantasy"],
  },
];
