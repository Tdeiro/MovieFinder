import { Button } from "@mui/material";
import React from "react";
import { fetchNowPlayingMovies } from "../../api/fetchNowPlayingMovies";
import MovieCard from "../share/sharedComponents/MovieCard";
import { MovieSlider } from "../share/sharedComponents/MovieSlider";
import { BaseMovie } from "../share/types";
import { moviesMapper } from "../share/utils";
import { useNavigate } from "react-router-dom";

export const NowPlayingMoviesUI = () => {
  const movies = fetchNowPlayingMovies();
  const navigate = useNavigate();
  return (
    <div>
      <h2>Now Playing</h2>
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
