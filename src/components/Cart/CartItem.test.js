import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

test("Cart items are removed on click of remove button", () => {
  const mockRemoveItem = jest.fn();
  const item = {
    id: 1,
    title: "Product 1",
    price: 10,
    quantity: 2,
    imageSrc: "image1.jpg",
  };

  render(
    <CartContext.Provider value={{ removeItem: mockRemoveItem }}>
      <CartItem {...item} />
    </CartContext.Provider>
  );

  expect(screen.getByText(item.title)).toBeInTheDocument();
  expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();

  const removeButton = screen.getByText("Remove");
  expect(removeButton).toBeInTheDocument();

  fireEvent.click(removeButton);
  expect(mockRemoveItem).toHaveBeenCalledWith(item.id);
});
