import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  birthDate: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, birthDate: string, password: string, confirmPassword: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // Simulate API call
        if (email && password) {
          set({
            user: {
              id: '1',
              email,
              name: email.split('@')[0],
              birthDate: '1999-01-01',
            },
            isAuthenticated: true,
          });
        }
      },
      signup: async (name: string, email: string, birthDate: string, password: string, confirmPassword: string) => {
        // Validate full name, email, password, and confirm password
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/;

        if (!nameRegex.test(name)) {
          throw new Error('Name must only contain letters and spaces.');
        }

        if (!emailRegex.test(email)) {
          throw new Error('Invalid email address.');
        }

        if (!passwordRegex.test(password)) {
          throw new Error('Password must be at least 8 characters long, contain one uppercase, one lowercase, one number, and one special character.');
        }

        if (password !== confirmPassword) {
          throw new Error('Passwords do not match.');
        }

        // Simulate API call for signup
        set({
          user: {
            id: '1',
            email,
            name,
            birthDate,
          },
          isAuthenticated: true,
        });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);