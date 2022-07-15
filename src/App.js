import React, { useEffect, useState } from "react";
import "./App.css";

import { commerce } from "./lib/Commerce";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts(response);
  };

  const createCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  const emptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item.cart);
  };

  const handleUpdateQuantity = async (productId, productQuantity) => {
    const item = await commerce.cart.update(productId, {
      quantity: productQuantity,
    });
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    createCart();
  }, []);

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route
          path="/"
          element={
            <Products products={products} handleAddToCart={handleAddToCart} />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              updateQuantity={handleUpdateQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
              emptyCart={emptyCart}
              cart={cart}
            />
          }
        ></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
