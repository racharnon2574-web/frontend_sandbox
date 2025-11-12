import { create } from "zustand";

const useUserLogin = create((set) => ({
    user: null,
    isAuthenticated: false,
    login: async (userData) => set({ user: userData, isAuthenticated: true }),
    logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useUserLogin