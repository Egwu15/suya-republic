import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
    persist((set, get) => ({
        cartItems: [],

        addItem: (product) => {
            set((state) => ({
                cartItems: [
                    ...state.cartItems,
                    { ...product, quantity: 1, spice: null }, // Ensure spice is initialized
                ],
            }));
        },

        removeItem: (id) => {
            set((state) => ({
                cartItems: state.cartItems.filter((item) => item.id !== id),
            }));
        },
        updateItemQuantity: (id, increment) => {
            set((state) => ({
                cartItems: state.cartItems.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              quantity: Math.max(1, item.quantity + increment),
                          }
                        : item
                ),
            }));
        },
        updateItemVariance: (id, spice) => {
            set((state) => ({
                cartItems: state.cartItems.map((item) =>
                    item.id === id
                        ? { ...item, spice } // Update with the spice object
                        : item
                ),
            }));
        },

        calculateTotal: () => {
            const { cartItems } = get();
            return cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2);
        },
        // Clear the cart
        clearCart: () => {
            set({ cartItems: [] });
        },
        // User functionality
        user: null, // Holds user information (e.g., guest or logged-in user)
        setUser: (user) => set({ user }), // Set user information
        clearUser: () => set({ user: null }), // Clear user information

        // Persist user to localStorage
        saveUserToLocalStorage: () => {
            const { user } = get();
            if (user) {
                localStorage.setItem("guestUser", JSON.stringify(user));
            }
        },
        loadUserFromLocalStorage: () => {
            const savedUser = localStorage.getItem("guestUser");
            if (savedUser) {
                set({ user: JSON.parse(savedUser) });
            }
        },
    }))
);
export default useCartStore;
