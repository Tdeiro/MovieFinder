import { useNavigate } from "react-router-dom";
import { fetchTopRatedMovies } from "../../api/fetchTopRatedMovies";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";
import { BaseMovie } from "../share/types";


export const TopRatedMoviesUI = () => {
  const movies = fetchTopRatedMovies();

  return (
    <div className="category-main-header">
      <MovieSlider  name={"Top Rated"}>
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
