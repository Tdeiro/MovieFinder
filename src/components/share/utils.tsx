import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { BaseMovie } from "./types";

export const moviesMapper = (movies: any) => {
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
              <MovieCard
                key={movie.id}
                title={movie.title}
                popularity={movie.popularity}
                backdrop_path={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            ))
          : []}
      </Slider>
    </div>
  );
};
