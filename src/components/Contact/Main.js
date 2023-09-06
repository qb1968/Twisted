import React from "react";
import Appointment from "../HomeMain/Appointment";
import { Link } from "react-router-dom";
import Bredcrumb from "../HomeMain/Bredcrumb";

const Main = () => {
  return (
    <>
      
      <Appointment />

      <div className="map fix" >
        <div className="container-flud">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12897.755545875261!2d-79.4680246!3d36.082788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bdf075c37d3%3A0x612f6cb1aabb0334!2sTwisted%20Sisters%20Salon!5e0!3m2!1sen!2sus!4v1694006564098!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
