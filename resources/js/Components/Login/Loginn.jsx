import React from "react";
import "./Loginn.css"; // Import CSS file for custom styling
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import { Link } from "@inertiajs/react";

const Loginn = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 custom-bg">
            <div
                className="card p-4 shadow"
                style={{ maxWidth: "400px", width: "100%" }}
            >
                <Link href={"/"}>Home</Link>

                <div className="text-center mb-4">
                    <img
                        src={logo}
                        alt=""
                        className="home-logo"
                        style={{ height: "50px" }}
                    />
                    <h2 className="h5">Log in</h2>
                </div>
                <form>
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
                </form>
                <div className="text-center my-3">
                    <span>New to Nando’s? </span>
                    <a href="#" className="text-decoration-none">
                        Create an account
                    </a>
                </div>
                <div className="text-center">
                    <p className="mb-2">Or log in with:</p>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-outline-secondary">
                            <i className="bi bi-facebook"></i>
                        </button>
                        <button className="btn btn-outline-secondary">
                            <i className="bi bi-google"></i>
                        </button>
                        <button className="btn btn-outline-secondary">
                            <i className="bi bi-apple"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginn;
