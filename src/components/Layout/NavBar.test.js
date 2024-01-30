import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";

test("opens the cart on click of the cart button", () => {
  render(<NavBar />);
  fireEvent.click(screen.getByText("Cart"));
  expect(screen.getByText("Meddle")).toBeInTheDocument();
});
