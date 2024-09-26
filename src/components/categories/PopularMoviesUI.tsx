import { fetchPopularMovies } from "../../api/fetchPopularMovies";
import { moviesMapper } from "../share/utils";

export const PopularMoviesUI = () => {
  const movies = fetchPopularMovies();

  return (
    <div>
      <h2>Popular</h2>
      {moviesMapper(movies)}
    </div>
  );
};
