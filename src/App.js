import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Products />
      <Footer />
    </Fragment>
  );
}

export default App;
