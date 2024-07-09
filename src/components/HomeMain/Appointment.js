import BGImg3 from "../../assets/img/bg/ap-bg.png";
import React from "react";
import Img from "../../assets/img/bg/open-box-img.png";

const Appointment = () => {
   
  return (
    <>
      <section
        id="booking"
        className="booking-area p-relative pt-120 pb-120"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "2rem",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-bg">
                <div className="section-title center-align">
                  <h2>Get Appointment</h2>
                  <p>Fill out your information.</p>
                </div>
                <form
                  action="https://submit-form.com/Fah8w4pGF"
                  method="post"
                  className="contact-form mt-30"
                  id="form1"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-20">
                        <input
                          type="text"
                          id="firstn"
                          name="firstn"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Eamil"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <select
                          name="stylist"
                          className="custom-select"
                          id="Stylist"
                          aria-label="Example select with button addon"
                          onchange="onChange(this)"
                        >
                          <option> Stylist...</option>
                          <option value="Sam">Sam</option>
                          <option value="Jacki">Jacki</option>
                          <option value="Emily">Emily</option>
                          <option value="leslie">Leslie</option>
                          <option value="Andrea">Andrea</option>
                          <option value="Vanessa">Vanessa</option>
                          <option value="Gloria">Gloria</option>
                          
                          <option value="Trisha">Trisha</option>
                          <option value="Shea">Shea</option>
                        </select>
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <select
                          name="service"
                          className="custom-select"
                          id="inputGroupSelect04"
                          aria-label="Example select with button addon"
                        >
                          <option> Service Needed...</option>
                          <option value="Color Services">Color Services</option>
                          <option value="Haircut">Haircut</option>
                          <option value="Hair Treatments">Hair Treatments</option>
                        </select>
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <select
                          name="when"
                          className="custom-select"
                          id="inputGroupSelect04"
                          aria-label="Example select with button addon"
                        >
                          <option> How Soon...</option>
                          <option value="ASAP">Hair Emergency(ASAP)</option>
                          <option value="Next Few Weeks">Next Few Weeks</option>
                          <option value="Next Few Months">In Next Few Months</option>
                        </select>
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Write comments"
                        ></textarea>
                      </div>
                      <div className="slider-btn">
                        <button
                          className="btn ss-btn"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                        >
                          <span>Submit Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="opening-time"
                style={{ backgroundColor: "rgb(173, 216, 230)" }}
              >
                <h3 style={{ textAlign: "center" }}>Contact Us Today!</h3>
                <h4 style={{ textAlign: "center" }}>2127 S. Church St.</h4>
                <h4 style={{ textAlign: "center" }}>Burlington, NC 27215</h4>
                <h4 style={{ textAlign: "center" }}>Phone: 336.229.4078 </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
