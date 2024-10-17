import { fetchPopularMovies } from "../../api/fetchPopularMovies";
import { BaseMovie } from "../share/types";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";


export const PopularMoviesUI = () => {
  const movies = fetchPopularMovies();

  return (
    <div className="category-main-header">
      <MovieSlider  name={"Popular"}>
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
