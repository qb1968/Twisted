import { Link } from "react-router-dom";
import React from "react";
import BGImg from "../../assets/img/bg/Ts.png";
import About from "../HomeMain/About";
import Appointment from "../HomeMain/Appointment";
import Blog from "../HomeMain/Blog";
import Testimonial from "../HomeMain/Testimonial";
import Service from "../HomeMain/Service";
import Gallery from "../HomeMain/Gallery";
import Pricing from "../HomeMain/Pricing";
import Feature from "../HomeMain/Feature";
import Product from "../HomeMain/Product";

const Main = () => {
  return (
    <>
      <main>
        {/* <section id="home" className="slider-area fix p-relative" style={{marginTop:"5rem"}}>
          <div className="slider-active" >
            <div
              className="single-slider slider-bg d-flex align-items-center"
             
            >
              <div className="container" style={{ background: "#ADD8E6",width:"%100" }}>
                <div className="row justify-content-center align-items-center">
                  <img src={BGImg}/>
                  <div className="col-lg-6 col-md-6">
                    <div className="slider-content s-slider-content mt-20">
                     

                      <div className="slider-btn mt-30">
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 p-relative"></div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <About />

        <Product style={{ backgroundColor: "#ADD8E6" }} />

        {/* <Testimonial /> */}
      </main>
    </>
  );
};

export default Main;
