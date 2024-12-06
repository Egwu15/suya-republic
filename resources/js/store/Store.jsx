import { create } from "zustand";

const useCartStore = create((set) => ({
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [], // Initialize from localStorage
    addItem: (item) =>
        set((state) => {
            const existingItem = state.cartItems.find((i) => i.id === item.id);
            const updatedCart = existingItem
                ? state.cartItems.map((i) =>
                      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                  )
                : [...state.cartItems, { ...item, quantity: 1 }];

            localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Save to localStorage
            return { cartItems: updatedCart };
        }),
    removeItem: (id) =>
        set((state) => {
            const updatedCart = state.cartItems.filter(
                (item) => item.id !== id
            );
            localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Save to localStorage
            return { cartItems: updatedCart };
        }),
    updateItemQuantity: (id, increment) =>
        set((state) => {
            const updatedCart = state.cartItems.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: Math.max(1, item.quantity + increment),
                      }
                    : item
            );
            localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Save to localStorage
            return { cartItems: updatedCart };
        }),
    clearCart: () => {
        localStorage.removeItem("cartItems"); // Clear localStorage
        set({ cartItems: [] });
    },
}));

export default useCartStore;
