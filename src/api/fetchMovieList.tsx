import axios from "axios";
import { useEffect, useState } from "react";
import { baseSearchUrl, baseUrl } from "../components/share/constants";

export const fetchMovieList = (query: string) => {
  const [response, setResponse] = useState([]);

  const KEY = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseSearchUrl}${query}?&include_adult=false&language=en-US&api_key=${KEY}`
        );
        setResponse(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return response;
};
