import React from "react";
import { Card, Button, Stack, ButtonGroup } from "react-bootstrap";
import { CiDeliveryTruck, CiLocationOn, CiShop } from "react-icons/ci";
import { IoLockClosedSharp } from "react-icons/io5";

const ProductInfo = (props) => {
  return (
    <Card border="dark h-100">
      <Card.Header className="fw-bold text-success">In Stock</Card.Header>
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Subtitle>${props.product.price}</Card.Subtitle>
        <Card.Text className="my-2 d-flex align-items-center">
          <CiDeliveryTruck className="me-1" /> Delivery by Wednesday, 14
          February.
        </Card.Text>
        <Card.Text className="my-2 d-flex align-items-center">
          <CiLocationOn className="me-1" /> Delivering to Delhi - 110003
        </Card.Text>
        <Card.Text className="my-2 d-flex align-items-center">
          <CiShop className="me-1" /> Sold by THE PINK FLOYD STORE
        </Card.Text>
        <Stack gap={1} className="mt-3">
          <ButtonGroup>
            <Button variant="warning">Buy Now</Button>
            <Button variant="dark">Add to Cart</Button>
          </ButtonGroup>
          <Button variant="outline-secondary">Add to Wishlist</Button>
        </Stack>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center text-success fw-bold">
        <IoLockClosedSharp color="#43915d" className="me-1" /> Secure
        transaction
      </Card.Footer>
    </Card>
  );
};

export default ProductInfo;
