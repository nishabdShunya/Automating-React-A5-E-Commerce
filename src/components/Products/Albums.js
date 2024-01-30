import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Album from "./Album";
import theDivisionBell from "../../assets/the_division_bell.jpg";
import theEndlessRiver from "../../assets/the_endless_river.jpg";
import obscuredByClouds from "../../assets/obscured_by_clouds.jpg";
import theDarkSideOfMoon from "../../assets/the_dark_side_of_moon.jpg";
import meddle from "../../assets/meddle.jpg";
import animals from "../../assets/animals.jpg";

const DUMMY_ALBUMS = [
  {
    id: "a1",
    title: "The Division Bell",
    price: 10,
    imageSrc: theDivisionBell,
  },
  {
    id: "a2",
    title: "The Endless Mirror",
    price: 15,
    imageSrc: theEndlessRiver,
  },
  {
    id: "a3",
    title: "Obscured By Clouds",
    price: 7,
    imageSrc: obscuredByClouds,
  },
  {
    id: "a4",
    title: "The Dark Side of Moon",
    price: 9,
    imageSrc: theDarkSideOfMoon,
  },
  {
    id: "a5",
    title: "Meddle",
    price: 12,
    imageSrc: meddle,
  },
  {
    id: "a6",
    title: "Animals",
    price: 19,
    imageSrc: animals,
  },
];

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
