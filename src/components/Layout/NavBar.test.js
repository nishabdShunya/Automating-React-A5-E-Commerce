import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
import AuthContext from "../../store/auth-context";

test("Login button is shown when user is not logged in", () => {
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <NavBar />
      </AuthContext.Provider>
    </BrowserRouter>
  );

  const loginLink = screen.getByText("Login");
  expect(loginLink).toBeInTheDocument();
});

test("Logout button is shown when user is logged in", () => {
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <NavBar />
      </AuthContext.Provider>
    </BrowserRouter>
  );

  const logoutButton = screen.getByText("Logout");
  expect(logoutButton).toBeInTheDocument();
});

test("User is logged out on clicking the Logout button", () => {
  const mockLogout = jest.fn();

  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn: true, logout: mockLogout }}>
        <NavBar />
      </AuthContext.Provider>
    </BrowserRouter>
  );

  // Click on the logout button
  fireEvent.click(screen.getByText("Logout"));
  expect(window.location.pathname).toBe("/auth");
});
