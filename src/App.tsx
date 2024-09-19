import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`
        
      );

      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(movies);
  }, [movies]);

  return (
    <>
      <div>
        <h1>Hello</h1>
        {movies
          ? movies.map((movie: MovieType) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                popularity={movie.popularity}
                image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            ))
          : []}
      </div>
    </>
  );
};

export default App;

type MovieType = {
  title: string;
  popularity: number;
  backdrop_path: string;
  id: number;
};
