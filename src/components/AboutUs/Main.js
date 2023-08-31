import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";
import Bredcrumb from "../HomeMain/Bredcrumb";
import About from "../HomeMain/About";
import About2 from "../HomeMain/About2";
import Appointment from "../HomeMain/Appointment";
import Blog from "../HomeMain/Blog";
import Testimonial from "../HomeMain/Testimonial";
import Faq from "../HomeMain/Faq";

const Main = () => {
  const doctor = {
    initialIndex: 4,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    autoPlay: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Bredcrumb title="The Sisters" subtitle="About Us" />
      <About2 />
     
                
    </>
  );
};

export default Main;
