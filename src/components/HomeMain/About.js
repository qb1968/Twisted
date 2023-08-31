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
                <img src={Img} alt="img"  style={{width:800,height:500}}/>
                <div className="about-text second-about" style={{marginLeft:80}}>
                  <span>19</span>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h5>Our Services</h5>
                  
                </div>
                <p>
                  All of our services are specifically made for
                  you. From hair color to hair treatments, Twisted Sisters Salon
                  is committed to using innovative techniques to uplift our
                  clients and leave them feeling beautiful. Our services
                  include, but are not limited to: balayage, ombré, hair
                  extensions, hair cutting, styling and so much more.
                </p>
               
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
