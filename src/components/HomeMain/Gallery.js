import { Link } from "react-router-dom";
import React, { useState } from "react";
import BGImg6 from "../../assets/img/bg/gallery-bg.png";
import FsLightbox from "fslightbox-react";
import Img1 from "../../assets/img/gallery/13606694-1028986350520875-2816605082181279621-n_1.jpg";
import Img2 from "../../assets/img/gallery/13615171-1028986490520861-4117132115131478260-n.jpg";
import Img3 from "../../assets/img/gallery/13615299-1028986417187535-280765896531603735-n.jpg";
import Img4 from "../../assets/img/gallery/13654293-1028986377187539-1343887015239462793-n.jpg";
import Img5 from "../../assets/img/gallery/13654331-1028986290520881-8104479827601347234-n.jpg";
import Img6 from "../../assets/img/gallery/13669796-1028986640520846-6021489251483363875-n.jpg";
import Img7 from "../../assets/img/gallery/30531041-1636385743114263-284652015559114752-n_1.jpg";
import Img9 from "../../assets/img/gallery/3965389595778905444.jpg";
import Img10 from "../../assets/img/gallery/hair-1.jpg";
import Img11 from "../../assets/img/gallery/hair-1.jpg";
import Img12 from "../../assets/img/gallery/hair-1.jpg";
import Img13 from "../../assets/img/gallery/hair-1.jpg";
import Img14 from "../../assets/img/gallery/hair-1.jpg";
import Img15 from "../../assets/img/gallery/hair-1.jpg";
import Img16 from "../../assets/img/gallery/hair-1.jpg";
import Img17 from "../../assets/img/gallery/hair-1.jpg";
import Img18 from "../../assets/img/gallery/hair-1.jpg";
import Img19 from "../../assets/img/gallery/hair-1.jpg";
import Img20 from "../../assets/img/gallery/hair-1.jpg";
import Img21 from "../../assets/img/gallery/hair-1.jpg";
import Img22 from "../../assets/img/gallery/hair-1.jpg";
import Img23 from "../../assets/img/gallery/hair-1.jpg";

const Gallery = () => {
  const [toggler, setToggler] = useState(false);
  const [activeImage, setActiveImage] = useState();
  const [images, setImages] = useState([
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
    Img19,
    Img20,
    Img21,
    Img22,
    Img23,
  ]);

  return (
    <>
      {/* <section
        id="work"
        className="pt-120 pb-110 full-screen-gallary"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BGImg6})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-40 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Our Gallery</h5>
                <h2>See Our Portfolio</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="masonry-gallery-huge portfolio ">
                <div
                  className="grid col4"
                  style={{ position: "relative", height: "762.75px" }}
                >
                  <div
                    className="grid-item hover-zoomin banking"
                    style={{ position: "absolute", left: "0%", top: "0px" }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(1);
                        }}
                      >
                        <img src={Img1} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin financial"
                    style={{
                      position: "absolute",
                      left: "24.9804%",
                      top: "0px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(2);
                        }}
                      >
                        <img src={Img2} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin financial"
                    style={{
                      position: "absolute",
                      left: "49.9607%",
                      top: "0px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(3);
                        }}
                      >
                        <img src={Img3} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin insurance"
                    style={{
                      position: "absolute",
                      left: "74.9411%",
                      top: "0px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(4);
                        }}
                      >
                        <img src={Img4} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin banking insurance"
                    style={{ position: "absolute", left: "0%", top: "351px" }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(5);
                        }}
                      >
                        <img src={Img5} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin financial"
                    style={{
                      position: "absolute",
                      left: "74.9411%",
                      top: "351px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(6);
                        }}
                      >
                        <img src={Img6} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin financial"
                    style={{
                      position: "absolute",
                      left: "49.9607%",
                      top: "381px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(7);
                        }}
                      >
                        <img src={Img7} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin financial"
                    style={{
                      position: "absolute",
                      left: "24.9804%",
                      top: "441px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(9);
                        }}
                      >
                        <img src={Img9} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="team-area fix p-relative pt-120 pb-90"
        style={{ backgroundImage: `url(${BGImg6})` }}
      >
       
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <figure>
                <img src={Img1} alt="" />
              </figure>
            </div>

            <div className="col-lg-4">
              <figure>
                <img src={Img2} alt="" />
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
                <img src={Img4} alt="" />
              </figure>
            </div>
            <div className="col-lg-6">
              <figure>
                <img src={Img3} alt="" />
              </figure>
            </div>

            <div className="col-lg-6">
              <figure>
                <img src={Img5} style={{ height: 500, width: 600 }} alt="" />
              </figure>
            </div>
            <div className="col-lg-3">
              <img src={Img9} style={{ height: 300 }} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img6} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img7} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img10} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img11} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img12} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img13} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img14} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img15} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img16} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img17} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img18} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img19} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img20} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img21} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img22} alt="" />
            </div>
            <div className="col-lg-4">
              <img src={Img23} alt="" />
            </div>
          </div>
        </div>
      </section>
      <FsLightbox toggler={toggler} sources={images} slide={activeImage} />
    </>
  );
};

export default Gallery;
