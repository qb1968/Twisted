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
                          <option value="3">Emily</option>
                          <option value="3">Leslie</option>
                          <option value="3">Andrea</option>
                          <option value="3">Vanessa</option>
                          <option value="3">Gloria</option>
                          <option value="3">Jewel</option>
                          <option value="3">Trisha</option>
                          <option value="3">Shea</option>
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
                          <option value="1">Color Services</option>
                          <option value="2">Haircut</option>
                          <option value="3">Hair Treatments</option>
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
                          <option value="1">Hair Emergency(ASAP)</option>
                          <option value="2">Next Few Weeks</option>
                          <option value="3">In Next Few Months</option>
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
