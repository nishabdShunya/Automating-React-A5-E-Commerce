import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import meddle from "../../assets/meddle.jpg";
import wallet from "../../assets/pf_wallet.jpg";
import CartItem from "./CartItem";

const DUMMY_CART_ITEMS = [
  {
    id: "a5",
    title: "Meddle",
    price: 12,
    imageSrc: meddle,
    quantity: 1,
  },
  {
    id: "m3",
    title: "Wallet",
    price: 11,
    imageSrc: wallet,
    quantity: 2,
  },
];

const Cart = (props) => {
  return (
    <Modal show={props.open} onHide={props.onCloseCart}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {DUMMY_CART_ITEMS.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.id}
                title={cartItem.title}
                price={cartItem.price}
                imageSrc={cartItem.imageSrc}
                quantity={cartItem.quantity}
              />
            );
          })}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.onCloseCart}>
          Close
        </Button>
        <Button variant="warning" onClick={props.onCloseCart}>
          Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
