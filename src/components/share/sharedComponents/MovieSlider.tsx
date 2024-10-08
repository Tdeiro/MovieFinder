import Slider from "react-slick";

export const MovieSlider = (props: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return <Slider {...settings}>{props.children}</Slider>;
};
