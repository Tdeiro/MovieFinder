import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl, popular } from "../components/share/constants";

export const fetchPopularMovies = () => {
  const [response, setResponse] = useState([]);

  const KEY = import.meta.env.VITE_REACT_APP_MOVIE_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}${popular}?api_key=${KEY}`);
        setResponse(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return response;
};
