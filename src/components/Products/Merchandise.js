import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MerchItem from "./MerchItem";
import tshirt from "../../assets/pf_tshirt.jpg";
import coffeeMug from "../../assets/pf_coffee_mug.png";
import wallet from "../../assets/pf_wallet.jpg";

const DUMMY_MERCHANDISE = [
  {
    id: "m1",
    title: "T-Shirt",
    price: 15,
    imageSrc: tshirt,
  },
  {
    id: "m2",
    title: "Coffee Mug",
    price: 7,
    imageSrc: coffeeMug,
  },
  {
    id: "m3",
    title: "Wallet",
    price: 11,
    imageSrc: wallet,
  },
];

const Merchandise = () => {
  return (
    <div className="m-5">
      <h2 className="text-center">MERCHANDISE</h2>
      <Container className="m-5">
        <Row lg={3} className="gy-5 gx-5">
          {DUMMY_MERCHANDISE.map((merch) => {
            return (
              <Col key={merch.id}>
                <MerchItem
                  id={merch.id}
                  title={merch.title}
                  price={merch.price}
                  imageSrc={merch.imageSrc}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Merchandise;
