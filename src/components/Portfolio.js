import React from 'react'
import port1 from './../img/portfolio/portfolio-1.jpg';
import port2 from './../img/portfolio/portfolio-2.jpg';
import port3 from "./../img/portfolio/portfolio-3.jpg";
import port4 from "./../img/portfolio/portfolio-4.jpg";
import port5 from "./../img/portfolio/portfolio-5.jpg";
import port6 from "./../img/portfolio/portfolio-6.jpg";
import port7 from "./../img/portfolio/portfolio-7.jpg";
import port8 from "./../img/portfolio/portfolio-8.jpg";
import port9 from "./../img/portfolio/portfolio-9.jpg";
import { Col, Container, Row } from 'react-bootstrap';
export default function Portfolio() {
  return (
    <Container className="portfolio">
      <Row className="mt-5">
        <Col lg="4" md="6" className="mt-5">
          <div class="portfolio-wrap">
            <img className="img-fluid" src={port1} alt="" />
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="App 1"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" className="mt-5">
          <div class="portfolio-wrap">
            <img className="img-fluid" src={port2} alt="" />
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-2.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Web 3"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" className="mt-5">
          <div class="portfolio-wrap">
            <img className="img-fluid" src={port3} alt="" />
            <div class="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-3.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="App 2"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" className="mt-5">
          <div class="portfolio-wrap">
            <img className="img-fluid" src={port4} alt="" />
            <div class="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <div class="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-4.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Card 2"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" className="mt-5">
          <div class="portfolio-wrap">
            <img className="img-fluid" src={port5} alt="" />
            <div class="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-5.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Web 2"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" className="mt-5">
          <div class="portfolio-wrap">
            <img className="img-fluid" src={port6} alt="" />
            <div class="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-6.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="App 3"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" className="mt-5">
          <div class="portfolio-wrap">
            <img className="img-fluid" src={port7} alt="" />
            <div class="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <div class="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-7.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Card 1"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" className="mt-5">
          <div class="portfolio-wrap">
            <img className="img-fluid" src={port8} alt="" />
            <div class="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <div class="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-8.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Card 3"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" className="mt-5">
          <div class="portfolio-wrap">
            <img className="img-fluid" src={port9} alt="" />
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-9.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Web 3"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i class="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
