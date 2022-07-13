import React, { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/products/Products";
import Navbar from "./components/navbar/navbar";
import { commerce } from "./lib/Commerce";
import Cart from "./components/cart/Cart";

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

  console.log(cart);

  useEffect(() => {
    fetchProducts();
    createCart();
  }, []);

  return (
    <div className="App">
      <Cart emptyCart={emptyCart} cart={cart} />
      <Navbar totalItems={cart.total_items} />
      <Products products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
