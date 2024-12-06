import { create } from "zustand";

const useCartStore = create((set, get) => ({
    cartItems: [],
    addItem: (product) => {
        set((state) => ({
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
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
    updateItemSpice: (id, spice) => {
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === id ? { ...item, spice } : item
            ),
        }));
    },
    calculateTotal: () => {
        const { cartItems } = get();
        return cartItems
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2);
    },
}));
export default useCartStore;
