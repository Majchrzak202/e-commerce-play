import React, { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/products/Products";
import Navbar from "./components/navbar/navbar";
import { commerce } from "./lib/Commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [myCart, setCart] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts(response);
  };

  const createCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart)
  };

  console.log(myCart);

  useEffect(() => {
    fetchProducts();
    createCart();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Products products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
