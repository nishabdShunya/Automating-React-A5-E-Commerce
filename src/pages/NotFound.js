import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Image, Container, Row } from "react-bootstrap";
import { TbError404 } from "react-icons/tb";
import coverImage from "../assets/pf_cover.jpeg";

const NotFound = () => {
  const navigate = useNavigate();

  const takeToHomeHandler = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <Image src={coverImage} fluid />
      <Container>
        <Row className="text-center">
          <TbError404 size="8em" color="maroon" />
          <p>Oops! The page you are looking for does not exist.</p>
        </Row>
        <Row className="d-flex justify-content-center">
          <Button
            className="w-25"
            variant="warning"
            onClick={takeToHomeHandler}
          >
            Take me to Home
          </Button>
        </Row>
      </Container>
    </Fragment>
  );
};

export default NotFound;
