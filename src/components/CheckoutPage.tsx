import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const { user } = useAuthStore(); // Check if user is authenticated
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const navigate = useNavigate(); // Initialize navigate function

  // If the user is not logged in, redirect them to the login page
  if (!user) {
    navigate('/login'); // Programmatic navigation
    return null; // Prevent further rendering
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if address and payment method are provided
    if (!address || !paymentMethod) {
      toast.error('Please fill out all required fields!');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsOrderComplete(true);
      clearCart();
      toast.success('Your Order Placed Successfully!');
    }, 2000);
  };

  if (isOrderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-8">Your order has been placed successfully.</p>
            <a
              href="/"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Return to Home
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="font-medium">₹{item.price * item.quantity}</p>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>₹{total()}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className={`mt-6 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors ${
              isProcessing ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isProcessing ? 'Processing...' : 'Confirm Payment'}
          </button>
        </form>
      </div>
    </div>
  );
}
