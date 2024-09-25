// authStore.js
import {create} from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')!) || false,
  login: () => {
    localStorage.setItem('isAuthenticated', "true");
    JSON.parse(localStorage.getItem('isAuthenticated')!)
    set({ isAuthenticated: true });
  },
  logout: () => {
    localStorage.setItem('isAuthenticated', "false");
    set({ isAuthenticated: false });
  },
}));

export default useAuthStore;
