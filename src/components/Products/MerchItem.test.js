import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MerchItem from "./MerchItem";

const sampleMerchItem = {
  id: "m1",
  title: "T-Shirt",
  price: 15,
  imageSrc: "path/to/image.jpg",
};

test("MerchItem is rendered as expected", () => {
  render(
    <MerchItem
      id={sampleMerchItem.id}
      title={sampleMerchItem.title}
      price={sampleMerchItem.price}
      imageSrc={sampleMerchItem.imageSrc}
    />
  );

  expect(screen.getByText("T-Shirt")).toBeInTheDocument();
  expect(screen.getByText("$15")).toBeInTheDocument();
});
