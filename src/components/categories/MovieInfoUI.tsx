import { fetchMovieDetails } from "../../api/fetchMovieDetails";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { baseUrl } from "../share/constants";
import {API_KEY} from "../share/constants";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./MovieInfoUI.css";

export const MovieInfoUI = () => {
  const params = useParams();
  const movieInfo = fetchMovieDetails(params.id);
  const KEY = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <div className="movie-info-section">
      <Box sx={{ width: "80%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={12}>
            <Item>{movieInfo.title}</Item>
          </Grid>
          <Grid size={3}>
            <Item>
              <div className="movie-info-section-image">
                <img
                  style={{ maxWidth: "100%" }}
                  src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}
                />
              </div>
            </Item>
          </Grid>
          <Grid size={6}>
            <Item>
              <div className="movie-info-section-trailer">
                <iframe width="420" height="315"
                src={`${baseUrl}533535/videos/${KEY}`}>
                </iframe>
              </div>
            </Item>
          </Grid>
          <Grid size={6}>
            <Item>3</Item>
          </Grid>
          <Grid size={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
