import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";

function NavBar() {
  const cartCtx = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const totalQuantity = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

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
              {totalQuantity}
            </Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
