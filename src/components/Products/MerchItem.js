import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const MerchItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = () => {
    cartCtx.addItem({ ...props, quantity: 1 });
  };

  return (
    <Card>
      <Card.Img variant="top" src={props.imageSrc} />
      <Card.Body>
        <Card.Title>
          <Link
            to={`/products/${props.id}`}
            className="text-dark text-decoration-none"
          >
            {props.title}
          </Link>
        </Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Button variant="warning" onClick={addItemHandler}>
          ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MerchItem;
