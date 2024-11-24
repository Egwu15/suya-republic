import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./cart.css";
import lambSuya from "../../../assets/img/suya/Lamb-Suya-3.jpg";
import { COLOR_BLACK, COLOR_RED } from "@/utils/constant";

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [productQuantity, setProductQuantity] = useState(1); // Initialize with 1

    const handleIncreaseQuantity = () => {
        setProductQuantity((prev) => prev + 1); // Increment quantity
    };

    const handleDecreaseQuantity = () => {
        if (productQuantity > 1) {
            setProductQuantity((prev) => prev - 1); // Decrement quantity
        }
    };

    return (
        <div>
            <Navbar />
            <section className="our-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="mb-2">CART</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cart-table-head container mt-5">
                <div className="row">
                    <h4 className="col-md-5">PRODUCT</h4>
                    <h4 className="col-md-2">PRICE</h4>
                    <h4 className="col-md-3">QUANTITY</h4>
                    <h4 className="col-md-2">SUBTOTAL</h4>
                </div>
                <hr />
            </section>

            <section className="cart-items container mt-5">
                <div className="row" style={{ alignItems: "center" }}>
                    <h4
                        className="row col-md-5"
                        style={{ alignItems: "center" }}
                    >
                        <div
                            className="card-container-img mr-3"
                            style={{ height: "100px" }}
                        >
                            <img
                                src={lambSuya}
                                alt=""
                                className="img-fluid"
                                loading="lazy"
                                style={{ height: "100%" }}
                            />
                        </div>
                        <h6 className="" style={{ color: "#b7903c" }}>
                            LAMB SUYA
                        </h6>
                    </h4>
                    <p className="col-md-2">£9.50</p>
                    <h4 className="col-md-3">
                        <div className="quantity-controls d-flex align-items-center">
                            <button
                                onClick={handleDecreaseQuantity}
                                style={{
                                    border: "1px solid #ccc",
                                    background: "#f8f9fa",
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
                                {productQuantity}
                            </span>
                            <button
                                onClick={handleIncreaseQuantity}
                                style={{
                                    border: "1px solid #ccc",
                                    background: "#f8f9fa",
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                }}
                            >
                                +
                            </button>
                        </div>
                    </h4>
                    <p className="col-md-2">
                        £{(9.5 * productQuantity).toFixed(2)}
                    </p>
                </div>
                <hr />

                <div className="col-md-4" style={{ margin: "0 auto" }}>
                    <button
                        style={{
                            background: COLOR_RED,
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
                        UPDATE CART
                    </button>
                </div>
            </section>
            <section className="p-4">
                <h1
                    className="mt-3 mb-5"
                    // style={{ color: "#b7903c" }}
                >
                    CART TOTALS
                </h1>

                <div className="row" style={{ alignItems: "center" }}>
                    <h6
                        className="col-md-3"
                        // style={{ color: "#b7903c" }}
                    >
                        SUBTOTAL
                    </h6>
                    <p className="col-md-9">
                        {" "}
                        £{(9.5 * productQuantity).toFixed(2)}
                    </p>
                </div>
                <hr />
                <div className="row" style={{ alignItems: "center" }}>
                    <h6
                        className="col-md-3"
                        // style={{ color: "#b7903c" }}
                    >
                        SHIPPING
                    </h6>
                    <div className="col-md-9">
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
                                className="label-auth"
                                htmlFor="exampleCheck1"
                            >
                                Delivery and delivery fee only applicable to our
                                Suya Spice product.
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="exampleCheck2"
                                name="pickup"
                                value="no"
                                // onChange={() => setIsPickup(false)}
                            />
                            <label
                                className="label-auth"
                                htmlFor="exampleCheck2"
                            >
                                All orders are to be collected in-store at 303
                                Chester road Manchester M15 4EY
                            </label>
                        </div>
                        <p className="col-md-9">
                            Shipping options will be updated during checkout.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row" style={{ alignItems: "center" }}>
                    <h6
                        className="col-md-3"
                        // style={{ color: "#b7903c" }}
                    >
                        TOTAL
                    </h6>
                    <p className="col-md-9">
                        <b>£9.50</b>
                    </p>
                </div>
                <hr />

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
                            padding: "5px 10px",
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
            <Footer />
        </div>
    );
};

export default Cart;
