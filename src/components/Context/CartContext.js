import React, { createContext, useState, useContext } from 'react';

// Create a new context object
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;

  // Value to be provided by this context
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount
  };

  // Render the provider with the value and children
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);