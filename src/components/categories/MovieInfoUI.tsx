import { fetchMovieDetails } from "../../api/fetchMovieDetails";
import { BaseMovie } from "../share/types";
import { useParams } from "react-router-dom";

export const MovieInfoUI = () => {
  const params = useParams();
  const movieInfo = fetchMovieDetails(params.id);

  console.log(movieInfo);

  return (
    <div>
      <h2>Movie Info Page</h2>
      title: <p>{movieInfo.title}</p>
    </div>
  );
};
