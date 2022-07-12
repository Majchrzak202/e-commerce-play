import React, { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/products/Products";
import Navbar from "./components/navbar/navbar";
import { commerce } from "./lib/Commerce";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default App;
