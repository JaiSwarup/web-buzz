// store.js
import {create} from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(devtools((set) => ({
  currentPath: '/',
  setCurrentPath: (path:any) => set({ currentPath: path }),
})));

export default useStore;
