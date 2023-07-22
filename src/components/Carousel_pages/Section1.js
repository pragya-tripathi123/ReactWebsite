import Carousel from "react-bootstrap/Carousel";

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Carousel from 'react-bootstrap/Carousel';
import slide1 from "./../../img/slide/slide-1.jpg";
import slide2 from "./../../img/slide/slide-2.jpg";
import slide3 from "./../../img/slide/slide-3.jpg";
import './Section1.css'
function DarkVariantExample() {
  return (
    <>
      <section className="section">
        {/* <div className="overlay">
          
        </div> */}
        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item interval={1600} style={{ maxHeight: "500px" }}>
              <img className="d-block w-100" src={slide1} alt="First slide" />
              <Carousel.Caption className="caption">
                <h1>
                  Sequi ea Dime Lara
                </h1>
                <p>
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={800} style={{ maxHeight: "500px" }}>
              <img className="d-block w-100" src={slide2} alt="Second slide" />
              <Carousel.Caption className="caption">
                <h1>Lorem Ipsum Dolor</h1>
                <p>
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={900} style={{ maxHeight: "500px" }}>
              <img className="d-block w-100" src={slide3} alt="Third slide" />
              <Carousel.Caption className="caption">
                <div>
                  <h1>Welcome to My^Website</h1>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default DarkVariantExample;
