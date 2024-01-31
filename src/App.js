import React from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Footer from "./components/Layout/Footer";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Products />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
