import React from "react";
import about from "./../../img/about.jpg";
import { Col, Row } from "react-bootstrap";
import './Section4.css'
export default function Section3() {
  return (
    <div className="container pt-3">
      <Row>
        <Col lg="6">
          <img src={about} alt="" className="img-fluid" />
        </Col>
        <Col lg="6" className="pt-5 pt-lg-0">
          <div className=" content ">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
