import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Tours from "./components/Tours/Tours";
import Contact from "./components/Contact/Contact";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </CartContextProvider>
  );
}

export default App;
