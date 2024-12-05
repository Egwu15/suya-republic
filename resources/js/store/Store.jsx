import { create } from "zustand";

const useCartStore = create((set) => ({
    cartItems: [],
    addItem: (item) =>
        set((state) => {
            const existingItem = state.cartItems.find((i) => i.id === item.id);
            return {
                cartItems: existingItem
                    ? state.cartItems.map((i) =>
                          i.id === item.id
                              ? { ...i, quantity: i.quantity + 1 }
                              : i
                      )
                    : [...state.cartItems, { ...item, quantity: 1 }],
            };
        }),
    removeItem: (id) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
    updateItemQuantity: (id, increment) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: Math.max(1, item.quantity + increment),
                      }
                    : item
            ),
        })),
    updateItemSpice: (id, spiceLevel) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === id ? { ...item, spice: spiceLevel } : item
            ),
        })),
    cartCount: (state) =>
        state.cartItems.reduce((acc, item) => acc + item.quantity, 0),
}));

export default useCartStore;
