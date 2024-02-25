import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Album from "./Album";
import { DUMMY_ALBUMS } from "../../constants";

const Albums = () => {
  return (
    <div className="m-5">
      <h2 className="text-center">MUSIC</h2>
      <Container className="m-5">
        <Row lg={3} className="gy-5 gx-5">
          {DUMMY_ALBUMS.map((album) => {
            return (
              <Col key={album.id}>
                <Album
                  id={album.id}
                  title={album.title}
                  price={album.price}
                  imageSrc={album.imageSrc}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Albums;
