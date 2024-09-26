import { fetchUpcomingMovies } from "../../api/fetchUpcomingMovies";
import { moviesMapper } from "../share/utils";

export const UpcomingMoviesUI = () => {
  const movies = fetchUpcomingMovies();

  return (
    <div>
      <h2>Upcoming</h2>
      {moviesMapper(movies)}
    </div>
  );
};
