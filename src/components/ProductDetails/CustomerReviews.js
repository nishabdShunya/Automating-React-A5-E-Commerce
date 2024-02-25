import React, { Fragment } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DUMMY_CUSTOMER_REVIEWS } from "../../constants";

const CustomerReviews = () => {
  const [searchParams, setSearchParams] = useSearchParams("?sort=desc");
  const sortType = searchParams.get("sort");

  const changeSortHandler = () => {
    const newSortType = sortType === "desc" ? "asc" : "desc";
    setSearchParams({ sort: newSortType });
  };

  const sortedReviews = DUMMY_CUSTOMER_REVIEWS.sort((a, b) => {
    const order = sortType === "asc" ? 1 : -1;
    return order * (a.id - b.id);
  });

  return (
    <Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="m-0">Customer Reviews</h4>
        <Link to=".." className="text-decoration-none text-danger fs-1">
          &times;
        </Link>
      </div>
      <Button variant="outline-dark" onClick={changeSortHandler}>
        See {sortType === "desc" ? "Oldest" : "Latest"} First
      </Button>
      <Container>
        {sortedReviews.map((r) => (
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
