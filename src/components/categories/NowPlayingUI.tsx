import { fetchNowPlayingMovies } from "../../api/fetchNowPlayingMovies";
import { moviesMapper } from "../share/utils";

export const NowPlayingMoviesUI = () => {
  const movies = fetchNowPlayingMovies();

  return (
    <div>
      <h2>Now Playing</h2>
      {moviesMapper(movies)}
    </div>
  );
};