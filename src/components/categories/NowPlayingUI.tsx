import { fetchNowPlayingMovies } from "../../api/fetchNowPlayingMovies";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";
import { BaseMovie } from "../share/types";

export const NowPlayingMoviesUI = () => {
  const movies = fetchNowPlayingMovies();

  return (
    <div>
      <MovieSlider name={"Now Playing"}>
        {movies.length != 0 ? (
          movies.map((movie: BaseMovie) => (
            <MovieCard
              key={movie.id}
              name={movie.title}
              movieId={movie.id}
              rating={movie.vote_average}
              image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              description={movie.overview}
            />
          ))
        ) : (
          <>Loading</>
        )}
      </MovieSlider>
    </div>
  );
};
