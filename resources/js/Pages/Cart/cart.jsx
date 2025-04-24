import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./cart.css";
import { Link, router, usePage } from "@inertiajs/react";
import Loader from "@/Components/Loader/Loader";
import useCartStore from "@/store/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewProduct from "@/Components/ViewProduct/ViewProduct";
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
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [orderType, setOrderType] = useState("");
    // Handle opening the modal with the clicked product
    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setViewModal(true);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setViewModal(false);
        setSelectedProduct(null);
    };

    const [spiceLevels, setSpiceLevels] = useState({});
    const user = usePage().props.auth.user;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        // Retrieve the stored value from localStorage
        const storedOrderType = localStorage.getItem("orderType");
        setOrderType(storedOrderType);
    }, []);

    useEffect(() => {
        if (!cartAdded && products?.length) {
            const productIds = products.map((product) => product.id);
            router.post("/cart", { product_ids: productIds });
        }
    }, [products, cartAdded]);

    const handleQuantityChange = (id, increment) => {
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

        // if (guest || user) {
        //     // If guest exists, navigate to the checkout page
        //     router.visit("/checkout");
        // } else
        if (orderType === "collect") {
            router.visit("/checkout");
            // Open modal only if orderType is not "collect"
            // setShowModal(false);
        } else {
            // If guest doesn't exist, show the modal
            setShowModal(true);
        }
    };

    const handleDeliverToMe = () => {
        window.location.href =
            "https://deliveroo.co.uk/menu/manchester/hulme-park/suya-republick-and-grill?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share";
    };

    const handleCollect = () => {
        window.location.href = "/checkout";
    };

    const onClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <section
                        className="hero-bg d-flex align-items-center "
                        style={{
                            height: "400px",
                        }}
                    >
                        <div className="container  text-center">
                            <Link href="/menu" className="text-decoration-none">
                                <button className="small-btn">
                                    <span className="material-symbols-outlined ">
                                        arrow_back
                                    </span>
                                    Back
                                </button>
                            </Link>
                        </div>
                    </section>
                    <section className="menu-section position-relative">
                        {/* <div class="overlay"></div> */}
                        <div className="x min-vh-100 p-3">
                            {" "}
                            {/* Red background */}
                            <div className="container">
                                <div
                                    className="card mx-auto"
                                    // style={{ maxWidth: "700px" }}
                                >
                                    {/* <div className="card-body"> */}
                                    <div className="container white-bg py-5">
                                        <ToastContainer />{" "}
                                        <div className="row g-4">
                                            <div className="col-lg-8">
                                                <h4 className="mb-3">
                                                    Cart Total
                                                </h4>
                                                <p className="mb-4">
                                                    You have {cartItems.length}{" "}
                                                    item(s) in your cart
                                                </p>
                                                {cartItems.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className="card p-3 mb-3 shadow-sm"
                                                    >
                                                        <div className="d-flex align-items-center gap-3">
                                                            <img
                                                                src={`/storage/${item.product_image}`}
                                                                alt={item.name}
                                                                className="rounded"
                                                                style={{
                                                                    height: "70px",
                                                                    width: "70px",
                                                                    objectFit:
                                                                        "cover",
                                                                    cursor: "pointer",
                                                                }}
                                                                onClick={() =>
                                                                    handleProductClick(
                                                                        item
                                                                    )
                                                                }
                                                            />
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1">
                                                                    {item.name}
                                                                </h6>
                                                                <p className="mb-1">
                                                                    £
                                                                    {item.price.toFixed(
                                                                        2
                                                                    )}
                                                                </p>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <button
                                                                    className="btn btn-outline-dark btn-sm"
                                                                    onClick={() =>
                                                                        handleQuantityChange(
                                                                            item.id,
                                                                            -1
                                                                        )
                                                                    }
                                                                >
                                                                    –
                                                                </button>
                                                                <span>
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </span>
                                                                <button
                                                                    className="btn btn-outline-dark btn-sm"
                                                                    onClick={() =>
                                                                        handleQuantityChange(
                                                                            item.id,
                                                                            1
                                                                        )
                                                                    }
                                                                >
                                                                    +
                                                                </button>
                                                                <button
                                                                    className="btn btn-outline-danger btn-sm"
                                                                    onClick={() =>
                                                                        handleRemoveItem(
                                                                            item.id
                                                                        )
                                                                    }
                                                                >
                                                                    🗑
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="col-lg-4 d-block d-md-none">
                                                    <div className="card shadow-sm p-4">
                                                        <h5 className="fw-bold mb-3">
                                                            Order Summary
                                                        </h5>
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <span>Order</span>
                                                            <span>
                                                                {
                                                                    cartItems.length
                                                                }
                                                                pcs
                                                            </span>
                                                        </div>
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <span>
                                                                Subtotal
                                                            </span>
                                                            <span>
                                                                £
                                                                {Number(
                                                                    (calculateTotal() ||
                                                                        0) - 2
                                                                ).toFixed(2)}
                                                            </span>
                                                        </div>
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <span>Tax</span>
                                                            <span>£2.00</span>
                                                        </div>
                                                        <div className="d-flex justify-content-between fw-bold border-top pt-2 mt-2">
                                                            <span>Total</span>
                                                            <span>
                                                                £
                                                                {Number(
                                                                    calculateTotal() ||
                                                                        0
                                                                ).toFixed(2)}
                                                            </span>
                                                        </div>
                                                        <button
                                                            onClick={
                                                                handleCheckout
                                                            }
                                                            className="btn btn-danger text-white w-100 mt-4"
                                                            style={{
                                                                textDecoration:
                                                                    "none",
                                                            }}
                                                            disabled={
                                                                !cartItems.length
                                                            }
                                                        >
                                                            Proceed to Checkout
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* <div className="mt-5">
                                                    <h5>
                                                        Additional Information
                                                    </h5>
                                                    <p>
                                                        Please fill in the boxes
                                                        below with correct
                                                        information.
                                                    </p>
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                placeholder="First Name"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Last Name"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Phone Number"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter Address"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Order Note (optional)"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-check mt-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="extraHotNews"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="extraHotNews"
                                                        >
                                                            Want extra hot news?
                                                            Tick the box
                                                        </label>
                                                    </div>
                                                </div> */}
                                            </div>

                                            <div className="col-lg-4 d-none d-md-block">
                                                <div className="card shadow-sm p-4">
                                                    <h5 className="fw-bold mb-3">
                                                        Order Summary
                                                    </h5>
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span>Order</span>
                                                        <span>
                                                            {cartItems.length}
                                                            pcs
                                                        </span>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span>Subtotal</span>
                                                        <span>
                                                            £
                                                            {Number(
                                                                (calculateTotal() ||
                                                                    0) - 2
                                                            ).toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span>Tax</span>
                                                        <span>£2.00</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between fw-bold border-top pt-2 mt-2">
                                                        <span>Total</span>
                                                        <span>
                                                            £
                                                            {Number(
                                                                calculateTotal() ||
                                                                    0
                                                            ).toFixed(2)}
                                                        </span>
                                                    </div>

                                                    <button
                                                        onClick={handleCheckout}
                                                        className="btn btn-danger text-white w-100 mt-4"
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                        disabled={
                                                            !cartItems.length
                                                        }
                                                    >
                                                        Proceed to Checkout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {viewModal && selectedProduct && (
                                            <ViewProduct
                                                show={viewModal}
                                                product={selectedProduct}
                                                onClose={handleCloseModal}
                                            />
                                        )}
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
            <Footer />
        </div>
    );
};

export default Cart;
