import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Albums from "./Albums";

test("Albums component is rendered as expected", () => {
  render(<Albums />);
  expect(screen.getByText("The Division Bell")).toBeInTheDocument();
  expect(screen.getByText("The Endless Mirror")).toBeInTheDocument();
  expect(screen.getByText("Obscured By Clouds")).toBeInTheDocument();
  expect(screen.getByText("The Dark Side of Moon")).toBeInTheDocument();
  expect(screen.getByText("Meddle")).toBeInTheDocument();
  expect(screen.getByText("Animals")).toBeInTheDocument();
});
