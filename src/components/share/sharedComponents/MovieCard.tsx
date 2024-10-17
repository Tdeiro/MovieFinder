import { MovieCardType } from "../types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
import { useAuthUser } from "../../../firebase/authUser";

const MovieCard = (props: MovieCardType) => {
  const navigate = useNavigate();
  const isAuth = useAuthUser();
  return (
    <Card sx={{ maxWidth: 345, margin: "10px", height: 400 }}>
      <CardMedia sx={{ height: 200 }} image={props.image} title={props.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <a
            className="movie-title"
            onClick={() => navigate(`/movie/result/${props.movieId}`)}
          >
            {props.name}
          </a>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.description?.substring(0, 200)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="card-button">
          Rating {props.rating}
        </Button>
        {isAuth ? (
          <Button size="small">Add to watchlist</Button>
        ) : (
          <Button size="small" disabled>
            
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default MovieCard;
