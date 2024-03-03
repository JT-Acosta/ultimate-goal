import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Cart from './pages/cart';
import { CartProvider } from './components/Context/CartContext';


function App() {
  return (
    <Router>
      <CartProvider>
      <Routes>
        <Route path='/' element={ <Home /> } exact />
        <Route path='/cart' element={ <Cart /> } exact />
      </Routes>
      </CartProvider>
    </Router>
  );
}


export default App;
