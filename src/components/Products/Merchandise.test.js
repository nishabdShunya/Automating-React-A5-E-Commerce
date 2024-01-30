import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Merchandise from "./Merchandise";

test("Merchandise component is rendered as expected", () => {
  render(<Merchandise />);
  expect(screen.getByText("T-Shirt")).toBeInTheDocument();
  expect(screen.getByText("Coffee Mug")).toBeInTheDocument();
  expect(screen.getByText("Wallet")).toBeInTheDocument();
});
