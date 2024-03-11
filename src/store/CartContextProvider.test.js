import fs from "fs";

test("Cart made user specific", () => {
  const fileContent = fs.readFileSync(
    "./src/store/CartContextProvider.js",
    "utf8"
  );

  expect(fileContent).toMatch(/JSON\.stringify/g);
  expect(fileContent).toMatch(/firebaseio/g);
  expect(fileContent).toMatch(/POST/g);
  expect(fileContent).toMatch(/PUT/g);
  expect(fileContent).toMatch(/DELETE/g);
});
