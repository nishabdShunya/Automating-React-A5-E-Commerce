import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = () => {
    cartCtx.removeItem(props.id);
  };

  return (
    <Row className="d-flex justify-content-between align-items-end my-4 py-4 bg-warning bg-opacity-10 border border-warning rounded">
      <Col className="d-flex align-items-stretch" md={9}>
        <img
          src={props.imageSrc}
          alt="cart_item"
          height="75"
          className="rounded"
        />
        <div className="d-flex flex-column  align-items-start">
          <h5 className="m-0 mx-1">{props.title}</h5>
          <div>
            <Badge
              pill
              bg="warning"
              text="dark"
              className="fs-6 fw-semibold mx-1"
            >
              ${props.price}
            </Badge>
            <Badge
              pill
              bg="dark"
              text="warning"
              className="fs-6 fw-semibold mx-1"
            >
              x{props.quantity}
            </Badge>
          </div>
        </div>
      </Col>
      <Col className="text-end" md={3}>
        <Button variant="outline-danger" onClick={removeItemHandler}>
          Remove
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;
