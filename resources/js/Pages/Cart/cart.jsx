import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./cart.css";
import { Link, router, usePage } from "@inertiajs/react";
import Loader from "@/Components/Loader/Loader";
import useCartStore from "@/store/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = ({ cartAdded, products }) => {
    const {
        cartItems,
        addItem,
        removeItem,
        updateItemQuantity,
        updateItemSpice,
        calculateTotal,
    } = useCartStore();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [postcode, setPostcode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [spiceLevels, setSpiceLevels] = useState({});
    const user = usePage().props.auth.user;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!cartAdded && products?.length) {
            const productIds = products.map((product) => product.id);
            router.post("/cart", { product_ids: productIds });
        }
    }, [products, cartAdded]);

    const handleQuantityChange = (id, increment) => {
        console.log(cartItems);

        updateItemQuantity(id, increment);
    };

    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    // const handleVarianceChange = (itemId, spice) => {
    //     updateItemVariance(itemId, spice);
    // };
    const handleVarianceChange = (itemId, selectedOption) => {
        setSpiceLevels((prevSpiceLevels) => ({
            ...prevSpiceLevels,
            [itemId]: selectedOption,
        }));
    };
    useEffect(() => {
        const initialSpiceLevels = cartItems.reduce((acc, item) => {
            if (item.spice) {
                acc[item.id] = item.spice;
            }
            return acc;
        }, {});
        setSpiceLevels(initialSpiceLevels);
    }, [cartItems]);

    const handleCheckout = () => {
        const { guest } = useCartStore.getState();

        if (guest || user) {
            // If guest exists, navigate to the checkout page
            router.visit("/checkout");
        } else {
            // If guest doesn't exist, show the modal
            setShowModal(true);
        }
    };

    const handleDeliverToMe = () => {
        if (postcode.trim() === "") {
            setErrorMessage("Please enter your postcode.");
        } else if (!postcode.toUpperCase().startsWith("MN")) {
            setModalMessage("We only deliver within Manchester.");
            setShowModal(true); // Show modal for invalid postcode
            setErrorMessage(""); // Clear error message
        } else {
            // toast.success("Delivery is available for your postcode!");

            // alert("Delivery is available for your postcode!");
            window.location.href = "/login";

            setErrorMessage(""); // Clear error message
        }
    };

    const handleCollect = () => {
        if (postcode.trim() === "") {
            setErrorMessage("Please enter your postcode.");
        } else {
            setModalMessage("Collection details will be provided soon.");
            setShowModal(true);
            setErrorMessage(""); // Clear error message
        }
    };
    const onClose = () => {
        setShowModal(false);
    };
    return (
        <div>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <>
                    {" "}
                    <ToastContainer />
                    <section className="our-menu">
                        <div className="container-fluid text-center">
                            <h1 className="mb-2">CART</h1>
                        </div>
                    </section>
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
                                                        <span className="text-dark">
                                                            {item.name}
                                                        </span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    {item.variance ? (
                                                        <select
                                                            value={
                                                                spiceLevels[
                                                                    item.id
                                                                ]?.id || ""
                                                            }
                                                            onChange={(e) => {
                                                                const selectedOption =
                                                                    item.variance.options.find(
                                                                        (
                                                                            option
                                                                        ) =>
                                                                            option.id ===
                                                                            parseInt(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                    );
                                                                console.log(
                                                                    "Selected Option:",
                                                                    selectedOption
                                                                );
                                                                handleVarianceChange(
                                                                    item.id,
                                                                    selectedOption
                                                                );
                                                            }}
                                                            className="form-select w-75"
                                                        >
                                                            {item.variance.options.map(
                                                                (option) => (
                                                                    <option
                                                                        key={
                                                                            option.id
                                                                        }
                                                                        value={
                                                                            option.id
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
                                                    £{item.price ?? 'invalid price'}
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
                    <section className="cart-totals p-4">
                        <h1 className="mt-3 mb-5">CART TOTALS</h1>
                        <div className="row align-items-center mb-3">
                            <h6 className="col-md-3">TOTAL</h6>
                            <p className="col-md-9">
                                <b>£{calculateTotal()}</b>
                            </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-center gap-3">
                            <button
                                onClick={handleCheckout}
                                className="btn btn-danger text-white"
                                style={{ textDecoration: "none" }}
                            >
                                PROCEED TO CHECKOUT
                            </button>
                            <button
                                className="btn btn-dark"
                                onClick={() => setShowModal(true)}
                            >
                                BUY WITH G-PAY
                            </button>
                        </div>

                        {/* Modal */}
                        {showModal && (
                            <div
                                className="modal fade show"
                                tabIndex="-1"
                                style={{
                                    display: "block",
                                    background: "rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                {" "}
                                <ToastContainer />
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">
                                                Cart Action
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={onClose}
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="postcode"
                                                        className="form-label text-left fw-bold"
                                                    >
                                                        Enter your full postcode
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="postcode"
                                                        className="form-control text-center"
                                                        placeholder="e.g. EC1Y 1BE"
                                                        value={postcode}
                                                        onChange={(e) =>
                                                            setPostcode(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    {errorMessage && (
                                                        <p className="text-danger mt-2">
                                                            {errorMessage}
                                                        </p>
                                                    )}
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-dark w-100 mb-2"
                                                    onClick={handleCollect}
                                                >
                                                    I’LL COLLECT
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-dark w-100"
                                                    onClick={handleDeliverToMe}
                                                >
                                                    DELIVER TO ME
                                                </button>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={onClose}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* <Modal
                            show={showModal}
                            onClose={() => setShowModal(false)}
                        /> */}
                    </section>
                </>
            )}
            <Footer />
        </div>
    );
};

export default Cart;
