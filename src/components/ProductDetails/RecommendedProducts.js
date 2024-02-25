import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Stack } from "react-bootstrap";

const RecommendedProducts = (props) => {
  return (
    <Stack className="h-100">
      <h4>Recommended Products</h4>
      <Container className="overflow-y-scroll rounded h-100">
        {props.recommendedProducts.map((p) => (
          <Row key={p.id} className="bg-secondary-subtle my-1 py-2 rounded">
            <Col md={3}>
              <img
                src={p.imageSrc}
                alt={p.title}
                height="75"
                className="rounded"
              />
            </Col>
            <Col md={9} className="fw-semibold">
              <Link
                to={`/products/${p.id}`}
                className="text-decoration-none text-dark"
              >
                {p.title}
              </Link>
              <div>${p.price}</div>
            </Col>
          </Row>
        ))}
      </Container>
    </Stack>
  );
};
export default RecommendedProducts;
