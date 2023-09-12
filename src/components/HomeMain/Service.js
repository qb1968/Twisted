import { Link } from "react-router-dom";
import BGImg2 from "../../assets/img/bg/services-bg.png";
import React from "react";
import Icon1 from "../../assets/img/icon/fe-icon01.png";
import Icon2 from "../../assets/img/icon/fe-icon05.png";
import Icon3 from "../../assets/img/icon/fe-icon07.png";
import Icon4 from "../../assets/img/icon/fe-icon04.png";
import Icon5 from "../../assets/img/icon/fe-icon06.png";
import Icon6 from "../../assets/img/icon/fe-icon08.png";
import Img from "../../assets/img/features/services-img-details2.png";
import Img1 from "../../assets/img/bg/Ts.png";
import Hair from "../../assets/img/bg/hairbg.jpg"

const Service = () => {
  return (
    <section
      id="service-details2"
      className="service-details-two pb-105 p-relative"
      style={{
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50 text-center">
              <h5>Our Services</h5>
              <h2>What We Provide</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="about-content s-about-content">
              <ul className="sr-tw-ul ">
                <li>
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
                <li>
                  <div className="text">
                    <h4>
                      <h2 to="/service-details">Additional</h2>
                    </h4>
                    <p style={{ color: "black" }}>Extensions</p>
                    <p style={{ color: "black" }}>Keratin Treatment</p>
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
                <li>
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
                <li>
                  <div className="text pt-10">
                    <h4>Waxing</h4>
                    <p style={{color:"black"}}>Facial and Eyebrows</p>
                  </div>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
