import React from "react";
import { Link } from "react-router-dom";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Sam from "../../../assets/img/team/sam.png"
import Jacki from "../../../assets/img/team/jacki.png"
import Emily from "../../../assets/img/team/emily.png"
import Trisha from "../../../assets/img/team/trishaboone_orig.png"
import Vanessa from "../../../assets/img/team/vanessa.png"
import Gloria from "../../../assets/img/team/gloria.png"
import Jewel from "../../../assets/img/team/jewele.png"
import Andrea from "../../../assets/img/team/andreawallace.png"
import Julia from "../../../assets/img/team/julie.png"
import Leslie from "../../../assets/img/team/lesliej.png"
import Jennifer from "../../../assets/img/team/jennnifer.jpg"
import shea from "../../../assets/img/team/Shea2.jpg"


const Main = () => {
  return (
    <>
      <section className="team-area fix p-relative pt-150 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Sam} alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Samantha Sykes</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Owner/Stylist
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Jacki} alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Jacki Jochum</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Owner/Stylist
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Emily} alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Emily Moody</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Leslie} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Leslie Jernigen</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Andrea} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Andrea Wallace</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Vanessa} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Vanessa Faucette</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Gloria} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Gloria Fornter</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Jewel} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Jewel Vanorsdale</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div>
        <div className="col-xl-3" >
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Trisha} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Trisha Boone</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Jennifer} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Jennifer</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div> */}
            <div className="col-xl-3" >
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={shea} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="#">Shea</Link>
                  </h4>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
