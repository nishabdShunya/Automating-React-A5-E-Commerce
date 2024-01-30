import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../Cart/Cart";

function NavBar() {
  const [open, setOpen] = useState(false);

  const openCartHandler = () => {
    setOpen(true);
  };

  const closeCartHandler = () => {
    setOpen(false);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Cart open={open} onCloseCart={closeCartHandler} />
      <Container>
        <Navbar.Brand href="#home">Pink Floyd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#tours">Tours</Nav.Link>
          </Nav>
          <Button
            variant="dark"
            className="d-flex align-items-center"
            onClick={openCartHandler}
          >
            <FaShoppingCart />
            <span className="mx-2">Cart</span>
            <Badge pill bg="warning" className="text-bg-warning">
              0
            </Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
