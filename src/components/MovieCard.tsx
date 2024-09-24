const MovieCard = (props: MovieCard) => {
  return (
    <div>
      <img src={props.image} style={{ maxWidth: "200px" }}></img>
      <p>{props.title}</p>
      <p>{props.popularity}</p>
      <button>Add to watchlist</button>
    </div>
  );
};

export default MovieCard;

type MovieCard = {
  title: string;
  popularity?: number;
  image?: string;
};
