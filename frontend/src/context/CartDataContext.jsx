import React, { createContext, useContext, useState } from "react";

// Membuat CartDataContext gabungan
const CartDataContext = createContext();

// CartDataProvider untuk mengelola status cart dan data terkait cart
export function CartDataProvider({ children }) {
  // Status cart
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "MIE GACOAN",
      harga: 10455,
      image:
        "https://myprofit.interactiveholic.net/myprofit/images/products/myresto-161001.jpg",
    },
    {
      id: 2,
      title: "SUSHI DELUXE",
      harga: 120000,
      image:
        "https://myprofit.interactiveholic.net/myprofit/images/products/myresto-161001.jpg",
    },
    {
      id: 3,
      title: "NASI GORENG SPECIAL",
      harga: 25000,
      image:
        "https://myprofit.interactiveholic.net/myprofit/images/products/myresto-161001.jpg",
    },
    {
      id: 4,
      title: "ES CENDOL",
      harga: 15000,
      image:
        "https://myprofit.interactiveholic.net/myprofit/images/products/myresto-161001.jpg",
    },
  ]);

  // Fungsi untuk toggle cart
  const toggleCart = () => setIsCartOpen((prevState) => !prevState);

  // Fungsi untuk menambahkan item ke cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Fungsi untuk menghapus item dari cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartDataContext.Provider
      value={{ isCartOpen, toggleCart, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartDataContext.Provider>
  );
}

// Hook untuk mengakses CartDataContext
export function useCartData() {
  return useContext(CartDataContext);
}
