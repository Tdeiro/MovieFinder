import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchTopRatedMovies } from "../../api/fetchTopRatedMovies";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";
import { BaseMovie } from "../share/types";

export const TopRatedMoviesUI = () => {
  const movies = fetchTopRatedMovies();

  const navigate = useNavigate();
  return (
    <div>
      <h2>Top Rated Playing</h2>
      <MovieSlider>
        {movies
          ? movies.map((movie: BaseMovie) => (
              <a onClick={() => navigate(`/movie/result/${movie.id}`)}>
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  popularity={movie.popularity}
                  backdrop_path={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
              </a>
            ))
          : []}
      </MovieSlider>
    </div>
  );
};
