import React from 'react'
import './Section4.css'
import { Col, Container, Row } from 'react-bootstrap'
export default function Section4() {
  const section4data = [
    {
      title: "Lorem Ipsum",
      para: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path d="M10 10.1111V1L21 7V21H3V7L10 10.1111ZM12 4.36908V13.1886L5 10.0775V19H19V8.18727L12 4.36908Z"></path>
        </svg>
      ),
    },
    {
      title: "Magni Dolores",
      para: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path>
        </svg>
      ),
    },
    {
      title: "Sed ut perspiciatis",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 10H4V19H20V10ZM15.0355 11.136L16.4497 12.5503L11.5 17.5L7.96447 13.9645L9.37868 12.5503L11.5 14.6716L15.0355 11.136ZM7 5H4V8H20V5H17V6H15V5H9V6H7V5Z"></path>
        </svg>
      ),
    },
    {
      title: "Lorem Ipsum",
      para: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path d="M10 10.1111V1L21 7V21H3V7L10 10.1111ZM12 4.36908V13.1886L5 10.0775V19H19V8.18727L12 4.36908Z"></path>
        </svg>
      ),
    },
    {
      title: "Magni Dolores",
      para: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path>
        </svg>
      ),
    },
    {
      title: "Sed ut perspiciatis",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 10H4V19H20V10ZM15.0355 11.136L16.4497 12.5503L11.5 17.5L7.96447 13.9645L9.37868 12.5503L11.5 14.6716L15.0355 11.136ZM7 5H4V8H20V5H17V6H15V5H9V6H7V5Z"></path>
        </svg>
      ),
    },
  ];
  return (
    <>
      <Container className="pt-5">
        <Row className="row-cols-3">
          {section4data.map((data) => (
            <>
              <Col className="cards cardssec4 p-5">
                {data.img}
                <h3>{data.title}</h3>
                <p>{data.para}</p>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}
