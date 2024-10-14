import { MovieCardType } from "../types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MovieCard = (props: MovieCardType) => {
  const navigate = useNavigate();
  const isAuth: boolean = false;
  return (
    <Card sx={{ maxWidth: 345, margin: "10px", height: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <a onClick={() => navigate(`/movie/result/${props.movieId}`)}>
            {props.name}
          </a>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Rating {props.rating}</Button>
        {isAuth ? (
          <Button size="small">Add to watchlist</Button>
        ) : (
          <Button size="small" disabled>
            Add to watchlist
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default MovieCard;
