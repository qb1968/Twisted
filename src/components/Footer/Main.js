import { Link } from "react-router-dom";
import React from "react";
import BGImg from "../../assets/img/bg/footer-bg.png";
import Img1 from "../../assets/img/logo/f_logo.png";
import Img2 from "../../assets/img/icon/ft-icon01.png";
import Footer from "../../assets/img/icon/ft-icon02.png";
import Footer1 from "../../assets/img/icon/ft-icon03.png";

const Main = () => {
  return (
    <>
      <footer className="footer-bg footer-p pt-90">
        <div
          className="row align-items-center copyright-wrap"
          style={{ backgroundColor: "#ADD8E6" }}
        >
          <div className="col-lg-6">
            <div className="copy-text" style={{ color: "black" }}>
              Copyright &copy; 2024 <Link to="#" style={{color:"black"}}>Allison Web Consultants, LLC</Link>.
             
            </div>
          </div>
          <div className="col-lg-6">
            <div className="copay-contact">
              <ul>
                <li>
                  <div className="c-contact">
                    <div className="icon">
                      <i
                        class="fa fa-at"
                        style={{ fontSize: "x-large", color: "black" }}
                      />
                    </div>
                    <div className="text">
                      <h3 style={{ color: "black" }}> Our Email:</h3>
                      <span style={{ color: "black" }}>
                        info@twistedsistershair.com
                      </span>
                      
                    </div>
                  </div>
                </li>
                <li>
                  <div className="c-contact">
                    <div className="icon">
                      <i
                        class="fa fa-phone-volume"
                        style={{ fontSize: "x-large", color: "black" }}
                      />
                    </div>
                    <div className="text">
                      <h3 style={{ color: "black" }}>Call Now:</h3>
                      <span style={{ color: "black" }}>336.229.4078</span>
                      
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
