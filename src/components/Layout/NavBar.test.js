import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
import CartContext from "../../store/cart-context";

test("Correct total quantity is displayed in the cart badge", () => {
  const items = [
    { id: 1, name: "Product 1", quantity: 2 },
    { id: 2, name: "Product 2", quantity: 3 },
  ];

  render(
    <CartContext.Provider value={{ items }}>
      <NavBar />
    </CartContext.Provider>
  );

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  expect(screen.getByText(totalQuantity.toString())).toBeInTheDocument();
});
