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
    const [canApplePay, setCanApplePay] = useState(true);

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
        firstName: user?.first_name ?? "",
        lastName: user?.last_name ?? "",
        email: user?.email ?? "",
        phone: "",
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
                    console.log("guest", guest);
                    console.log(
                        "You need to log in to proceed. Redirecting to login page..."
                    );
                    toast.error("Please log in to proceed with checkout.");
                    window.location.href = "/login"; // Redirect to the login page
                    return;
                }

                // Log guest details for debugging
                console.log("Guest details:", guest);

                // Initialize payment using Square's payment API
                const payments = await window.Square.payments(
                    squareAppId,
                    squareLocationId
                );

                // if (!payments) {
                //     console.error("Square Payments initialization failed.");
                //     toast.error(
                //         "Unable to initialize payment. Please try again later."
                //     );
                //     return;
                // }

                const card = await payments.card();

                // if (!card) {
                //     console.error("Square Card initialization failed.");
                //     toast.error(
                //         "Unable to initialize card payment. Please try again later."
                //     );
                //     return;
                // }

                // Attach the card component to the DOM
                await card.attach("#card-container");
                setCard(card);

                console.log("Card component attached successfully.");
            } catch (error) {
                console.error("Error during payment initialization:", error);
                toast.error(
                    "An error occurred while initializing payment. Please try again."
                );
            }
        };

        initializeGooglePay();
        checkUserAndInitializePayment();
    }, []);

    const initializeGooglePay = async () => {
        const createGooglePayRequest = (calculateTotal) => ({
            countryCode: "GB",
            currencyCode: "GBP",
            total: {
                amount: calculateTotal().toString(),
                label: "Total",
            },
        });

        try {
            const payments = await window.Square.payments(
                squareAppId,
                squareLocationId
            );

            // Create a payment request
            const paymentRequest = payments.paymentRequest(
                createGooglePayRequest(calculateTotal)
            );

            // Initialize Google Pay
            const googlePay = await payments.googlePay(paymentRequest);

            // Check if Google Pay is available

            // Attach Google Pay button to your DOM
            await googlePay.attach("#google-pay-button");

            // Add a click event listener for the Google Pay button
            document
                .querySelector("#google-pay-button")
                .addEventListener("click", async () => {
                    handlePaymentSubmission(
                        () => googlePay.tokenize(),
                        "Google Pay"
                    );
                });
        } catch (error) {
            console.error("Error initializing Google Pay:", error);
            toast.error("Failed to initialize Google Pay.");
        }
    };

    const handlePaymentSubmission = async (tokenizeFn, paymentType) => {
        setLoading(true);

        try {
            const tokenResult = await tokenizeFn();

            if (tokenResult.errors) {
                console.error(tokenResult.errors);
                toast.error(`${paymentType} payment failed to process.`);
                return;
            }

            console.log("token", cartItems);

            router.post(
                "/process-payment",
                {
                    nonce: tokenResult.token,
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

    const handlePayment = async () => {
        handlePaymentSubmission(() => card.tokenize(), "Card");
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
                        <h2 className="mb-4">Billing </h2>
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
                                {/* <div className="col-md-12">
                                    <label
                                        htmlFor="address"
                                        className="form-label"
                                    >
                                        Address *
                                    </label>
                                    <InputField
                                        type="text"
                                        placeholder="Enter address"
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
                                            formError?.[
                                                "billingDetails.address"
                                            ]
                                        }
                                        className="mt-2"
                                        style={{ color: "red" }}
                                    />
                                </div> */}
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
                {/* <div className="row align-items-center border-bottom py-2">
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
                </div> */}

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
                <div className="d-flex align-items-center">
                    <button
                        onClick={handlePayment}
                        disabled={loading}
                        className="btn btn-danger text-white px-3 mx-3"
                    >
                        {loading ? "Processing..." : "Pay Now"}
                    </button>
                    <form id="payment-form ">
                        <div id="google-pay-button"></div>
                        <div id="card-container"></div>
                        <button id="card-button" type="button">
                            {calculateTotal()}
                        </button>
                    </form>
                </div>
                <div id="payment-status-container"></div>
            </div>

            <Footer />
        </div>
    );
};

export default Checkout;
