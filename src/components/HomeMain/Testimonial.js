import BGImg7 from "../../assets/img/bg/test-bg.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";
import Img1 from "../../assets/img/testimonial/testi_avatar.png";
import Img2 from "../../assets/img/testimonial/testi_avatar_02.png";
import Icon from "../../assets/img/testimonial/qt-icon.png";

const Testimonial = () => {
  const testimonial = {
    initialIndex: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    autoPlay: true,
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
          slidesToShow: 1,
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
        className="testimonial-area pt-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BGImg7})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="section-title mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h2>Services We Provide</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider className="testimonial-active" {...testimonial}>
                <div className="single-testimonial">
                  <ul className="sr-tw-ul " style={{ textAlign: "center" }}>
                    <li style={{ backgroundColor: "#ADD8E6" }}>
                      <div className="text">
                        <h4>
                          <h2 to="/service-details">Styles</h2>
                        </h4>
                        <p style={{ color: "black" }}>Cut/Style</p>
                        <p style={{ color: "black" }}>Mens Cut</p>
                        <p style={{ color: "black" }}>Children</p>
                        <p style={{ color: "black" }}>Blowdry</p>
                        <p style={{ color: "black" }}>Special Style/Updos</p>
                      </div>
                    </li>
                  </ul>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <ul
                    className="sr-tw-ul sr-thr-ul"
                    style={{ textAlign: "center" }}
                  >
                    <li style={{ backgroundColor: "#ADD8E6" }}>
                      <div className="text pt-40">
                        <h4>
                          <h2 to="/service-details">Technical</h2>
                        </h4>
                        <p style={{ color: "black" }}>Color Gloss</p>
                        <p style={{ color: "black" }}>Tints</p>
                        <p style={{ color: "black" }}>Lightners</p>
                        <p style={{ color: "black" }}>Ombré</p>
                        <p style={{ color: "black" }}>Highlights</p>
                        <p style={{ color: "black" }}>Tint with Highlights</p>
                        <p style={{ color: "black" }}>Balayage</p>
                        <p style={{ color: "black" }}>Relaxers</p>
                        <p style={{ color: "black" }}>Perms</p>
                        <p style={{ color: "black" }}>Corrective Colour</p>
                      </div>
                    </li>
                  </ul>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <ul
                    className="sr-tw-ul sr-thr-ul"
                    style={{ textAlign: "center" }}
                  >
                    <li style={{ backgroundColor: "#ADD8E6" }}>
                      <div className="text">
                        <h4>
                          <h2 to="/service-details">Additional</h2>
                        </h4>
                        <p style={{ color: "black" }}>Extensions</p>
                        <p style={{ color: "black" }}>Keratin Treatment</p>
                        <li>
                          <div className="text pt-10">
                            <h2>Waxing</h2>
                            <p style={{ color: "black" }}>
                              Facial and Eyebrows
                            </p>
                          </div>
                        </li>
                      </div>
                    </li>
                  </ul>
                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
