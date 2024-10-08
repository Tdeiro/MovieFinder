import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchUpcomingMovies } from "../../api/fetchUpcomingMovies";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";
import { BaseMovie } from "../share/types";

export const UpcomingMoviesUI = () => {
  const movies = fetchUpcomingMovies();

  const navigate = useNavigate();
  return (
    <div>
      <h2>Upcoming</h2>
      <MovieSlider>
        {movies
          ? movies.map((movie: BaseMovie) => (
              <React.Fragment key={movie.title}>
                <Button onClick={() => navigate(`/movie/result/${movie.id}`)}>
                  Go to: {movie.title}
                </Button>
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  popularity={movie.popularity}
                  backdrop_path={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
              </React.Fragment>
            ))
          : []}
      </MovieSlider>
    </div>
  );
};
