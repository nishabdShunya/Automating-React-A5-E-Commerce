import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";
import CartContext from "../../store/cart-context";

test("Cart component is rendered as expected with correct total amount", () => {
  const items = [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      quantity: 2,
      imageSrc: "image1.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      price: 15,
      quantity: 3,
      imageSrc: "image2.jpg",
    },
  ];

  const totalAmount = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  render(
    <CartContext.Provider value={{ items }}>
      <Cart open={true} onCloseCart={() => {}} />
    </CartContext.Provider>
  );

  expect(screen.getByText(`Total: $${totalAmount}`)).toBeInTheDocument();

  items.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
  });

  expect(screen.getByText("Close")).toBeInTheDocument();
  expect(screen.getByText("Order")).toBeInTheDocument();
});
