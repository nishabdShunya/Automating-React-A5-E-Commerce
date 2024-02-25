import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import RecommendedProducts from "../components/ProductDetails/RecommendedProducts";
import CustomerReviews from "../components/ProductDetails/CustomerReviews";
import { ALL_PRODUCTS } from "../constants";

const ProductDetails = () => {
  const params = useParams();
  const product = ALL_PRODUCTS.find((p) => p.id === params.productId);
  const otherProducts = ALL_PRODUCTS.filter((p) => p.id !== params.productId);

  return (
    <Container className="my-5">
      <Row style={{ height: "356px" }}>
        <Col className="h-100">
          <Image src={product.imageSrc} fluid className="rounded" />
        </Col>
        <Col className="h-100">
          <ProductInfo product={product} />
        </Col>
        <Col className="h-100">
          <RecommendedProducts recommendedProducts={otherProducts} />
        </Col>
      </Row>
      <Row className="pt-3">
        <Col>
          <CustomerReviews />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
