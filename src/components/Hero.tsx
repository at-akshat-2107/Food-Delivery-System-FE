import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[500px] bg-gradient-to-r from-orange-100 to-red-50">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full md:w-1/2">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Discover the Finest
            <span className="block text-orange-500">Indian Vegetarian</span>
            Cuisine
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600"
          >
            Experience authentic flavors from every corner of India, delivered right to your doorstep.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <button 
              onClick={scrollToMenu}
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Order Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}