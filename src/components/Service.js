import React from 'react'
import { Container } from "react-bootstrap";
import Section4 from './Carousel_pages/Section4';
import Servicepage from './Carousel_pages/Servicepage';

export default function Service() {
  return (
    <div>
      <div className="breadcrumbs">
        <Container>
          <h2>Services</h2>
        </Container>
      </div>
      <Section4></Section4>
      <Servicepage></Servicepage>
    </div>
  );
}
