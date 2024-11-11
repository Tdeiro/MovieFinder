export type BaseMovie = {
  title?: string;
  vote_average?: number;
  backdrop_path?: string;
  id?: number | undefined;
  overview?: string;
  movieId?: number;
  key?: string;
};

export type MovieCardType = {
  name?: string;
  rating?: number;
  image?: string;
  movieId?: number | undefined;
  description?: string;
};
