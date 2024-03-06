import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import About from "./pages/About";
import AuthForm from "./pages/AuthForm";
import Products from "./pages/Products";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import CustomerReviews from "./components/ProductDetails/CustomerReviews";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />}>
            <Route path="reviews" element={<CustomerReviews />} />
          </Route>
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContextProvider>
  );
}

export default App;
