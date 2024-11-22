import { create } from 'zustand';
import { dishes } from '../data/dishes';

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredDishes: typeof dishes;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  searchQuery: '',
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    const filtered = dishes.filter(dish => 
      dish.name.toLowerCase().includes(query.toLowerCase()) ||
      dish.description.toLowerCase().includes(query.toLowerCase())
    );
    set({ filteredDishes: filtered });
  },
  filteredDishes: dishes,
}));