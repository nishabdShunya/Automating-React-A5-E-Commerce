import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MerchItem from "./MerchItem";
import CartContext from "../../store/cart-context";

test("Add to cart button adds merchandise to the cart", () => {
  const mockAddItem = jest.fn();
  const merchItem = {
    id: 1,
    title: "Merch Item 1",
    price: 20,
    imageSrc: "merch1.jpg",
  };

  render(
    <CartContext.Provider value={{ addItem: mockAddItem }}>
      <MerchItem {...merchItem} />
    </CartContext.Provider>
  );

  expect(screen.getByText(merchItem.title)).toBeInTheDocument();
  expect(screen.getByText(`$${merchItem.price}`)).toBeInTheDocument();

  const addToCartButton = screen.getByRole("button", { name: "ADD TO CART" });
  expect(addToCartButton).toBeInTheDocument();

  fireEvent.click(addToCartButton);
  expect(mockAddItem).toHaveBeenCalledWith({ ...merchItem, quantity: 1 });
});
