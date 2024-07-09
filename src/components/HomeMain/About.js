import React from "react";
import BGImg1 from "../../assets/img/bg/about-bg.png";
import { Link } from "react-router-dom";
import Img from "../../assets/img/gallery/sam-and-sissy_orig.png";

const About = () => {
  return (
    <>
      <section
        className="about-area about-p pt-120 pb-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundImage: `url(${BGImg1})`,
        }}
      >
        <div className="container">
          
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative  wow fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img src={Img} alt="img" />
                <div
                  className="about-text second-about"
                  
                >
                  <span style={{ color: "#2D92B3", fontWeight: "bold" }}>
                    19
                  </span>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 pt-125">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h2 style={{ color: "#2D92B3", fontWeight: "bold" }}>
                    Our Services
                  </h2>
                </div>
                <p style={{ color: "black", fontWeight: "bold" }}>
                  All of our services are specifically made for you. From hair
                  color to hair treatments, Twisted Sisters Salon is committed
                  to using innovative techniques to uplift our clients and leave
                  them feeling beautiful. Our services include, but are not
                  limited to: balayage, ombré, hair extensions, hair cutting,
                  styling and so much more.
                </p>
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12"></div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="about-content s-about-content">
                      <ul className="sr-tw-ul ">
                        <li style={{ backgroundColor: "rgb(173, 216, 230)" }}>
                          <div className="text">
                            <h4>
                              <h2 to="/service-details">Styles</h2>
                            </h4>
                            <p style={{ color: "black" }}>Cut/Style</p>
                            <p style={{ color: "black" }}>Mens Cut</p>
                            <p style={{ color: "black" }}>Children</p>
                            <p style={{ color: "black" }}>Blowdry</p>
                            <p style={{ color: "black" }}>
                              Special Style/Updos
                            </p>
                          </div>
                        </li>

                        <li></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
                    <div className="sd-img"></div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="about-content s-about-content">
                      <ul className="sr-tw-ul sr-thr-ul">
                        <li style={{ backgroundColor: "rgb(173, 216, 230)" }}>
                          <div className="text pt-40">
                            <h4>
                              <h2 to="/service-details">Technical</h2>
                            </h4>
                            <p style={{ color: "black" }}>Color Gloss</p>
                            <p style={{ color: "black" }}>Tints</p>
                            <p style={{ color: "black" }}>Lightners</p>
                            <p style={{ color: "black" }}>Ombré</p>
                            <p style={{ color: "black" }}>Highlights</p>
                            <p style={{ color: "black" }}>
                              Tint with Highlights
                            </p>
                            <p style={{ color: "black" }}>Balayage</p>
                            <p style={{ color: "black" }}>Relaxers</p>
                            <p style={{ color: "black" }}>Perms</p>
                            <p style={{ color: "black" }}>Corrective Colour</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
