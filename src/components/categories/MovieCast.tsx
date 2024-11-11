import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieCast.css"

export const MovieCast = ({movieId, apiKey}) => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
                axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US&append_to_response=credits`)
                .then((response) => {
                    setCast(response.data.credits.cast);

            })
            .catch ((error) => {
                console.error("Error fetching data:", error);
            });
        }, []);

        return (
            <div className="cast-list">
              {cast.map((member) => (
                <div key={member.id} className="cast-member">
                  <h2>{member.name}</h2>
                  <p>Character: {member.character}</p>
                  <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}></img>
                </div>
              ))}
            </div>
          );
}