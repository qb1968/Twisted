import React from "react";
import BGImg1 from "../../assets/img/bg/about-bg.png";
import { Link } from "react-router-dom";
import Img from "../../assets/img/gallery/sam-and-sissy-frojt_orig.png";
import Img1 from "../../assets/img/gallery/o-2_orig.jpg";

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
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div
              className="about-content s-about-content  wow fadeInRight  animated"
              data-animation="fadeInRight"
              data-delay=".4s"
            >
              <div className="about-title second-title ">
                <h5
                  style={{
                    display: "flex",
                    textAlign: "center",
                    color: "#2D92B3",
                    fontWeight: "bold",
                  }}
                >
                  About Us
                </h5>
              </div>
              <p style={{color:"black",fontWeight:"bold"}}>
                It all started six years ago with sisters Jacki and Samantha sitting
                on a beach with the idea of owning their own salon. What was a
                lifelong dream soon became a reality. It wasn't long after that
                conversation that the Twisted Sisters Salon was born. Jacki and
                Sam knew from a young age that making women and men feel
                beautiful was something they were passionate about and born to
                do. Together, they have built one of the premiere salon's in
                Burlington.
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative  wow fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img src={Img1} alt="img"  />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
