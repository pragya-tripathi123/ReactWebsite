import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Section1 from './Carousel_pages/Section1'
import './Carousel.css'
import Section2 from "./Carousel_pages/Section2";

import { Container,Row } from "react-bootstrap";
import Section3 from "./Carousel_pages/Section3";
import Section4 from "./Carousel_pages/Section4";
import Section5CLient from "./Carousel_pages/Section5CLient";


const datas = [
  {
    title: "Lorem Ipsum",
    para: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
      >
        <path
          fill="#e96b56"
          d="M10 10.1111V1L21 7V21H3V7L10 10.1111ZM12 4.36908V13.1886L5 10.0775V19H19V8.18727L12 4.36908Z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Dolor Sitema",
    para: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
      >
        <path
          fill="#e96b56"
          d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Sed ut perspiciatis",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
      >
        <path
          fill="#e96b56"
          d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 10H4V19H20V10ZM15.0355 11.136L16.4497 12.5503L11.5 17.5L7.96447 13.9645L9.37868 12.5503L11.5 14.6716L15.0355 11.136ZM7 5H4V8H20V5H17V6H15V5H9V6H7V5Z"
        ></path>
      </svg>
    ),
  },
];






function DarkVariantExample(props) {
  return (
    <>
      <Section1></Section1>
      <Container className="mt-5 mb-5">
        <Row>
          {datas.map((item1) => (
            <Section2 pass={item1}></Section2>
          ))}
        </Row>
      </Container>
      <Section3></Section3>
      <Section4></Section4>
      <Section5CLient></Section5CLient>
    </>
  );
}

export default DarkVariantExample;
