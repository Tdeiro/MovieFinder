import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieCast.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MovieCast = ({movieId, apiKey}) => {
    const [cast, setCast] = useState([]);
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 0,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

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
          <div className="cast-list-container">
      <Slider {...settings}>
        {cast.map((member) => (
          <div key={member.id} className="cast-member">
            <h2>{member.name}</h2>
            <p>Character: {member.character}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
              alt={member.name}
              style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
          function SampleNextArrow(props: any) {
            const { className, style, onClick } = props;
            return (
              <div
                className={`your-class ${className}`}
                style={{
                  ...style,
                  display: "block",
                  backgroundColor: "#1A1A2E",
                }}
                onClick={onClick}
              />
            );
          }
          
          function SamplePrevArrow(props: any) {
            const { className, style, onClick } = props;
            return (
              <div
                className={`your-class ${className}`}
                style={{ ...style, display: "block", backgroundColor: "#1A1A2E" }}
                onClick={onClick}
              />
            );
}