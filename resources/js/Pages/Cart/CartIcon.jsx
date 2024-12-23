import useCartStore from "@/store/Store";

const CartIcon = () => {
    const cartItemCount = useCartStore((state) =>
        state.cartItems.reduce((acc, item) => acc + item.quantity, 0)
    );

    return (
        <div style={{ position: "relative" }}>
            <i
                className="bi bi-cart-plus text-danger"
                style={{ fontSize: "24px" }}
            ></i>
            {cartItemCount > 0 && (
                <span
                    style={{
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: "-3px",
                        right: "-5px",
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "50%",
                        fontSize: "12px",
                    }}
                >
                    {cartItemCount}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
