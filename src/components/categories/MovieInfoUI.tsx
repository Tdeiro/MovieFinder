import { fetchMovieDetails } from "../../api/fetchMovieDetails";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./MovieInfoUI.css";
import MovieTrailer from "./MovieTrailer";
import { MovieCast } from "./MovieCast";

export const MovieInfoUI = () => {
  const params = useParams();
  const movieInfo = fetchMovieDetails(params.id);
  const movieId = movieInfo.id;
  const apiKey = import.meta.env.VITE_REACT_APP_MOVIE_KEY;
  
  

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
      <Box sx={{ width: "80%", margin: "0 auto", padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item size={18}>
            <Item className="movie-info-section-title">
              <h2 style={{ color: "#363b4e", fontSize: "1.5rem", marginBottom: "8px" }}>{movieInfo.title}</h2>
              </Item>
          </Grid>
          <Grid size={4}>
            <Item>
              <img
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  borderRadius: "10px",
                }}
                src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}
              />
            </Item>
          </Grid>
          <Grid size={8}>
            <Item>
              <MovieTrailer movieId={movieId} apiKey={apiKey} />
            </Item>
          </Grid>
          <Grid size={4}>
            <Item
              sx={{
                padding: 3,
                backgroundColor: "#f3f4f6",
                borderRadius: "10px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                marginTop: "-150px",
                borderLeft: "5px solid #6A0DAD",
                color: "#333",
                textAlign: "justify",
              }}
            >
              <div style={{ lineHeight: 1.6 }}>
                <h3 style={{ color: "#363b4e", fontSize: "1.5rem", marginBottom: "8px" }}>Overview</h3>
                <p style={{ fontSize: "1rem", fontWeight: "400" }}>{movieInfo.overview}</p>
              </div>
            </Item>
          </Grid>
          <Grid size={8}>
            <Item>
              <MovieCast movieId={movieId} apiKey={apiKey} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};