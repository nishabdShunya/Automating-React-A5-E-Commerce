import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Footer from "./components/Layout/Footer";
import CartContextProvider from "./store/CartContextProvider";

const router = createBrowserRouter([
  { path: "/", element: <About /> },
  { path: "/products", element: <Products /> },
]);

function App() {
  return (
    <CartContextProvider>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
