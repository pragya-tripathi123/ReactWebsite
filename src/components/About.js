import React from 'react'
import Section3 from './Carousel_pages/Section3'
// import './Carousel.css'
import { Container } from 'react-bootstrap';
import ServiceCounter from "./Carousel_pages/ServiceCounter";
import Section5CLient from './Carousel_pages/Section5CLient';
import Testimonial from './Carousel_pages/Testimonial';
export default function About() {
  return (
    <div>
      <div className="breadcrumbs">
        <Container>
          <h2>About Us</h2>
        </Container>
      </div>
      <Section3></Section3>

      <ServiceCounter></ServiceCounter>
      <Section5CLient></Section5CLient>
      <Testimonial></Testimonial>
    </div>
  );
}
