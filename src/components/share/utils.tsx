import Slider from "react-slick";
import MovieCard from "./sharedComponents/MovieCard";
import { BaseMovie } from "./types";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const moviesMapper = (movies: any) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="main-page">
      <Slider {...settings}>
        {movies
          ? movies.map((movie: BaseMovie) => (
              <>
                <Button onClick={() => navigate(`/movie/result/${movie.id}`)}>
                  Go to: {movie.title}
                </Button>
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  popularity={movie.popularity}
                  backdrop_path={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
              </>
            ))
          : []}
      </Slider>
    </div>
  );
};
