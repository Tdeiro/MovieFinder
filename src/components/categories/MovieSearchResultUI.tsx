import { useParams } from "react-router-dom";
import { fetchMovieList } from "../../api/fetchMovieList";

export const MovieSearchResultUI = () => {
  const params = useParams();

  const movies = fetchMovieList(params.query);
  console.log(movies);
  return (
    <div>
      {movies
        ? movies.map((movie) => {
            return <p>{movie.title}</p>;
          })
        : null}
    </div>
  );
};
