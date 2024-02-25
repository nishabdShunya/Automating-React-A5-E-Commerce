import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MerchItem from "./MerchItem";
import { DUMMY_MERCHANDISE } from "../../constants";

const Merchandise = () => {
  return (
    <div className="m-5">
      <h2 className="text-center">MERCHANDISE</h2>
      <Container className="m-5">
        <Row lg={3} className="gy-5 gx-5">
          {DUMMY_MERCHANDISE.map((merch) => {
            return (
              <Col key={merch.id}>
                <MerchItem
                  id={merch.id}
                  title={merch.title}
                  price={merch.price}
                  imageSrc={merch.imageSrc}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Merchandise;
