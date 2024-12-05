import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./cart.css";
import { COLOR_BLACK, COLOR_RED } from "@/utils/constant";
import { Link } from "@inertiajs/react";
import Loader from "@/Components/Loader/Loader";
import { router } from "@inertiajs/react";
import useCartStore from "@/store/Store";

const Cart = ({ cartAdded, products }) => {
    const {
        cartItems,
        addItem,
        removeItem,
        updateItemQuantity,
        updateItemSpice,
    } = useCartStore(); // Zustand store methods

    const [loading, setLoading] = useState(false);

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Sync cart with backend on initial load
    useEffect(() => {
        if (!cartAdded && products?.length) {
            const productIds = products.map((product) => product.id);
            router.post("/cart", { product_ids: productIds });
        }
    }, [products, cartAdded]);

    // Handle quantity change
    const handleQuantityChange = (id, increment) => {
        updateItemQuantity(id, increment);
    };

    // Remove an item from the cart
    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    // Update spice level
    const handleSpiceChange = (itemId, newSpice) => {
        updateItemSpice(itemId, newSpice);
    };

    // Calculate subtotal
    const calculateSubtotal = () =>
        cartItems
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2);

    // Calculate total
    const calculateTotal = () => parseFloat(calculateSubtotal()).toFixed(2);

    return (
        <div>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <>
                    {/* Header Section */}
                    <section className="our-menu">
                        <div className="container-fluid text-center">
                            <h1 className="mb-2">CART</h1>
                        </div>
                    </section>

                    {/* Cart Table Section */}
                    <section className="cart-table container-fluid mt-5">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">PRODUCT</th>
                                        <th scope="col">VARIANCE</th>
                                        <th scope="col">PRICE</th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">SUBTOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.length ? (
                                        cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <Link
                                                        href="/product"
                                                        className="d-flex align-items-center"
                                                        style={{
                                                            color: "#b7903c",
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                    >
                                                        <img
                                                            src={
                                                                item.product_image
                                                            }
                                                            alt={item.name}
                                                            style={{
                                                                height: "80px",
                                                                width: "80px",
                                                                marginRight:
                                                                    "10px",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        />
                                                        <span>{item.name}</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    {item.variance ? (
                                                        <select
                                                            value={item.spice}
                                                            onChange={(e) =>
                                                                handleSpiceChange(
                                                                    item.id,
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className="form-select"
                                                        >
                                                            {item.variance.options.map(
                                                                (option) => (
                                                                    <option
                                                                        key={
                                                                            option.id
                                                                        }
                                                                        value={
                                                                            option.name
                                                                        }
                                                                    >
                                                                        {
                                                                            option.name
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    ) : (
                                                        "No variance available"
                                                    )}
                                                </td>
                                                <td>
                                                    £{item.price.toFixed(2)}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <button
                                                            className="btn btn-light"
                                                            onClick={() =>
                                                                handleQuantityChange(
                                                                    item.id,
                                                                    -1
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <span
                                                            className="mx-3"
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                        >
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            className="btn btn-light"
                                                            onClick={() =>
                                                                handleQuantityChange(
                                                                    item.id,
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    £
                                                    {(
                                                        item.quantity *
                                                        item.price
                                                    ).toFixed(2)}
                                                    <span
                                                        className="text-danger mx-3"
                                                        style={{
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
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="5"
                                                className="text-center"
                                            >
                                                No Items Selected
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Cart Totals Section */}
                    <section className="cart-totals p-4">
                        <h1 className="mt-3 mb-5">CART TOTALS</h1>
                        <div className="row align-items-center mb-3">
                            <h6 className="col-md-3">SUBTOTAL</h6>
                            <p className="col-md-9">£{calculateSubtotal()}</p>
                        </div>
                        <hr />
                        <div className="row align-items-center mb-3">
                            <h6 className="col-md-3">TOTAL</h6>
                            <p className="col-md-9">
                                <b>£{calculateTotal()}</b>
                            </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-center gap-3">
                            <Link
                                href="/checkout"
                                className="btn btn-danger text-white"
                                style={{ textDecoration: "none" }}
                            >
                                PROCEED TO CHECKOUT
                            </Link>
                            <button className="btn btn-dark">
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
