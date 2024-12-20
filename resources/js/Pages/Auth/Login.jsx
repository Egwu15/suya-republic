import React, { useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import useStore from "@/store/Store"; // Import the Zustand store
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "@inertiajs/react";
import "react-toastify/dist/ReactToastify.css";
import InputError from "@/Components/InputError";
import useCartStore from "@/store/Store";

const Login = () => {
    const { cartItems } = useCartStore();
    const [isGuest, setIsGuest] = useState(false); // Toggle between forms
    const [guestData, setGuestData] = useState({ email: "", name: "" }); // Guest form data
    const { addGuest, saveGuestToLocalStorage, setGuest } = useStore(); // Zustand store action
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
            onSuccess: () => {
                router.visit(route("menu"));
            },
        });
    };

    const handleGuestSubmit = (e) => {
        e.preventDefault();

        if (!guestData.name || !guestData.email) {
            toast.error("Please fill out all fields.");
            // alert("Please fill out all fields.");
            return;
        }

        setGuest(guestData); // Save guest user to Zustand store
        saveGuestToLocalStorage(); // Persist user to localStorage
        // toast.success("Guest login successful!");
        // router.visit(route("checkout"));
        window.location.href = "/checkout";
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 custom-bg">
            <ToastContainer />
            <div
                className="card p-4 shadow"
                style={{ maxWidth: "400px", width: "100%" }}
            >
                <div className="text-center mb-4">
                    <img
                        src={logo}
                        alt=""
                        className="home-logo"
                        style={{ height: "50px" }}
                    />
                    <h2 className="h5">{isGuest ? "Guest Login" : "Log in"}</h2>
                </div>

                {!isGuest ? (
                    <form onSubmit={submit}>
                        {/* Regular Login Form */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                value={data.email}
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                                style={{ color: "red" }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
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
                                    type="checkbox"
                                    value={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.value)
                                    }
                                    id="rememberMe"
                                    className="form-check-input"
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className="form-check-label"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <Link
                                href="/forgot-password"
                                className="text-decoration-none"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <button type="submit" className="btn btn-dark w-100">
                            LOG IN
                        </button>
                        {cartItems.length ? (
                            <div className="my-2 d-flex justify-content-center py-2 proceed-btn">
                                <button
                                    type="button"
                                    onClick={() => setIsGuest(true)}
                                    className="btn btn-link text-decoration-none text-dark text-center"
                                >
                                    Continue as Guest
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </form>
                ) : (
                    <form onSubmit={handleGuestSubmit}>
                        {/* Guest Login Form */}

                        <div className="mb-3">
                            <label htmlFor="guestEmail" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="guestEmail"
                                className="form-control"
                                placeholder="Enter your email"
                                value={guestData.email}
                                onChange={(e) =>
                                    setGuestData({
                                        ...guestData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="guestName" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                id="guestName"
                                className="form-control"
                                placeholder="Enter your name"
                                value={guestData.name}
                                autoComplete="name"
                                onChange={(e) =>
                                    setGuestData({
                                        ...guestData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <button type="submit" className="btn btn-dark w-100">
                            Submit as Guest
                        </button>
                        <div className="my-2 d-flex justify-content-end ">
                            <button
                                type="button"
                                onClick={() => setIsGuest(false)}
                                className="btn btn-link text-decoration-none  proceed-user "
                            >
                                Login as a User
                            </button>
                        </div>
                    </form>
                )}

                <div className="text-center my-3">
                    <span>New to Suya ? </span>
                    <Link href="/signup" className="text-decoration-none">
                        Create an account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
