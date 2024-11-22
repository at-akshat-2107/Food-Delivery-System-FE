import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchStore } from '../store/useSearchStore';
import { useCartStore } from '../store/useCartStore';

export default function PopularDishes() {
  const { filteredDishes } = useSearchStore();
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="py-16 bg-white" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Menu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{dish.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{dish.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{dish.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-orange-500">₹{dish.price}</span>
                  <button 
                    onClick={() => addItem({
                      id: dish.id,
                      name: dish.name,
                      price: dish.price,
                      image: dish.image
                    })}
                    className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}