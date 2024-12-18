import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./checkout.css";
import InputField from "@/Components/InputField";
import { router, usePage } from "@inertiajs/react";
import useCartStore from "@/store/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputError from "@/Components/InputError";

const Checkout = ({ squareAppId, squareLocationId }) => {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formError, setFormErrors] = useState({});

    const { guest, setGuest, cartItems, clearCart, calculateTotal } =
        useCartStore();
    useEffect(() => {
        const guestUser = JSON.parse(localStorage.getItem("guestUser"));
        if (guestUser) {
            setGuest(guestUser);
        }
    }, [setGuest]);

    const user = usePage().props.auth.user;
    const [billingDetails, setBillingDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        note: "",
    });

    const handleChange = (e) => {
        console.log("Old value:", billingDetails);
        setBillingDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        const checkUserAndInitializePayment = async () => {
            // Check if the guest is logged in
            if (!(guest || user)) {
                console.log(
                    "you are not logged in. Redirecting to login page..."
                );
                toast.error("You need to log in to proceed with checkout.");
                router.visit("/login"); // Navigate to login page
                // window.location.href = "/login"; // Navigate to the menu page

                return;
            }

            // Log the guest's details
            console.log("Logged in guest details:", guest);

            // Initialize payment if the guest is logged in
            const payments = await window.Square.payments(
                squareAppId,
                squareLocationId
            );

            const card = await payments.card();

            await card.attach("#card-container");
            setCard(card);
        };

        checkUserAndInitializePayment();
    }, []);

    const [productQuantity, setProductQuantity] = useState("");

    const handlePayment = async () => {
        setLoading(true);

        try {
            const { token, errors } = await card.tokenize();

            if (errors) {
                console.error(errors);
                setLoading(false);
                return;
            }

            console.log("token", cartItems);

            router.post(
                "/process-payment",
                {
                    nonce: token,
                    totalCents: calculateTotal() * 100,
                    products: cartItems,
                    billingDetails: billingDetails,
                },

                {
                    onSuccess: () => {
                        setFormErrors({});
                        toast.success("Order is placed successfully!");
                        clearCart();
                        router.visit("/"); // Navigate to home page
                    },
                    onError: (err) => {
                        console.log(err);
                        setFormErrors(err);
                        if (err.billingDetails != null) {
                            toast.error(
                                err.payment?.detail ??
                                    err.product_detail ??
                                    "An unexpected error occurred"
                            );
                        }
                    },
                }
            );
        } catch (error) {
            console.error(error);
            toast.error(
                "Payment failed, check for debit and reach out to customer support"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />

            {/* Header Section */}
            <section className="our-menu text-center py-5 bg-light">
                <div className="container">
                    <h1 className="mb-2">CHECKOUT</h1>
                </div>
            </section>
            <ToastContainer />

            {/* Notice Section */}
            <section className="container mt-5">
                <div className="alert alert-info text-center">
                    All orders are to be collected in-store at
                    <strong> 303 Chester Road, Manchester M15 4EY</strong>
                </div>
            </section>

            {/* Checkout Form Section */}
            <section className="container mt-5">
                <div className="row">
                    {/* Left Form */}
                    <div className="col-md-6 mb-4">
                        <h2 className="mb-4">Billing & Shipping</h2>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label
                                        htmlFor="firstName"
                                        className="form-label"
                                    >
                                        First Name *
                                    </label>
                                    <InputField
                                        type="text"
                                        placeholder="Enter first name"
                                        value={billingDetails.firstName}
                                        autoComplete="first Name"
                                        name="firstName"
                                        onChangeMethod={(e) =>
                                            setBillingDetails((prev) => ({
                                                ...prev,
                                                firstName: e.target.value,
                                            }))
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
                                        style={{ color: "red" }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        htmlFor="lastName"
                                        className="form-label"
                                    >
                                        Last Name *
                                    </label>
                                    <InputField
                                        type="text"
                                        placeholder="Enter last name"
                                        value={billingDetails.lastName}
                                        onChangeMethod={(e) =>
                                            setBillingDetails({
                                                ...billingDetails,
                                                lastName: e.target.value,
                                            })
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
                                        style={{ color: "red" }}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label
                                        htmlFor="phone"
                                        className="form-label"
                                    >
                                        Phone *
                                    </label>
                                    <InputField
                                        type="text"
                                        placeholder="Enter phone number"
                                        value={billingDetails.phone}
                                        onChangeMethod={(e) =>
                                            setBillingDetails({
                                                ...billingDetails,
                                                phone: e.target.value,
                                            })
                                        }
                                    />
                                    <InputError
                                        message={
                                            formError &&
                                            formError?.["billingDetails.phone"]
                                        }
                                        className="mt-2"
                                        style={{ color: "red" }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email Address *
                                    </label>
                                    <InputField
                                        type="email"
                                        placeholder="Enter email address"
                                        value={billingDetails.email}
                                        onChangeMethod={(e) =>
                                            setBillingDetails({
                                                ...billingDetails,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                    <InputError
                                        message={
                                            formError &&
                                            formError?.["billingDetails.email"]
                                        }
                                        className="mt-2"
                                        style={{ color: "red" }}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right Form */}
                    <div className="col-md-6 mb-4">
                        <h2 className="mb-4">Additional Information</h2>
                        <div>
                            <label htmlFor="orderNotes" className="form-label">
                                Order Notes (Optional)
                            </label>
                            <InputField
                                type="text"
                                placeholder="Notes about your order"
                                value={billingDetails.note}
                                onChangeMethod={(e) =>
                                    setBillingDetails({
                                        ...billingDetails,
                                        note: e.target.value,
                                    })
                                }
                            />
                            <InputError
                                message={
                                    formError &&
                                    formError?.["billingDetails.notes"]
                                }
                                className="mt-2"
                                style={{ color: "red" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Order Summary Section */}

            <section className="container mt-5 px-4">
                <h3 className="mb-4 text-center">Your Order</h3>

                {/* Map cart items */}
                {cartItems.map((item, index) => (
                    <div
                        key={index}
                        className="row align-items-center border-bottom py-2"
                    >
                        <div className="col-6">
                            {item.name} - {item.description} × {item.quantity}
                        </div>
                        <div className="col-6 text-end">
                            £{item.price}{" "}
                            {/* Adjusting price to 2 decimal places */}
                        </div>
                    </div>
                ))}

                {/* Subtotal Calculation */}
                <div className="row align-items-center border-bottom py-2">
                    <div className="col-6">Subtotal</div>
                    <div className="col-6 text-end">
                        £
                        {cartItems
                            .reduce(
                                (acc, item) => acc + item.price * item.quantity,
                                0
                            )
                            .toFixed(2)}
                    </div>
                </div>

                {/* Shipping Options */}
                <div className="row align-items-center border-bottom py-2">
                    <div className="col-12">
                        <p>Shipping</p>
                        <div className="col-6 text-en">
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                    name="pickup"
                                    value="yes"
                                />
                                <label
                                    className="label-auth font-12"
                                    htmlFor="exampleCheck1"
                                >
                                    Delivery and delivery fee only applicable to
                                    our Suya Spice product.
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="exampleCheck2"
                                    name="pickup"
                                    value="no"
                                />
                                <label
                                    className="label-auth whitespace-nowrap font-12 text-left"
                                    htmlFor="exampleCheck2"
                                >
                                    All orders are to be collected in-store at
                                    303 Chester road Manchester M15 4EY.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Calculation */}
                <div className="row align-items-center py-2">
                    <div className="col-6">
                        <strong>Total</strong>
                    </div>
                    <div className="col-6 text-end">
                        <strong>£{calculateTotal()}</strong>
                    </div>
                </div>
            </section>

            <div className="p-3 bg-inf">
                <h3 className="text-center">Card Payment</h3>
                <hr />
            </div>
            {/* Place Order Button */}
            <div className="p-5 bg-light-grey">
                <h2>Checkout</h2>
                <p>Total: £{calculateTotal()}</p>
                <div id="card-container"></div>
                <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="btn btn-danger text-white px-3"
                >
                    {loading ? "Processing..." : "Pay Now"}
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default Checkout;
