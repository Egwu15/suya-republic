import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./checkout.css";
import InputField from "@/Components/InputField";
import { router } from "@inertiajs/react";
import useCartStore from "@/store/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = ({ squareAppId, squareLocationId }) => {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(false);


    const { user, setUser, cartItems, clearCart, calculateTotal } =
        useCartStore();
    useEffect(() => {
        const guestUser = JSON.parse(localStorage.getItem("guestUser"));
        if (guestUser) {
            setUser(guestUser);
        }
    }, [setUser]);

    useEffect(() => {
        const checkUserAndInitializePayment = async () => {
            // Check if the user is logged in
            if (!user) {
                console.log(
                    "User is not logged in. Redirecting to login page..."
                );
                toast.error("You need to log in to proceed with checkout.");
                router.visit("/login"); // Navigate to login page
                // window.location.href = "/login"; // Navigate to the menu page

                return;
            }

            // Log the user's details
            console.log("Logged in user details:", user);

            // Initialize payment if the user is logged in
            const payments = window.Square.payments(
                squareAppId,
                squareLocationId
            );
            console.log("Initializing checkout...");

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
                alert("Payment failed. Client Side.");
                setLoading(false);
                return;
            }

            console.log("token", cartItems);

            router.post("/process-payment", {
                nonce: token,
                totalCents: calculateTotal() * 100,
                products: cartItems,
            });

            // Show success notification
            toast.success("Order is placed successfully!");

            // Clear the cart
            clearCart();
        } catch (error) {
            console.error(error);
            toast.error("Payment failed. ServerSide");
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
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label
                                        htmlFor="streetAddress"
                                        className="form-label"
                                    >
                                        Street Address *
                                    </label>
                                    <InputField
                                        type="text"
                                        placeholder="House number and street name"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label
                                        htmlFor="apartment"
                                        className="form-label"
                                    >
                                        Apartment, Suite, Unit (Optional)
                                    </label>
                                    <InputField
                                        type="text"
                                        placeholder="Enter apartment or unit"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        htmlFor="city"
                                        className="form-label"
                                    >
                                        Town / City *
                                    </label>
                                    <InputField
                                        type="text"
                                        placeholder="Enter city"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        htmlFor="state"
                                        className="form-label"
                                    >
                                        State / County *
                                    </label>
                                    <InputField
                                        type="text"
                                        placeholder="Enter state"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        htmlFor="postcode"
                                        className="form-label"
                                    >
                                        Postcode / ZIP *
                                    </label>
                                    <InputField
                                        type="text"
                                        placeholder="Enter postcode"
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
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email Address *
                                    </label>
                                    <InputField
                                        type="email"
                                        placeholder="Enter email address"
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
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Order Summary Section */}
            <section className="container mt-5 px-4">
                <h3 className="mb-4 text-center">Your Order</h3>
                <div className="row align-items-center border-bottom py-2">
                    <div className="col-6">Chicken Suya - Spicy × 1</div>
                    <div className="col-6 text-end">£9.00</div>
                </div>
                <div className="row align-items-center border-bottom py-2">
                    <div className="col-6">Subtotal</div>
                    <div className="col-6 text-end">£9.00</div>
                </div>
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
                                    // onChange={() => handlePickup()}
                                />
                                <label
                                    className="label-auth font-12 "
                                    htmlFor="exampleCheck1"
                                >
                                    Delivery and delivery fee only applicable to
                                    our Suya Spice product.
                                </label>
                            </div>
                            <div className="form-check ">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="exampleCheck2"
                                    name="pickup"
                                    value="no"
                                    // onChange={() => setIsPickup(false)}
                                />
                                <label
                                    className="label-auth whitespace-nowrap font-12 text-left"
                                    htmlFor="exampleCheck2"
                                >
                                    All orders are to be collected in-store at
                                    303 Chester road Manchester M15 4EY
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-2">
                    <div className="col-6">
                        <strong>Total</strong>
                    </div>
                    <div className="col-6 text-end">
                        <strong>£9.00</strong>
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
                <p>Total: ${calculateTotal()}</p>
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
