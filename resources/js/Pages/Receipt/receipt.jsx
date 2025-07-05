import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./receipt.css";
import InputField from "@/Components/InputField";
import { Link, router, usePage } from "@inertiajs/react";
import useCartStore from "@/store/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import success from "../../../assets/img/icons/image.png";
import {
    CardElement,
    Elements,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Button from "@/Components/Button";

const Receipt = () => {
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

    return (
        <div>
            <Navbar />

            <section
                className="hero-bg d-flex align-items-center "
                style={{
                    height: "400px",
                }}
            >
                {/* <div className="container  text-center">
                    <Link href="/cart" className="text-decoration-none">
                        <button className="small-btn">
                            <span className="material-symbols-outlined ">
                                arrow_back
                            </span>
                            Back
                        </button>
                    </Link>
                </div> */}
            </section>
            <ToastContainer />

            {/* Notice Section */}

            <section className="menu-section position-relative">
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
                                <div
                                    style={{
                                        maxWidth: "600px",
                                        margin: "0 auto",
                                        padding: "40px 20px",
                                        fontFamily:
                                            "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                        textAlign: "center",
                                        backgroundColor: "#fff",
                                        borderRadius: "8px",
                                        boxShadow:
                                            "0 0 10px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    <div>
                                        <img
                                            src={success}
                                            alt="success"
                                            width={80}
                                            className="img-fluid"
                                        />{" "}
                                    </div>
                                    <h1
                                        style={{
                                            fontSize: "32px",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        Thank you for your purchase!
                                    </h1>
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            color: "#555",
                                            marginBottom: "30px",
                                        }}
                                    >
                                        Your order will be processed within 15
                                        minutes during work hours immediately
                                        after confirmation. We will notify you
                                        once your order has been prepared.
                                    </p>

                                    <div
                                        style={{
                                            textAlign: "left",
                                            marginBottom: "30px",
                                            lineHeight: "1.8",
                                        }}
                                    >
                                        <h3>Billing Information:</h3>
                                        <p>
                                            <strong>Name:</strong> Jane Smith
                                        </p>
                                        <p>
                                            <strong>Address:</strong> 456 Oak St
                                            #3b, San Francisco, CA 94102, United
                                            States
                                        </p>
                                        <p>
                                            <strong>Phone:</strong> +1 (415)
                                            555-1234
                                        </p>
                                        <p>
                                            <strong>Email:</strong>{" "}
                                            jane.smith@email.com
                                        </p>
                                        <p>
                                            <strong>Order:</strong> #ORD-789654
                                        </p>
                                        <p>
                                            <strong>Total Amount:</strong>{" "}
                                            $249.99
                                        </p>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "15px",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Button
                                            text="Order Again"
                                            //   handleButtonClick={handleSubmit}
                                            // btnstyle={{ cursor: "pointer" }}
                                            type="button"
                                        />
                                        {/* <button
                                            style={{
                                                backgroundColor: "#FF705D",
                                                border: "none",
                                                padding: "12px 24px",
                                                borderRadius: "30px",
                                                color: "white",
                                                fontSize: "16px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Order Again{" "}
                                        </button> */}
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

export default Receipt;
