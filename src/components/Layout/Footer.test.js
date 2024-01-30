import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

test("Footer component is rendered as expected", () => {
  render(<Footer />);
  expect(screen.getByText("Pink Floyd")).toBeInTheDocument();
  expect(
    screen.getByText("© 2024 Pink Floyd. All rights reserved.")
  ).toBeInTheDocument();
});
