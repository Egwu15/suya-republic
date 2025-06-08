import React, { useState } from "react";
import { Link, router, useForm } from "@inertiajs/react";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import useStore from "@/store/Store";
import useCartStore from "@/store/Store";
import InputError from "@/Components/InputError";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";
const Login = () => {
    const { cartItems } = useCartStore();
    const [showPassword, setShowPassword] = useState(false);
    const { setGuest, saveGuestToLocalStorage } = useStore();

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
            // onSuccess: () => router.visit("/checkout"),
            onSuccess: () => {
                setTimeout(() => {
                    router.visit("/checkout");
                }, 100); // 100-200ms delay can help prevent visual glitches
            },
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
        <section
            className="container-fluid"
            // style={{ background: "#000", height: "100vh" }}
        >
            <ToastContainer />
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
                <div className="col-12 order-2 order-md-1 col-md-6 col-lg-6 d-flex align-items-center">
                    <div className="bg-white container p-4">
                        <div className="col-md-8 mx-auto ">
                            <div className="d-md-flex  d-none mb-4">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="img-fluid"
                                    style={{ height: "50px" }}
                                />
                            </div>
                            <h4 className="mt-2 fw-bold mb-4">
                                Login to your account
                            </h4>

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
                                        placeholder="Enter your email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
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
                                            className="form-control"
                                            placeholder="Enter your password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            required
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
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                        style={{ color: "red" }}
                                    />
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="rememberMe"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="rememberMe"
                                        >
                                            Remember Me
                                        </label>
                                    </div>
                                    <Link
                                        href="/forgot-password"
                                        className="text-decoration-none small"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    className="btn text-white bg-red w-100 mb-3 login-btn"
                                    disabled={processing}
                                >
                                    LOG IN
                                </button>
                            </form>

                            {cartItems.length > 0 && (
                                <div className="d-flex justify-content-center my-2">
                                    <button
                                        type="button"
                                        disabled={processing}
                                        onClick={handleGuestSubmit}
                                        className="btn btn-link login-btn text-decoration-none text-red border w-100"
                                    >
                                        Continue as Guest
                                    </button>
                                </div>
                            )}

                            <div className="text-center mt-3">
                                <span className="me-1">New to Suya?</span>
                                <Link
                                    href="/signup"
                                    className="text-decoration-none text-red fw-bold"
                                >
                                    Create an account
                                </Link>
                            </div>
                        </div>{" "}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
