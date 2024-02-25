import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import About from "./pages/About";
import Products from "./pages/Products";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </CartContextProvider>
  );
}

export default App;
