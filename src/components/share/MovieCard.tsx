import { BaseMovie } from "./types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MovieCard = (props: BaseMovie) => {
  return (
    <div style={{ display: "flex" }}>
      <Card style={{ backgroundColor: "grey" }}>
        <div style={{ alignContent: "center" }}>
          <CardContent key={props.id}>
            <img style={{ maxWidth: "200px" }} src={props.backdrop_path} />
            <Typography variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              <span>Rating:</span> {props.popularity}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to watchlist</Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;