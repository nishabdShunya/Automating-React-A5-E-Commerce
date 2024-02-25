import React, { Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import cover from "../assets/pf_cover.jpeg";
import aboutImage from "../assets/pf_about_page.png";

const About = () => {
  return (
    <Fragment>
      <Image src={cover} fluid />
      <Container className="my-5">
        <Row>
          <Col md={4} className="d-flex align-items-center">
            <img
              src={aboutImage}
              alt="about"
              height="300"
              className="rounded-circle"
            />
          </Col>
          <Col md={8}>
            <p>
              Pink Floyd is a legendary British rock band that emerged in London
              in the late 1960s. The original lineup consisted of Syd Barrett,
              Roger Waters, Richard Wright, Nick Mason, and David Gilmour. The
              band gained prominence for their psychedelic sound and
              experimental approach, often pushing the boundaries of
              conventional rock music. Syd Barrett's creative influence was
              crucial in the early years, but due to mental health issues, he
              left the band in 1968. Roger Waters then took on a more prominent
              role as the primary lyricist, contributing to the band's
              conceptual and progressive sound.
            </p>
            <p>
              One of Pink Floyd's defining albums is "The Dark Side of the Moon"
              (1973), a groundbreaking work that explores themes of life, death,
              and the human experience. The album's innovative use of
              synthesizers, sound effects, and elaborate concept tied together
              by a continuous musical flow marked a new era for progressive
              rock. The band continued to produce iconic albums such as "Wish
              You Were Here" (1975), "Animals" (1977), and "The Wall" (1979),
              the latter being a rock opera exploring themes of alienation and
              war. Despite lineup changes and internal conflicts, Pink Floyd
              left an indelible mark on the music industry, achieving both
              critical acclaim and commercial success with their distinctive
              sound and thought-provoking lyrics.
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
