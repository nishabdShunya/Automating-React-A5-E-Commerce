import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("App is rendered as expected", () => {
  render(<App />);
  const aboutText = screen.getByText(
    /Pink Floyd is a legendary British rock band/i
  );
  expect(aboutText).toBeInTheDocument();
});
