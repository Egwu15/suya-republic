import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./checkout.css";
import Button from "../../components/Button";
import SelectComponent from "../../components/Dropdown";
import InputField from "@/Components/InputField";

// import CreditCardInput from "react-credit-card-input";

const Checkout = ({ data }) => {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    const [productQuantity, setProductQuantity] = useState("");

    const quantityOptions = [
        { value: "1", name: "1" },
        { value: "2", name: "2" },
        { value: "3", name: "3" },
    ];

    const optionQuantity = quantityOptions?.map((x) => ({
        label: x.name,
        value: x.value,
    }));

    const colorStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: "1px dotted black",
            color: state.isSelected ? "black" : "black",
            background: "white",
        }),

        menu: (provided, state) => ({
            ...provided,
            // borderBottom: '1px dotted pink',
            // color: state.isSelected ? 'red' : 'blue',
            // padding: 20,
            background: "white",
        }),

        singleValue: () => {
            const color = "black";

            return { color };
        },
    };

    return (
        <div>
            <Navbar />
            <section className="our-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="mb-2">CHECKOUT</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" style={{ marginTop: "70px" }}>
                <div className="checkout-notice">
                    <p style={{ color: "#333333" }}>
                        All orders are to be collected in-store at 303 Chester
                        road Manchester M15 4EY
                    </p>
                </div>

                <div className="col-md-4" style={{ margin: "0 auto" }}>
                    <Button
                        text="BUY WITH G-PAY"
                        // handleButtonClick={() => {
                        //   navigate("/product/1");
                        // }}
                        type="button"
                        btnstyle={{
                            background: "black",
                            color: "white",
                            margin: "20px 0",
                            // fontFamily: "Euclid Circular B",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "24px",
                        }}
                    />
                </div>
                <h1 className="mb-2 text-center" style={{ color: "grey" }}>
                    OR
                </h1>
                <div className="checkout-forms row">
                    <div className="form-left col-md-6">
                        <h2 className="mb-5">BILLING & SHIPPING</h2>
                        <div className="checkout-forms row">
                            <div className="col-md-6">
                                <label htmlFor="email" className="label-auth">
                                    First name *
                                </label>
                                <InputField
                                    type="text"
                                    placeholder="Enter first name"
                                    // onChangeMethod={(e) => setVerificationCode(e.target.value)}
                                />
                            </div>
                            {/* <div className="mb-3 col-md-6">
                                <label
                                    htmlFor="firstName"
                                    className="form-label"
                                >
                                    First name *{" "}
                                </label>
                                <input
                                    type="email"
                                    id="firstName"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                            </div> */}
                            <div className="col-md-6">
                                <label htmlFor="email" className="label-auth">
                                    Last name *
                                </label>
                                <InputField
                                    type="text"
                                    placeholder="Enter last name"
                                    // onChangeMethod={(e) => setVerificationCode(e.target.value)}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="">
                            <label htmlFor="email" className="label-auth">
                                Country / Region *
                            </label>
                            <br />
                            <label htmlFor="email" className="label-auth">
                                <b>United Kingdom (UK)</b>
                            </label>
                            <br />
                            <label htmlFor="email" className="label-auth">
                                Street address *
                            </label>
                            <InputField
                                type="text"
                                placeholder="Enter house no and street name"
                                // onChangeMethod={(e) => setVerificationCode(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="">
                            <label htmlFor="email" className="label-auth">
                                Apartment, suite, unit, etc. (optional) *
                            </label>

                            <InputField
                                type="text"
                                placeholder="Enter apartment, suite, unit, etc. (optional)"
                                // onChangeMethod={(e) => setVerificationCode(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="">
                            <label htmlFor="email" className="label-auth">
                                Town / City *
                            </label>

                            <InputField
                                type="text"
                                placeholder="Enter Town / City"
                                // onChangeMethod={(e) => setVerificationCode(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="">
                            <label htmlFor="email" className="label-auth">
                                State / County *
                            </label>

                            <InputField
                                type="text"
                                placeholder="Enter State / County"
                                // onChangeMethod={(e) => setVerificationCode(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="">
                            <label htmlFor="email" className="label-auth">
                                Postcode / ZIP *
                            </label>

                            <InputField
                                type="text"
                                placeholder="Enter postcode / ZIP"
                                // onChangeMethod={(e) => setVerificationCode(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="">
                            <label htmlFor="email" className="label-auth">
                                Phone *
                            </label>

                            <InputField
                                type="text"
                                placeholder="Enter phone"
                                // onChangeMethod={(e) => setVerificationCode(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="">
                            <label htmlFor="email" className="label-auth">
                                Email address *
                            </label>

                            <InputField
                                type="text"
                                placeholder="Enter email address"
                                // onChangeMethod={(e) => setVerificationCode(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-right col-md-6">
                        <h2 className="mb-5">ADDITIONAL INFORMATION</h2>
                        <div className="">
                            <label htmlFor="email" className="label-auth">
                                Order notes (optional)
                            </label>

                            <InputField
                                type="text"
                                placeholder="Notes about your order"
                                // onChangeMethod={(e) => setVerificationCode(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="cart-items container mt-5">
                <h3
                    className="mt-3 mb-5 mt-5"
                    // style={{ color: "#b7903c" }}
                >
                    YOUR ORDER
                </h3>

                <div className="row" style={{ alignItems: "center" }}>
                    <h6 className="col-md-3" style={{ color: "#b7903c" }}>
                        PRODUCT
                    </h6>
                    <h6 className="col-md-9" style={{ color: "#b7903c" }}>
                        SUBTOTAL
                    </h6>
                </div>
                <hr />
                <div className="row" style={{ alignItems: "center" }}>
                    <h6
                        className="col-md-3"
                        // style={{ color: "#b7903c" }}
                    >
                        Chicken Suya - Spicy × 1
                    </h6>
                    <p className="col-md-9">£9.00</p>
                </div>
                <hr />
                <div className="row" style={{ alignItems: "center" }}>
                    <h6
                        className="col-md-3"
                        // style={{ color: "#b7903c" }}
                    >
                        SUBTOTAL
                    </h6>
                    <p className="col-md-9">£9.50</p>
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
                        <b>£9.00</b>
                    </p>
                </div>
                <hr />
                <p className="">Credit Card</p>
                <label htmlFor="email" className="label-auth">
                    Pay securely using your credit card.
                </label>
                <div className="row">
                    {/* <div className="col-md-4">
                        <InputField
                            type="text"
                            placeholder="Enter Card number"
                            // onChangeMethod={(e) =>
                            //     setVerificationCode(e.target.value)
                            // }
                        />
                    </div>
                    <div className="col-md-4">
                        <InputField
                            type="text"
                            placeholder="MM/YY"
                            // onChangeMethod={(e) =>
                            //     setVerificationCode(e.target.value)
                            // }
                        />
                    </div>
                    <div className="col-md-4">
                        <InputField
                            type="text"
                            placeholder="CVV"
                            // onChangeMethod={(e) =>
                            //     setVerificationCode(e.target.value)
                            // }
                        />
                    </div> */}
                </div>
                {/* <CreditCardInput
                    // cardNumberInputProps={{ value: cardNumber, onChange: this.handleCardNumberChange }}
                    // cardExpiryInputProps={{ value: expiry, onChange: this.handleCardExpiryChange }}
                    // cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}
                    fieldClassName="input"
                    containerStyle={{ width: "100%" }}
                    inputStyle={{ background: "transparent", width: "400px" }}
                    fieldStyle={{
                        width: "100%",
                        border: "1px solid black",
                        background: "transparent",
                        height: "60px",
                        borderRaadius: "5px",
                    }}
                /> */}

                <hr />

                <div className="col-md-3" style={{ margin: "0 auto" }}>
                    {/* <a
                        href={"/"} // Call navigation function on click
                        type="button"
                        style={{
                            background: "red", // Set button background color (adjust if needed)
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
                        PLACE ORDER
                    </a> */}
                </div>
                <div className="checkout-notice mt-5 mb-5">
                    <p style={{ color: "#333333" }}>
                        All orders are to be collected in-store at 303 Chester
                        road Manchester M15 4EY
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Checkout;
