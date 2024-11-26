import { Link } from "@inertiajs/react";

const CartIcon = ({ cartItemCount }) => {
    return (
        <div style={{ position: "relative" }}>
            <i
                className="bi bi-cart-plus text-danger"
                style={{
                    fontSize: "28px",
                    marginRight: "4px",
                }}
            ></i>

            {/* Display the number of items in the cart */}
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
                        padding: "0", // Remove extra padding for precise centering
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
