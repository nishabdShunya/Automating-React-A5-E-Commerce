import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Album from "./Album";

const sampleAlbum = {
  id: "a1",
  title: "The Division Bell",
  price: 10,
  imageSrc: "path/to/image.jpg",
};

test("Album component is rendered as expected", () => {
  render(
    <Album
      id={sampleAlbum.id}
      title={sampleAlbum.title}
      price={sampleAlbum.price}
      imageSrc={sampleAlbum.imageSrc}
    />
  );

  expect(screen.getByText("The Division Bell")).toBeInTheDocument();
  expect(screen.getByText("$10")).toBeInTheDocument();
});
