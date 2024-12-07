import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import useStore from "@/store/Store"; // Import the Zustand store

const Login = () => {
    const [isGuest, setIsGuest] = useState(false); // Toggle between forms
    const [guestData, setGuestData] = useState({ email: "", name: "" }); // Guest form data
    const { addGuest } = useStore(); // Zustand store action
    const { visit } = usePage(); // Inertia's navigation method

    const handleGuestSubmit = (e) => {
        e.preventDefault();
        if (!guestData.name || !guestData.email) {
            alert("Please fill out all fields.");
            return;
        }
        setUser(guestData); // Set user in the store
        saveUserToLocalStorage(); // Persist to localStorage
        alert("Guest login successful!");
        visit("/"); // Navigate to the home page
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 custom-bg">
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
                    <form>
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
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <div className="input-group">
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                >
                                    <i className="bi bi-eye"></i>
                                </button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <input
                                    type="checkbox"
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
                            <a href="#" className="text-decoration-none">
                                Forgot Password?
                            </a>
                        </div>
                        <button type="submit" className="btn btn-dark w-100">
                            LOG IN
                        </button>
                        <div className="my-2 d-flex justify-content-center py-2 proceed-btn">
                            <button
                                type="button"
                                onClick={() => setIsGuest(true)}
                                className="btn btn-link text-decoration-none text-dark text-center"
                            >
                                Proceed as Guest
                            </button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleGuestSubmit}>
                        {/* Guest Login Form */}
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
                                onChange={(e) =>
                                    setGuestData({
                                        ...guestData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
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
                    <span>New to Nando’s? </span>
                    <Link href="/signup" className="text-decoration-none">
                        Create an account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
