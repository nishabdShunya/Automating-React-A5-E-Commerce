import React, { useContext, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import CartContextProvider from "./store/CartContextProvider";
import AuthContext from "./store/auth-context";

const RootLayout = lazy(() => import("./pages/RootLayout"));
const About = lazy(() => import("./pages/About"));
const AuthForm = lazy(() => import("./pages/AuthForm"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const CustomerReviews = lazy(() =>
  import("./components/ProductDetails/CustomerReviews")
);
const Tours = lazy(() => import("./pages/Tours"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <CartContextProvider>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner as="div" animation="border" variant="warning">
              <Spinner animation="border" variant="dark" size="sm" />
            </Spinner>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<AuthForm />} />
            <Route
              path="/products"
              element={
                authCtx.isLoggedIn ? <Products /> : <Navigate to="/auth" />
              }
            />
            <Route
              path="/products/:productId"
              element={
                authCtx.isLoggedIn ? (
                  <ProductDetails />
                ) : (
                  <Navigate to="/auth" />
                )
              }
            >
              <Route path="reviews" element={<CustomerReviews />} />
            </Route>
            <Route path="/tours" element={<Tours />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </CartContextProvider>
  );
}

export default App;
