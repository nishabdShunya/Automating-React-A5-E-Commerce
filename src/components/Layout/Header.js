import React, { Fragment } from "react";
import Image from "react-bootstrap/Image";
import cover from "../../assets/pf_cover.jpeg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Fragment>
      <NavBar />
      <Image src={cover} fluid />
    </Fragment>
  );
};

export default Header;
