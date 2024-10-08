import { useNavigate } from "react-router-dom";
import { fetchUpcomingMovies } from "../../api/fetchUpcomingMovies";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";
import { BaseMovie } from "../share/types";

export const UpcomingMoviesUI = () => {
  const movies = fetchUpcomingMovies();

  const navigate = useNavigate();
  return (
    <div>
      <MovieSlider name={"Upcoming Movies"}>
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
