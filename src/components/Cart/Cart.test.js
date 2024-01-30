import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";

test("renders Cart component correctly", () => {
  const dummyCloseHandler = jest.fn();
  render(<Cart open={true} onCloseCart={dummyCloseHandler} />);
  expect(screen.getByText("Meddle")).toBeInTheDocument();
  expect(screen.getByText("Wallet")).toBeInTheDocument();
});

test("calls onCloseCart when Close button is clicked", () => {
  const dummyCloseHandler = jest.fn();
  render(<Cart open={true} onCloseCart={dummyCloseHandler} />);
  fireEvent.click(screen.getByText("Close"));
  expect(dummyCloseHandler).toHaveBeenCalled();
});

test("calls onCloseCart when Order button is clicked", () => {
  const dummyCloseHandler = jest.fn();
  render(<Cart open={true} onCloseCart={dummyCloseHandler} />);
  fireEvent.click(screen.getByText("Order"));
  expect(dummyCloseHandler).toHaveBeenCalled();
});
