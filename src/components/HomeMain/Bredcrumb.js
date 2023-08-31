import { Link } from "react-router-dom";
import React from "react";
import BGIMG from "../../assets/img/bg/bdrc-bg.png";

const Bredcrumb = ({ title, subtitle }) => {
  return (
    <>
      <section
        className="breadcrumb-area d-flex align-items-center"
        style={{ backgroundColor: "#ADD8E6"}}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="breadcrumb-wrap text-left">
                <div className="breadcrumb-title">
                  <h2>{title}</h2>
                  <div className="breadcrumb-wrap">
                    
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

export default Bredcrumb;
