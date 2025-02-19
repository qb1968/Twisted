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
import Angie from "../../../assets/img/team/Angie.jpg"


const Main = () => {
  return (
    <>
      <section className="team-area fix p-relative pt-180 pb-90">
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
                  <h2>
                    <Link to="#">Samantha Sykes</Link>
                  </h2>
                  <h3><Link to="/gallery4">Gallery</Link></h3>
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
                  <h2>
                    <Link to="#">Jacki Jochum</Link>
                  </h2>
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
                  <h2>
                    <Link to="#">Emily Moody</Link>
                  </h2>
                  <h3><Link to="/gallery5">Gallery</Link></h3>
                  <p style={{fontFamily:"serif",color: "black", fontWeight: "bold"}}>Email: emilymoody28@aol.com</p>
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
                  <h2>
                    <Link to="#">Leslie Jernigen</Link>
                  </h2>
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
                  <h2>
                    <Link to="#">Andrea Wallace</Link>
                  </h2>
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
                  <h2>
                    <Link to="#">Vanessa Faucette</Link>
                  </h2>
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
                  <h2>
                    <Link to="#">Gloria Fornter</Link>
                  </h2>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Jewel} />
                  </div>
                </div>
                <div className="team-info">
                  <h2>
                    <Link to="#">Jewel Vanorsdale</Link>
                  </h2>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div> */}
        
            {/* <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Jennifer} />
                  </div>
                </div>
                <div className="team-info">
                  <h2>
                    <Link to="#">Jennifer</Link>
                  </h2>
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
                  <h2>
                    <Link to="#">Shea</Link>
                    </h2>
                    <h3><Link to="/gallery2">Gallery</Link></h3>
                  
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
                  <h2>
                    <Link to="#">Trisha Boone</Link>
                  </h2>
                  <h3><Link to="/gallery3">Gallery</Link></h3>
                  <p style={{ color: "black", fontWeight: "bold" }}>Stylist</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3" >
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Angie} />
                  </div>
                </div>
                <div className="team-info">
                  <h2>
                    <Link to="#">Angie Lyn</Link>
                  </h2>
                  <h3><Link to="/gallery6">Gallery</Link></h3>
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
