import Slider from "react-slick";
import { Link } from "react-router-dom";
import React from "react";
import BGImg4 from "../../assets/img/bg/product-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../../assets/img/gallery/back1.png";
import Img2 from "../../assets/img/gallery/back2.png";
import Img3 from "../../assets/img/shop/img3.jpg";
import Img4 from "../../assets/img/shop/img4.jpg";
import Img5 from "../../assets/img/shop/img5.jpg";
import Img6 from "../../assets/img/shop/img6.jpg";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      {" "}
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      {" "}
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );
}

const Product = () => {
  const option = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    autoPlay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
      <section
        id="editor-choice"
        className="product-slider pt-120 pb-90 fix"
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#ADD8E6",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 text-center">
                <h2>Bring Your Hair Back To Life</h2>
                <p>
                  We pride ourselves on being innovative and cutting edge with
                  our hair color and hair styles.
                </p>
              </div>
            </div>
          </div>
          <Slider className="row home-blog-active" {...option}>
            <div className="col-lg-4 col-md-12">
              <div className="product mb-40">
                <div className="product__img">
                  <img src={Img1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="product mb-40">
                <div className="product__img">
                  <img src={Img2} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Product;
