import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./receipt.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import success from "../../../assets/img/icons/image.png";

import Button from "@/Components/Button";

const Receipt = () => {
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
