import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "./CartItem";

const sampleCartItem = {
  title: "Meddle",
  price: 12,
  imageSrc: "path/to/image.jpg",
  quantity: 1,
};

test("renders CartItem component correctly", () => {
  render(
    <CartItem
      title={sampleCartItem.title}
      price={sampleCartItem.price}
      imageSrc={sampleCartItem.imageSrc}
      quantity={sampleCartItem.quantity}
    />
  );
  expect(screen.getByText("Meddle")).toBeInTheDocument();
  expect(screen.getByText("$12")).toBeInTheDocument();
  expect(screen.getByText("x 1")).toBeInTheDocument();
});
