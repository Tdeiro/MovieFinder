import { fetchTopRatedMovies } from "../../api/fetchTopRatedMovies";
import { moviesMapper } from "../share/utils";

export const TopRatedMoviesUI = () => {
  const movies = fetchTopRatedMovies();

  return (
    <div>
      <h2>Top Rated</h2>
      {moviesMapper(movies)}
    </div>
  );
};