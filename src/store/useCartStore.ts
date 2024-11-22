import { create } from 'zustand';
import { toast } from 'react-hot-toast';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (item) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((i) => i.id === item.id);

    if (existingItem) {
      set({
        items: currentItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ items: [...currentItems, { ...item, quantity: 1 }] });
    }
    toast.success(`Added ${item.name} to cart`);
  },
  removeItem: (id) => {
    set({ items: get().items.filter((i) => i.id !== id) });
  },
  updateQuantity: (id, quantity) => {
    set({
      items: get().items.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i
      ),
    });
  },
  clearCart: () => set({ items: [] }),
  total: () => {
    // Recalculate the total whenever the items change
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));
