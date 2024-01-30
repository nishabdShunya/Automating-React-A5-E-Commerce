import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Album from "./Album";
import CartContext from "../../store/cart-context";

test("Add to cart button adds album to the cart", () => {
  const mockAddItem = jest.fn();
  const album = { id: 1, title: "Album 1", price: 15, imageSrc: "album1.jpg" };

  render(
    <CartContext.Provider value={{ addItem: mockAddItem }}>
      <Album {...album} />
    </CartContext.Provider>
  );

  expect(screen.getByText(album.title)).toBeInTheDocument();
  expect(screen.getByText(`$${album.price}`)).toBeInTheDocument();

  const addToCartButton = screen.getByRole("button", { name: "ADD TO CART" });
  expect(addToCartButton).toBeInTheDocument();

  fireEvent.click(addToCartButton);
  expect(mockAddItem).toHaveBeenCalledWith({ ...album, quantity: 1 });
});
