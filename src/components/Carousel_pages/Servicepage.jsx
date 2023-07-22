import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import skills from './../../img/skills-img.jpg'
import './Section4.css'
export default function Servicepage() {
  return (
    <div>
      <Container className='skills' id='skills'>
        <Row className="text-center p-5">
          <div className="clients mb-4">
            <h3 className="">Our Skills</h3>
          </div>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </Row>
        <Row>
          <Col lg="6">
            <img src={skills} alt="" className="img-fluid" />
          </Col>
          <Col lg="6" className='content pt-4 pt-lg-0'>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt direna past reda
            </p>

            <div class="skills-content">
              <div class="progress">
                <span class="skill">
                  HTML <i class="val">100%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  CSS <i class="val">90%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  JavaScript <i class="val">75%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  Photoshop <i class="val">55%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
