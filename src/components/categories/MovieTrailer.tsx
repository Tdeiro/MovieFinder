import { useEffect, useState } from "react";
import axios from "axios";

const MovieTrailer = ({ movieId, apiKey }) => {
    const [trailerKey, setTrailerKey] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);
                const videos = response.data.results;

                const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                if (trailer) {
                    setTrailerKey(trailer.key);
                }
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };

        fetchVideos();
    }, [movieId, apiKey]);

    return (
        <div>
            {trailerKey && (
                <iframe
                    width="100%"
                    height="415"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="Movie Trailer"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default MovieTrailer;
