import { BaseMovie } from "../types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const MovieCard = (props: BaseMovie) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "10px", height: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.backdrop_path}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
         {props.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Rating {props.vote_average}</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
