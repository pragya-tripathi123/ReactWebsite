import React from 'react'
import './Section4.css'
import { Col } from 'react-bootstrap';
export default function Section2(props) {
  return (
    <>
      <Col className="cardsec2 cards p-5">
        <div>{props.pass.img}</div>
        <h3>{props.pass.title}</h3>
        <p>{props.pass.para}</p>
      </Col>
    </>
  );
}
