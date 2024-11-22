import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularDishes from './components/PopularDishes';
import Cart from './components/Cart';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import CheckoutPage from './components/CheckoutPage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-right" />
        <Navbar 
          onCartClick={() => setIsCartOpen(true)}
          onLoginClick={() => setIsLoginOpen(true)}
          onSignupClick={() => setIsSignupOpen(true)}
        />
        <Routes>
          <Route path="/" element={
            <main className="pt-16">
              <Hero />
              <PopularDishes />
            </main>
          } />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      </div>
    </Router>
  );
}

export default App; 