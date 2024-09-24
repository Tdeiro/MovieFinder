import { BaseMovie } from "./types";

const MovieCard = (props: BaseMovie) => {
  return (
    <div key={props.id}>
      <img src={props.backdrop_path} style={{ maxWidth: "200px" }}></img>
      <p>{props.title}</p>
      <p>{props.popularity}</p>
      <button>Add to watchlist</button>
    </div>
  );
};

export default MovieCard;
