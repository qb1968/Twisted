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
        <section id="home" className="slider-area fix p-relative">
          <div className="slider-active" style={{ background: "#ADD8E6" }}>
            <div
              className=" slider-bg d-flex align-items-center"
              style={{
                backgroundSize: "contain",
                backgroundRepeat:"no-repeat",
                backgroundImage: `url(${BGImg})`,
                height:"102vh"
                
              }}
            >
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 col-md-6">
                    
                  
                     
                  </div>
                  <div className="col-lg-6 col-md-6 p-relative"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <About />
        
        
        <Product />
        
        
        <Testimonial />
        
      </main>
    </>
  );
};

export default Main;
