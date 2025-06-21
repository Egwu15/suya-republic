import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./checkout.css";
import InputField from "@/Components/InputField";
import { Link, router, usePage } from "@inertiajs/react";
import useCartStore from "@/store/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputError from "@/Components/InputError";
import {
    CardElement,
    Elements,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [formError, setFormErrors] = useState({});
    const { auth } = usePage().props;

    const stripe = useStripe();
    const elements = useElements();

    const {
        guest,
        setGuest,
        cartItems,
        clearCart,
        calculateTotal,
        removeItem,
        updateItemQuantity,
    } = useCartStore();
    useEffect(() => {
        const guestUser = JSON.parse(localStorage.getItem("guestUser"));
        if (guestUser) {
            setGuest(guestUser);
        }
    }, [setGuest]);

    const user = usePage().props.auth.user;

    const [billingDetails, setBillingDetails] = useState({
        firstName: user?.first_name ?? "",
        lastName: user?.last_name ?? "",
        email: user?.email ?? "",
        phone: "",
        address: "",
        note: "",
    });

    useEffect(() => {
        const checkUserAndInitializePayment = async () => {
            try {
                // Check if the cart is empty
                if (!cartItems.length) {
                    console.log(
                        "No items in cart. Redirecting to the menu page..."
                    );
                    toast.error(
                        "Your cart is empty. Please add items to proceed."
                    );
                    router.visit("/menu"); // Navigate to the menu page
                    return;
                }

                // Check if guest or user is not logged in

                if (!guest) {
                    if (auth?.user === null) {
                        toast.error("Please log in to proceed with checkout.");
                        router.visit("/login");
                        return;
                    }
                }

                console.log("has gotten here or herex");
            } catch (error) {
                console.error("Error during payment initialization:", error);
                toast.error(
                    "An error occurred while initializing payment. Please try again."
                );
            }
        };
    }, []);
    const handleQuantityChange = (id, increment) => {
        updateItemQuantity(id, increment);
    };

    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    const handleStripePayment = async () => {
        setLoading(true);

        try {
            // Create PaymentIntent from your backend
            const res = await axios.post(route("create-payment-intent"), {
                amount: calculateTotal() * 100,
            });

            const { clientSecret } = res.data;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: `${billingDetails.firstName} ${billingDetails.lastName}`,
                        email: billingDetails.email,
                        phone: billingDetails.phone,
                    },
                },
            });

            if (result.error) {
                toast.error(result.error.message);
            } else if (result.paymentIntent.status === "succeeded") {
                // Now finalize the order with your backend
                router.post(
                    route("process-payment"),
                    {
                        paymentIntentId: result.paymentIntent.id,
                        billingDetails,
                        products: cartItems,
                        totalCents: calculateTotal() * 100,
                    },
                    {
                        onSuccess: () => {
                            toast.success("Order placed successfully!");
                            clearCart();
                            router.visit("/");
                        },
                        onError: (err) => {
                            console.error(err);
                            if (err.product_error) {
                                toast.error(err.product_error);
                            }
                            setFormErrors(err);
                        },
                    }
                );
            }
        } catch (err) {
            console.error(err);
            toast.error("Payment failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />

            <section
                className="hero-bg d-flex align-items-center "
                style={{
                    height: "400px",
                }}
            >
                <div className="container  text-center">
                    <Link href="/cart" className="text-decoration-none">
                        <button className="small-btn">
                            <span className="material-symbols-outlined ">
                                arrow_back
                            </span>
                            Back
                        </button>
                    </Link>
                </div>
            </section>
            <ToastContainer />

            {/* Notice Section */}

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
                                {/* Checkout Form Section */}
                                <section className="">
                                    <div className="row">
                                        <h2 className="mb-4 text-center">
                                            Additional Information
                                        </h2>{" "}
                                        <p className="text-center">
                                            Please fill in the boxes below with
                                            right information.
                                        </p>
                                        <div className="col-md-12 mb-4">
                                            <form>
                                                <div className="row g-3">
                                                    <div className="col-12 col-md-6">
                                                        <InputField
                                                            type="text"
                                                            placeholder="Enter first name"
                                                            value={
                                                                billingDetails.firstName
                                                            }
                                                            autoComplete="first Name"
                                                            name="firstName"
                                                            onChangeMethod={(
                                                                e
                                                            ) =>
                                                                setBillingDetails(
                                                                    (prev) => ({
                                                                        ...prev,
                                                                        firstName:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    })
                                                                )
                                                            }
                                                        />
                                                        <InputError
                                                            message={
                                                                formError &&
                                                                formError?.[
                                                                    "billingDetails.firstName"
                                                                ]
                                                            }
                                                            className="mt-2"
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <InputField
                                                            type="text"
                                                            placeholder="Enter last name"
                                                            value={
                                                                billingDetails.lastName
                                                            }
                                                            onChangeMethod={(
                                                                e
                                                            ) =>
                                                                setBillingDetails(
                                                                    {
                                                                        ...billingDetails,
                                                                        lastName:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                        <InputError
                                                            message={
                                                                formError &&
                                                                formError?.[
                                                                    "billingDetails.lastName"
                                                                ]
                                                            }
                                                            className="mt-2"
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="col-12 col-md-6">
                                                        <InputField
                                                            type="text"
                                                            placeholder="Enter phone number"
                                                            value={
                                                                billingDetails.phone
                                                            }
                                                            onChangeMethod={(
                                                                e
                                                            ) =>
                                                                setBillingDetails(
                                                                    {
                                                                        ...billingDetails,
                                                                        phone: e
                                                                            .target
                                                                            .value,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                        <InputError
                                                            message={
                                                                formError &&
                                                                formError?.[
                                                                    "billingDetails.phone"
                                                                ]
                                                            }
                                                            className="mt-2"
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <InputField
                                                            type="email"
                                                            placeholder="Enter email address"
                                                            value={
                                                                billingDetails.email
                                                            }
                                                            onChangeMethod={(
                                                                e
                                                            ) =>
                                                                setBillingDetails(
                                                                    {
                                                                        ...billingDetails,
                                                                        email: e
                                                                            .target
                                                                            .value,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                        <InputError
                                                            message={
                                                                formError &&
                                                                formError?.[
                                                                    "billingDetails.email"
                                                                ]
                                                            }
                                                            className="mt-2"
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <InputField
                                                            type="text"
                                                            placeholder="Enter Address"
                                                            value={
                                                                billingDetails.address
                                                            }
                                                            onChangeMethod={(
                                                                e
                                                            ) =>
                                                                setBillingDetails(
                                                                    {
                                                                        ...billingDetails,
                                                                        address:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                        <InputError
                                                            message={
                                                                formError &&
                                                                formError?.[
                                                                    "billingDetails.address"
                                                                ]
                                                            }
                                                            className="mt-2"
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 bg">
                                                        <InputField
                                                            type="text"
                                                            placeholder=" Order Notes(Optional)"
                                                            value={
                                                                billingDetails.note
                                                            }
                                                            onChangeMethod={(
                                                                e
                                                            ) =>
                                                                setBillingDetails(
                                                                    {
                                                                        ...billingDetails,
                                                                        note: e
                                                                            .target
                                                                            .value,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                        <InputError
                                                            message={
                                                                formError &&
                                                                formError?.[
                                                                    "billingDetails.notes"
                                                                ]
                                                            }
                                                            className="mt-2"
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        />
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
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </section>

                                {/* Order Summary Section desktop */}

                                <section className="container mt-5 px-4 d-none d-md-block">
                                    <h3 className="text-center fw-bold">
                                        Your Order
                                    </h3>
                                    <p className="text-center mb-4">
                                        You have {cartItems.length} item
                                        {cartItems.length > 1 && "s"} in your
                                        order
                                    </p>

                                    {cartItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="d-flex align-items-center justify-content-between p-3 mb-3 shadow-sm rounded-4"
                                            style={{ backgroundColor: "#fff" }}
                                        >
                                            {/* Left section: Image & item info */}
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src={`/storage/${item.product_image}`}
                                                    alt={item.name}
                                                    style={{
                                                        width: "70px",
                                                        height: "70px",
                                                        objectFit: "cover",
                                                        borderRadius: "12px",
                                                    }}
                                                />
                                                <div>
                                                    <div
                                                        className="fw-bold text-uppercase"
                                                        style={{
                                                            fontSize: "14px",
                                                        }}
                                                    >
                                                        {item.name}
                                                    </div>
                                                    <div
                                                        className="text-muted"
                                                        style={{
                                                            fontSize: "13px",
                                                        }}
                                                    >
                                                        ${item?.price ?? ""}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right section: Quantity controls */}
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
                                                <span>{item.quantity}</span>
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
                                    ))}
                                </section>
                                {/* mobile screen */}
                                <section className="container my- p-1  d-block d-md-none">
                                    <h3 className="text-center fw-bold">
                                        Your Order
                                    </h3>
                                    <p className="text-center mb-4">
                                        You have {cartItems?.length} item
                                        {cartItems.length > 1 && "s"} in your
                                        order
                                    </p>

                                    {cartItems?.map((item, index) => (
                                        <div
                                            key={index}
                                            className="d-flex flex-column flex-md-row align-items-start justify-content-between  mb-3 shadow-sm rounded-4  p-2"
                                            style={{
                                                backgroundColor: "#fff",
                                            }}
                                        >
                                            <div className="d-flex w-100 gap-3">
                                                {/* Image */}
                                                <img
                                                    // src={item.image}
                                                    src={`/storage/${item.product_image}`}
                                                    alt={item.name}
                                                    style={{
                                                        width: "70px",
                                                        height: "70px",
                                                        objectFit: "cover",
                                                        borderRadius: "12px",
                                                        flexShrink: 0,
                                                    }}
                                                />

                                                {/* Details and controls stacked on mobile */}
                                                <div className="flex-grow-1">
                                                    {/* Name and Price */}
                                                    <div
                                                        className="fw-bold text-uppercase"
                                                        style={{
                                                            fontSize: "14px",
                                                        }}
                                                    >
                                                        {item.name}
                                                    </div>
                                                    <div
                                                        className="text-muted mb-2"
                                                        style={{
                                                            fontSize: "13px",
                                                        }}
                                                    >
                                                        ${item?.price ?? ""}
                                                    </div>

                                                    {/* Quantity Controls */}
                                                    <div className="d-flex align-items-center gap-2">
                                                        <button
                                                            className="btn btn-sm btn-light"
                                                            onClick={() =>
                                                                decreaseQuantity(
                                                                    item.id
                                                                )
                                                            }
                                                        >
                                                            –
                                                        </button>

                                                        <div
                                                            className="bg-dark text-white rounded px-3 py-1"
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                        >
                                                            {item.quantity}
                                                        </div>

                                                        <button
                                                            className="btn btn-sm btn-light"
                                                            onClick={() =>
                                                                increaseQuantity(
                                                                    item.id
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>

                                                        <button
                                                            className="btn btn-sm text-danger ms-auto"
                                                            onClick={() =>
                                                                removeItem(
                                                                    item.id
                                                                )
                                                            }
                                                        >
                                                            <i className="bi bi-trash" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </section>

                                <div className="p-3 bg-inf">
                                    <h3 className="text-center fw-bold">
                                        Payment Summary{" "}
                                    </h3>
                                    <p className="text-center mb-4">
                                        Enter card details for payment
                                    </p>
                                </div>
                                {/* Place Order Button */}
                                <div className="py-5 bg-light-grey shadow-sm">
                                    <div className="col-lg-12 col-12">
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
                                                        calculateTotal() || 0
                                                    ).toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                {/*<span>Tax</span>*/}
                                                {/*<span>£2.00</span>*/}
                                            </div>
                                            <div className="d-flex justify-content-between fw-bold border-top py-2 my-2">
                                                <span>Total</span>
                                                <span>
                                                    £
                                                    {Number(
                                                        calculateTotal() || 0
                                                    ).toFixed(2)}
                                                </span>
                                            </div>

                                            <div>
                                                <CardElement />
                                            </div>
                                            <button
                                                onClick={handleStripePayment}
                                                disabled={!stripe || loading}
                                                className="btn btn-danger text-white px-3 mx-3 my-5"
                                            >
                                                {loading
                                                    ? "Processing..."
                                                    : "Pay Now"}
                                            </button>

                                            {/*<form id="payment-form ">*/}
                                            {/*    <div id="google-pay-button"></div>*/}
                                            {/*    <div id="card-container"></div>*/}
                                            {/*    <button*/}
                                            {/*        id="card-button"*/}
                                            {/*        type="button"*/}
                                            {/*    >*/}
                                            {/*        {calculateTotal()}*/}
                                            {/*    </button>*/}
                                            {/*</form>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Checkout;
