import { Movie } from "@/types/movie";

export const movies: Movie[] = [
  {
    id: "m1",
    title: "Avengers: Endgame",
    year: 2019,
    poster: "/posters/avengers-endgame.jpg",
    rating: 8.4,
    overview:
      "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos’ actions.",
    genre: ["Action", "Adventure", "Sci-Fi"],
    releaseDate: "2019-04-26",
    duration: 181,
  },
  {
    id: "m2",
    title: "Inception",
    year: 2010,
    poster: "/posters/inception.jpg",
    rating: 8.8,
    overview:
      "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    genre: ["Action", "Sci-Fi", "Thriller"],
    releaseDate: "2010-07-16",
    duration: 148,
  },
  {
    id: "m3",
    title: "Interstellar",
    year: 2014,
    poster: "/posters/interstellar.jpg",
    rating: 8.6,
    overview:
      "A group of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    releaseDate: "2014-11-07",
    duration: 169,
  },
  {
    id: "m4",
    title: "The Dark Knight",
    year: 2008,
    poster: "/posters/the-dark-knight.jpg",
    rating: 9.0,
    overview:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos.",
    genre: ["Action", "Crime", "Drama"],
    releaseDate: "2008-07-18",
    duration: 152,
  },
  {
    id: "m5",
    title: "Joker",
    year: 2019,
    poster: "/posters/joker.jpg",
    rating: 8.5,
    overview:
      "A gritty character study of Arthur Fleck, a man disregarded by society.",
    genre: ["Crime", "Drama", "Thriller"],
    releaseDate: "2019-10-04",
    duration: 122,
  },
  {
    id: "m6",
    title: "Dune",
    year: 2021,
    poster: "/posters/dune.jpg",
    rating: 8.1,
    overview:
      "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis.",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    releaseDate: "2021-10-22",
    duration: 155,
  },
  {
    id: "m7",
    title: "The Matrix",
    year: 1999,
    poster: "/posters/matrix.jpg",
    rating: 8.7,
    overview:
      "A hacker discovers the true nature of reality and his role in the war against its controllers.",
    genre: ["Action", "Sci-Fi"],
    releaseDate: "1999-03-31",
    duration: 136,
  },
  {
    id: "m8",
    title: "Gladiator",
    year: 2000,
    poster: "/posters/gladiator.jpg",
    rating: 8.5,
    overview:
      "A betrayed Roman general seeks revenge against the corrupt emperor.",
    genre: ["Action", "Drama"],
    releaseDate: "2000-05-05",
    duration: 155,
  },
];
