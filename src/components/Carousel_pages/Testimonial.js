import React from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import test1 from './../../img/testimonials/testimonials-1.jpg'
import test2 from "./../../img/testimonials/testimonials-2.jpg";
import test3 from "./../../img/testimonials/testimonials-3.jpg";
import test4 from "./../../img/testimonials/testimonials-4.jpg";
import test5 from "./../../img/testimonials/testimonials-5.jpg";
import test6 from "./../../img/testimonials/testimonials-6.jpg";
export default function Testimonial() {
    const testimonialdata = [
      { img: test1, name: "Saul Goodman", desi: "Ceo &amp; Founder" },
      { img: test2, name: "Sara Wilsson", desi: "Designer" },
      { img: test3, name: "Jena Karlis", desi: "Store Owner" },
      { img: test4, name: "Matt Brandon", desi: "Freelancer" },
      { img: test5, name: "John Larson", desi: "Entrepreneur" },
      { img: test6, name: "Emily Harison", desi: "Store Owner" },
    ];
const para = "Proin iaculis purus consequat sem cure digni ssim donecporttitora entum suscipit rhoncus. Accusantium quam, ultricieseget id, aliquam eget nibh et. Maecen aliquam, risus at semper.";
  return (
    <div>
      <Container className="testimonials">
        <Row className="text-center p-5">
          <div className="clients mb-4">
            <h3 className="">Testimonials</h3>
          </div>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </Row>
        <Row>
          {testimonialdata.map((data) => (
            <>
              <Col lg="6">
                <div className="testimonial-item mt-4">
                  <img src={data.img} alt="" />
                  <h3>{data.name}</h3>
                  <h4>{data.desi}</h4>
                  <p>
                    {para}
                  </p>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
}
