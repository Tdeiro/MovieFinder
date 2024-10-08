import React from "react";
import Slider from "react-slick";
import { fetchPopularMovies } from "../../api/fetchPopularMovies";
import { moviesMapper } from "../share/utils";
import { BaseMovie } from "../share/types";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";

export const PopularMoviesUI = () => {
  const movies = fetchPopularMovies();

  const navigate = useNavigate();

  return (
    <div>
      <h2>Popular</h2>
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
