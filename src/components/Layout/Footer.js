import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaYoutubeSquare, FaSpotify, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className="mt-5 p-3 pt-5 text-bg-dark">
      <Row>
        <Col>
          <h1>Pink Floyd</h1>
          <p>&copy; 2024 Pink Floyd. All rights reserved.</p>
        </Col>
        <Col className="d-flex justify-content-end align-items-center gap-3">
          <FaYoutubeSquare size="2em" />
          <FaSpotify size="2em" />
          <FaFacebookSquare size="2em" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
