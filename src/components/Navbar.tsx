import React from 'react';
import { UtensilsCrossed, Search, ShoppingBag, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useCartStore } from '../store/useCartStore';
import { useSearchStore } from '../store/useSearchStore';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onCartClick: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export default function Navbar({ onCartClick, onLoginClick, onSignupClick }: NavbarProps) {
  const { isAuthenticated, user, logout } = useAuthStore();
  const items = useCartStore((state) => state.items);
  const { setSearchQuery } = useSearchStore();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <UtensilsCrossed className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Indian Zaika
            </span>
          </Link>
          
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for dishes..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              className="flex items-center space-x-1 hover:text-orange-500 relative"
              onClick={onCartClick}
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="hidden md:inline">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm">Hi, {user?.name}</span>
                <button 
                  onClick={logout}
                  className="text-sm text-orange-500 hover:text-orange-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button 
                  className="text-sm hover:text-orange-500"
                  onClick={onSignupClick}
                >
                  Sign Up
                </button>
                <button 
                  className="flex items-center space-x-1 hover:text-orange-500"
                  onClick={onLoginClick}
                >
                  <User className="h-6 w-6" />
                  <span className="hidden md:inline">Login</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}