import fs from "fs";

test("Contact form submission adds user details to the database", () => {
  const contactJsContent = fs.readFileSync(
    "./src/components/Contact/Contact.js",
    "utf8"
  );
  const firebaseioMatches = contactJsContent.match(/firebaseio/g);
  expect(firebaseioMatches && firebaseioMatches.length).toBe(1);
  expect(contactJsContent).toMatch(/POST/g);
  expect(contactJsContent).toMatch(/JSON\.stringify/g);
});
