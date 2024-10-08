import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sharedComponents/MovieSlider.css";

export const MovieSlider = (props: any) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>{props.name}</h2>
      <div style={{ display: "inline-flex", width: "100%", justifyContent: "center" }}>
        <div style={{ maxWidth: "80%" }}>
          <Slider {...settings}>{props.children}</Slider>
        </div>
      </div>
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
        backgroundColor: "white",
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
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}
