import {create} from "zustand";
import {persist} from "zustand/middleware";

const useCartStore = create(
    persist((set, get) => ({
        cartItems: [],

        addItem: (product) => {
            const { cartItems } = get();
            const isInternational = product.is_international;

            // Check if cart has conflicting category items
            const hasConflict = cartItems.some(
                (item) => item.is_international !== isInternational
            );

            if (hasConflict) {
                alert(
                    "You can only select items from one category (local or international) at a time."
                );
                // throw new Error(
                //     "You can only select items from one category (local or international) at a time."
                // );

                // toast.error(
                //     "You can only select items from one category (local or international) at a time."
                // );
                return; // Stop execution here, avoiding the throw
            }

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
            return cartItems.reduce(
                (acc, item) => acc + item.price  * item.quantity,
                0
            );
        },
        // Clear the cart
        clearCart: () => {
            set({ cartItems: [] });
        },
        // User functionality
        guest: null, // Holds user information (e.g., guest or logged-in user)
        setGuest: (guest) => set({ guest }), // Set user information
        clearGuest: () => set({ guest: null }), // Clear user information

        // Persist user to localStorage
        saveGuestToLocalStorage: () => {
            const { guest } = get();
            if (guest) {
                localStorage.setItem("guestUser", JSON.stringify(guest));
            }
        },
        loadUserFromLocalStorage: () => {
            const savedGuest = localStorage.getItem("savedGuest");
            if (savedGuest) {
                set({ user: JSON.parse(savedGuest) });
            }
        },
    }))
);
export default useCartStore;
