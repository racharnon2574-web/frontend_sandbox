import { create } from "zustand";
import { authApi } from "../api/authApi";
import { createJSONStorage, persist } from "zustand/middleware";


const useUserLogin = create(
    persist(
        (set) => ({
            user: null,
            token: "",
            isAuthenticated: false,

            login: async (userData) => {
                const resp = await authApi.post("/login", userData);
                set({
                    token: resp.data.token,
                    user: resp.data.user,
                    isAuthenticated: true,
                });
                return resp;
            },

            logout: () => set({ user: null, token: "", isAuthenticated: false }),
        }),
        {
            name: "user", // key ใน localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);


export default useUserLogin