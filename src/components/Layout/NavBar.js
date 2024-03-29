import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

function NavBar() {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
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

  const loginClickHandler = () => {
    navigate("/auth");
  };

  const logoutClickHandler = () => {
    authCtx.logout();
    navigate("/auth");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Cart open={open} onCloseCart={closeCartHandler} />
      <Container>
        <Navbar.Brand href="#home">Pink Floyd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive
                  ? "mx-2 text-dark"
                  : "mx-2 text-decoration-none text-dark";
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => {
                return isActive
                  ? "mx-2 text-dark"
                  : "mx-2 text-decoration-none text-dark";
              }}
            >
              Products
            </NavLink>
            <NavLink
              to="/tours"
              className={({ isActive }) => {
                return isActive
                  ? "mx-2 text-dark"
                  : "mx-2 text-decoration-none text-dark";
              }}
            >
              Tours
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive
                  ? "mx-2 text-dark"
                  : "mx-2 text-decoration-none text-dark";
              }}
            >
              Contact
            </NavLink>
          </Nav>
          <Button
            variant="dark"
            className="d-flex align-items-center me-3"
            onClick={openCartHandler}
          >
            <FaShoppingCart />
            <span className="mx-2">Cart</span>
            <Badge pill bg="warning" className="text-bg-warning">
              {totalQuantity}
            </Badge>
          </Button>
          <Button
            onClick={
              authCtx.isLoggedIn ? logoutClickHandler : loginClickHandler
            }
            variant={authCtx.isLoggedIn ? "danger" : "primary"}
          >
            {authCtx.isLoggedIn ? "Logout" : "Login"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
