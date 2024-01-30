import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <Modal show={props.open} onHide={props.onCloseCart}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {cartCtx.items.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.id}
                id={cartItem.id}
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
        <div>
          <h5 className="text-end">Total: ${totalAmount}</h5>
          <Stack direction="horizontal" gap={1}>
            <Button variant="outline-secondary" onClick={props.onCloseCart}>
              Close
            </Button>
            <Button variant="warning" onClick={props.onCloseCart}>
              Order
            </Button>
          </Stack>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
