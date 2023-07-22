import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Link from 'react-router-dom'
import "./Section4.css";
export default function Footer() {
  return (
    <>
      <footer id="footer" className="mt-5">
        <div className="footer-newsletter">
          <Container>
            <Row>
              <Col lg="6">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
              </Col>
              <Col lg="6">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="footer-top">
          <Container>
            <Row>
              <Col lg="3" md="6" className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> Home
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> About us
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> Services
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> Terms of service
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> Privacy policy
                  </li>
                </ul>
              </Col>
              <Col lg="3" md="6" className="footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Product Management</li>
                  <li>Marketing</li>
                  <li>Graphic Design</li>
                </ul>
              </Col>
              <Col lg="3" md="6" className="footer-contact">
                <h4>Contact Us</h4>
                <p>
                  <span>A108 Adam Street</span>
                  <br />
                  <span>New York, NY 535022</span>
                  <br />
                  <span>United States</span>
                  <br />
                  <br />
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                  <br />
                  <strong>Email:</strong> <span>info@example.com</span>
                  <br />
                </p>
              </Col>
              <Col lg="3" md="6" className="footer-info">
                <h3>About Eterna</h3>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus.
                </p>
                <div class="social-links mt-3"></div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Eterna</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </Container>
      </footer>
    </>
  );
}
