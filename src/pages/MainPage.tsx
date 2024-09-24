import MovieCard from "../components/share/MovieCard";
import { BaseMovie } from "../components/share/types";
import { getMovies } from "../getMovies";

export const MainPage = () => {
  const popularMovies = getMovies("popular");

  return moviesMapper(popularMovies);
};

const moviesMapper = (movies: any) => {
  return (
    <div className="main-page">
      {movies
        ? movies.map((movie: BaseMovie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              popularity={movie.popularity}
              backdrop_path={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
          ))
        : []}
    </div>
  );
};
