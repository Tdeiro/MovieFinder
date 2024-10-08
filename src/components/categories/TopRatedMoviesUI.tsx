import { useNavigate } from "react-router-dom";
import { fetchTopRatedMovies } from "../../api/fetchTopRatedMovies";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";
import { BaseMovie } from "../share/types";

export const TopRatedMoviesUI = () => {
  const movies = fetchTopRatedMovies();

  const navigate = useNavigate();
  return (
    <div>
      <MovieSlider name={"Top Rated"}>
        {movies.length != 0 ? (
          movies.map((movie: BaseMovie) => (
              <a onClick={() => navigate(`/movie/result/${movie.id}`)}>
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  vote_average={movie.vote_average}
                  backdrop_path={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  overview={movie.overview}
                />
              </a>
            ))
           ) : (
    <>Loading</>
    )}
      </MovieSlider>
    </div>
  );
};
