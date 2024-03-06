import fs from "fs";

test("Signup and Login is setup as expected", () => {
  const fileContent = fs.readFileSync("./src/pages/AuthForm.js", "utf8");

  // 1. Check for "JSON.stringify" at least once
  expect(fileContent).toMatch(/JSON\.stringify/g);

  // 2. Check for correct url path for Sign Up
  expect(fileContent).toMatch(
    /https:\/\/identitytoolkit\.googleapis\.com\/v1\/accounts:signUp\?key=/
  );

  // 3. Check for correct url path for Login
  expect(fileContent).toMatch(
    /https:\/\/identitytoolkit\.googleapis\.com\/v1\/accounts:signInWithPassword\?key=/
  );

  // 4. Check for "POST" at least once
  expect(fileContent).toMatch(/POST/g);
});
