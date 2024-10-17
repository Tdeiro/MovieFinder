import { useNavigate } from "react-router-dom";
import { fetchUpcomingMovies } from "../../api/fetchUpcomingMovies";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";
import { BaseMovie } from "../share/types";


export const UpcomingMoviesUI = () => {
  const movies = fetchUpcomingMovies();

  return (
    <div className="category-main-header">
      <MovieSlider  name={"Upcoming Movies"}>
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
