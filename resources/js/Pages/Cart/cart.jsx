import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./cart.css";
import { COLOR_BLACK, COLOR_RED } from "@/utils/constant";
import { Link } from "@inertiajs/react";
import Loader from "@/Components/Loader/Loader";
import { router } from "@inertiajs/react";

function Cart({ cartAdded, products }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const spiceLevelOptions = [
        { value: "mild", name: "Mild" },
        { value: "spicy", name: "Spicy" },
        { value: "very spicy", name: "Very Spicy" },
    ];

    // Initialize cartItems from localStorage or products
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        if (storedCart.length) {
            setCartItems(storedCart);
        } else if (products?.length) {
            const initialCart = products.map((product) => ({
                id: product.id,
                name: product.name,
                price: product.price,
                product_image: product.product_image,
                quantity: 1,
                spice: "mild",
            }));
            setCartItems(initialCart);
            localStorage.setItem("cartItems", JSON.stringify(initialCart));
        }

        if (!cartAdded && products?.length) {
            const productIds = products.map((product) => product.id); // Extract all product IDs
            router.post("/cart", { product_ids: productIds });
        }
    }, [products, cartAdded]);

    // Handle quantity change
    const handleQuantityChange = (id, increment) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + increment) }
                : item
        );
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    // Handle item removal
    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    // Handle spice level change
    const handleSpiceChange = (itemId, newSpice) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === itemId ? { ...item, spice: newSpice } : item
        );
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    // Calculate subtotal
    const calculateSubtotal = () => {
        return cartItems
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2);
    };

    // Calculate total
    const calculateTotal = () => {
        return parseFloat(calculateSubtotal()).toFixed(2);
    };

    return (
        <div>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <>
                    <section className="our-menu">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-12 text-center">
                                    <h1 className="mb-2">CART</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cart-table container-fluid mt-5">
                        <div className="table-responsive">
                            <table className="table table-responsive">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">PRODUCT</th>
                                        <th scope="col">SPICE</th>
                                        <th scope="col" className="px-5">
                                            PRICE
                                        </th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">SUBTOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <Link
                                                    href="/product"
                                                    className="center-item pad"
                                                    style={{
                                                        color: "#b7903c",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    <div
                                                        className="card-container-img mr-3 px-2"
                                                        style={{
                                                            height: "80px",
                                                            width: "80px",
                                                        }}
                                                    >
                                                        <img
                                                            src={
                                                                item.product_image
                                                            }
                                                            alt={item.name}
                                                            className="img-fluid"
                                                            loading="lazy"
                                                            style={{
                                                                height: "100%",
                                                                width: "100%",
                                                            }}
                                                        />
                                                    </div>
                                                    <span
                                                        style={{
                                                            color: "#b7903c",
                                                        }}
                                                    >
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div
                                                    className="center-item"
                                                    style={{
                                                        height: "80px",
                                                        width: "80px",
                                                    }}
                                                >
                                                    <select
                                                        value={item.spice}
                                                        onChange={(e) =>
                                                            handleSpiceChange(
                                                                item.id,
                                                                e.target.value
                                                            )
                                                        }
                                                        style={{
                                                            border: "1px solid #ccc",
                                                            background:
                                                                "#f8f9fa",
                                                            padding: "5px 10px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        {spiceLevelOptions.map(
                                                            (option) => (
                                                                <option
                                                                    key={
                                                                        option.value
                                                                    }
                                                                    value={
                                                                        option.value
                                                                    }
                                                                >
                                                                    {
                                                                        option.name
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </td>
                                            <td>£{item.price.toFixed(2)}</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(
                                                                item.id,
                                                                -1
                                                            )
                                                        }
                                                        style={{
                                                            border: "1px solid #ccc",
                                                            background:
                                                                "#f8f9fa",
                                                            padding: "5px 10px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                    <span
                                                        style={{
                                                            margin: "0 10px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(
                                                                item.id,
                                                                1
                                                            )
                                                        }
                                                        style={{
                                                            border: "1px solid #ccc",
                                                            background:
                                                                "#f8f9fa",
                                                            padding: "5px 10px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                £
                                                {(
                                                    item.quantity * item.price
                                                ).toFixed(2)}
                                                <span
                                                    style={{
                                                        marginLeft: "10px",
                                                        color: "red",
                                                        cursor: "pointer",
                                                        fontWeight: "bold",
                                                    }}
                                                    onClick={() =>
                                                        handleRemoveItem(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    X
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="p-4">
                        <h1 className="mt-3 mb-5">CART TOTALS</h1>

                        <div className="row" style={{ alignItems: "center" }}>
                            <h6 className="col-md-3">SUBTOTAL</h6>
                            <p className="col-md-9">£{calculateSubtotal()}</p>
                        </div>
                        <hr />

                        <div className="row" style={{ alignItems: "center" }}>
                            <h6 className="col-md-3">TOTAL</h6>
                            <p className="col-md-9">
                                <b>£{calculateTotal()}</b>
                            </p>
                        </div>
                        <hr />

                        <div className="col-md-4" style={{ margin: "0 auto" }}>
                            <Link
                                className="text-white"
                                href="/checkout"
                                style={{
                                    background: COLOR_RED,
                                    color: "white",
                                    margin: "10px 0",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    padding: "10px 20px",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                }}
                            >
                                PROCEED TO CHECKOUT
                            </Link>
                        </div>
                        <div className="col-md-4" style={{ margin: "0 auto" }}>
                            <button
                                style={{
                                    background: COLOR_BLACK,
                                    color: "white",
                                    margin: "20px 0",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                BUY WITH G-PAY
                            </button>
                        </div>
                    </section>
                </>
            )}
            <Footer />
        </div>
    );
}

export default Cart;
