import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import "./auth.css";
import useCartStore from "@/store/Store";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { cartItems } = useCartStore();

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password"),
        });
    };
    const handleGuestSubmit = () => {
        setGuest({
            email: "guest-email",
            name: "guest-name",
        });
        saveGuestToLocalStorage();
        window.location.href = "/checkout";
    };
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="row" style={{ height: "100vh" }}>
                {/* RIGHT SIDE - SHOWS FIRST ON MOBILE */}
                <div className="col-12 background-img order-1 order-md-2 col-md-6 col-lg-6 px-2">
                    <div className="">
                        <div className="d-md-none  d-flex mb-4 px-5 ">
                            <img
                                src={logo}
                                alt="Logo"
                                className="img-fluid"
                                style={{ height: "50px" }}
                            />
                        </div>
                        <div className="text-center mb-4">
                            <h2 className="alpha-text text-warning mb-3">
                                The pure taste of
                            </h2>
                            <h2 className="gro text-white">Naija</h2>
                            <p className="poppins-heading text-center px-3 mt-3">
                                We Cure your Nostalgia with our Tasty Suya. Get
                                you Spicy Suya anywhere, anytime within the UK.
                            </p>
                        </div>
                    </div>
                </div>
                {/* LOGIN FORM - SHOWS SECOND ON MOBILE */}
                <div className="bg-white col-12 order-2 order-md-1 col-md-6 col-lg-6 d-flex align-items-center">
                    <div className=" container p-4">
                        <div className="col-md-8 mx-auto ">
                            <div className="d-md-flex  d-none mb-4">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="img-fluid"
                                    style={{ height: "50px" }}
                                />
                            </div>
                            <h2 className="h4">Create an account</h2>

                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="Enter your email"
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                        style={{ color: "red" }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            id="password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            className="form-control"
                                            placeholder="Enter your password"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <i
                                                className={`bi ${
                                                    showPassword
                                                        ? "bi-eye-slash"
                                                        : "bi-eye"
                                                }`}
                                            ></i>
                                        </button>
                                    </div>
                                    {/* <div className="form-text mt-2">
                            Password needs to have:
                            <ul className="mb-0">
                                <li>At least 8 characters</li>
                                <li>A lowercase letter</li>
                                <li>An uppercase letter</li>
                                <li>A number</li>
                            </ul>
                        </div> */}
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                        style={{ color: "red" }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="firstName"
                                        className="form-label"
                                    >
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="form-control"
                                        placeholder="Enter your first name"
                                        value={data.first_name}
                                        onChange={(e) =>
                                            setData(
                                                "first_name",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.first_name}
                                        className="mt-2"
                                        style={{ color: "red" }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="lastName"
                                        className="form-label"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="form-control"
                                        placeholder="Enter your last name"
                                        value={data.last_name}
                                        onChange={(e) =>
                                            setData("last_name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.last_name}
                                        className="mt-2"
                                        style={{ color: "red" }}
                                    />
                                </div>
                                <div className="form-check mb-3">
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        className="form-check-input"
                                    />
                                    <label
                                        htmlFor="newsletter"
                                        className="form-check-label"
                                    >
                                        Want extra hot news? Tick the box
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn bg-red text-white w-100 mb-3 py-3"
                                    disabled={processing}
                                >
                                    CREATE YOUR ACCOUNT
                                </button>
                            </form>

                            <p className="text-center text-muted small">
                                By signing up I confirm I am aged 16 years or
                                over. For more information, you can consult our{" "}
                                <a href="#" className="text-decoration-none">
                                    Privacy Policy
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-decoration-none">
                                    Terms and Conditions
                                </a>
                                .
                            </p>
                            {cartItems.length > 0 && (
                                <div className="d-flex justify-content-center my-2">
                                    <button
                                        type="button"
                                        onClick={handleGuestSubmit}
                                        className="btn btn-link text-decoration-none text-red border w-100 py-3"
                                    >
                                        Continue as Guest
                                    </button>
                                </div>
                            )}
                            <p className="text-center">
                                Already have one?{" "}
                                <Link
                                    href={"/login"}
                                    className="mx-2 text-red fw-bold  text-decoration-none w-100"
                                >
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
