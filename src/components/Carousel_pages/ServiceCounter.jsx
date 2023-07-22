import React from "react";
import { Container,Row,Col } from "react-bootstrap";


export default function ServiceCounter() {
  const serviceData = [
    { num: 232, para: "Happy Clients consequuntur quae qui deca rode" },
    {
      num: 562,
      para: "Projects adipisci atque cum quia aut numquam delectus",
    },
    {
      num: 1423,
      para: "Hours Of Support aut commodi quaerat. Aliquam ratione",
    },
    {
      num: 15,
      para: "Hard Workers rerum asperiores dolor molestiae doloribu",
    },
  ];
  return (
    <>
      <Container className="pt-5">
        <Row>
          {serviceData.map((data) => (
            <>
              <Col className="counters p-5">
                <h3>{data.num}</h3>
                <p>{data.para}</p>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}
