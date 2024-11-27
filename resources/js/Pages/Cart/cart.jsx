import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./cart.css";
import { COLOR_BLACK, COLOR_RED, COLOR_WHITE } from "@/utils/constant";
import dummy from "../../../assets/img/suya/Lamb-Suya-3.jpg";
import { Link } from "@inertiajs/react";
import Loader from "@/Components/Loader/Loader";

const Cart = () => {
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
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(items);
    }, []);

    const handleQuantityChange = (id, increment) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id
                ? {
                      ...item,
                      quantity: Math.max(1, (item.quantity || 1) + increment),
                  }
                : item
        );
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };
    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id); // Filter out the removed item
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update localStorage
    };

    const handleSpiceChange = (itemId, newSpice) => {
        // Update the spice level of the item in your state or cart
        const updatedCartItems = cartItems.map((item) =>
            item.id === itemId ? { ...item, spice: newSpice } : item
        );
        // Update the cart with the new state
        setCartItems(updatedCartItems); // Assuming you're using useState for managing cart items
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
                                                                // dummy
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
                                                        value={
                                                            item.spice || "mild"
                                                        } // Default to mild if no spice level is set
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
                                            <td>
                                                <div
                                                    className="center-item pad px-5"
                                                    style={{
                                                        height: "80px",
                                                        width: "80px",
                                                    }}
                                                >
                                                    £{item.price.toFixed(2)}
                                                </div>
                                            </td>
                                            <td>
                                                <div
                                                    className="center-item quantity-controls d-flex align-items-center"
                                                    style={{
                                                        height: "80px",
                                                        width: "80px",
                                                    }}
                                                >
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
                                                        {item.quantity || 1}
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
                                                <div
                                                    className="center-item "
                                                    style={{
                                                        height: "80px",
                                                        width: "80px",
                                                    }}
                                                >
                                                    £
                                                    {(
                                                        (item.quantity || 1) *
                                                        item.price
                                                    ).toFixed(2)}{" "}
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
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="p-4">
                        <h1 className="mt-3 mb-5">CART TOTALS</h1>

                        {/* Subtotal */}
                        <div className="row" style={{ alignItems: "center" }}>
                            <h6 className="col-md-3">SUBTOTAL</h6>
                            <p className="col-md-9">
                                £
                                {cartItems
                                    .reduce(
                                        (acc, item) =>
                                            acc +
                                            item.price * (item.quantity || 1),
                                        0
                                    )
                                    .toFixed(2)}
                            </p>
                        </div>
                        <hr />

                        {/* Shipping */}
                        <div className="row" style={{ alignItems: "center" }}>
                            <h6 className="col-md-3">SHIPPING</h6>
                            <div className="col-md-9">
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="deliveryOption"
                                        name="shipping"
                                        value="delivery"
                                    />
                                    <label
                                        className="label-auth"
                                        htmlFor="deliveryOption"
                                    >
                                        Delivery fee applicable only to Suya
                                        Spice products.
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="pickupOption"
                                        name="shipping"
                                        value="pickup"
                                    />
                                    <label
                                        className="label-auth"
                                        htmlFor="pickupOption"
                                    >
                                        All orders must be collected in-store at
                                        303 Chester Road, Manchester M15 4EY.
                                    </label>
                                </div>
                                <p className="mt-2">
                                    Shipping options will be updated during
                                    checkout.
                                </p>
                            </div>
                        </div>
                        <hr />

                        {/* Total */}
                        <div className="row" style={{ alignItems: "center" }}>
                            <h6 className="col-md-3">TOTAL</h6>
                            <p className="col-md-9">
                                <b>
                                    £
                                    {cartItems
                                        .reduce(
                                            (acc, item) =>
                                                acc +
                                                item.price *
                                                    (item.quantity || 1),
                                            0
                                        )
                                        .toFixed(2)}
                                </b>
                            </p>
                        </div>
                        <hr />

                        {/* Checkout Buttons */}
                        <div className="col-md-4" style={{ margin: "0 auto" }}>
                            <a
                                href="/checkout"
                                style={{
                                    background: COLOR_RED,
                                    color: "white",
                                    margin: "10px 0",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    border: "none",
                                    padding: "10px 20px",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                }}
                            >
                                PROCEED TO CHECKOUT
                            </a>
                        </div>
                        <div className="col-md-4" style={{ margin: "0 auto" }}>
                            <button
                                style={{
                                    background: COLOR_BLACK,
                                    color: "white",
                                    margin: "20px 0",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    padding: "10px 20px",
                                    border: "none",
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
};

export default Cart;
