import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);

  // ✅ Add to Cart (with quantity)
  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((x) => x.id === item.id);

      if (exist) {
        return prev.map((x) =>
          x.id === item.id
            ? { ...x, quantity: x.quantity + 1 }
            : x
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // ✅ Remove from Cart (decrease quantity / remove)
  const removeFromCart = (id) => {
    setCart((prev) => {
      const exist = prev.find((x) => x.id === id);

      if (exist.quantity === 1) {
        return prev.filter((x) => x.id !== id);
      } else {
        return prev.map((x) =>
          x.id === id
            ? { ...x, quantity: x.quantity - 1 }
            : x
        );
      }
    });
  };

  // ✅ API Fetch
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  // ✅ Total Cart Count (important)
  const totalCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar cartCount={totalCount} />

      <div className="container">
        {product.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </>
  );
};

export default App;