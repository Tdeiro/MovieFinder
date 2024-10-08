import React from "react";
import { fetchPopularMovies } from "../../api/fetchPopularMovies";
import { BaseMovie } from "../share/types";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";

export const PopularMoviesUI = () => {
  const movies = fetchPopularMovies();

  const navigate = useNavigate();

  return (
    <>
      <MovieSlider name={"Popular"}>
        {movies
          ? movies.map((movie: BaseMovie) => (
              <a
                key={movie.title}
                onClick={() => navigate(`/movie/result/${movie.id}`)}
              >
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
    </>
  );
};
