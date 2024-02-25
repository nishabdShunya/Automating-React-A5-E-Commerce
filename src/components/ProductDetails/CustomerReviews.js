import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DUMMY_CUSTOMER_REVIEWS } from "../../constants";

const CustomerReviews = () => {
  return (
    <Fragment>
      <h4>Customer Reviews</h4>
      <Container>
        {DUMMY_CUSTOMER_REVIEWS.map((r) => (
          <Row
            key={r.id}
            className="border border-dark-subtle my-1 py-3 rounded"
          >
            <Col md={1}>
              <img src={r.photo} alt={r.name} height="75" className="rounded" />
            </Col>
            <Col md={11}>
              <div className="fw-semibold">{r.name}</div>
              <div>{r.review}</div>
            </Col>
          </Row>
        ))}
      </Container>
    </Fragment>
  );
};

export default CustomerReviews;
