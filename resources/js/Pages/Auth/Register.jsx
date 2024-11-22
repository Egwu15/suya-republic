import { Link } from "@inertiajs/react";
import React from "react";

const Register = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div
                className="card p-4 shadow"
                style={{ maxWidth: "400px", width: "100%" }}
            >
                <div className="text-center mb-4">
                    <h2 className="h4">Create an account</h2>
                    <p>
                        Already have one?{" "}
                        <Link
                            href={"/login"}
                            className="mx-2  text-decoration-none"
                        >
                            Log in
                        </Link>
                    </p>
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
                        <div className="form-text mt-2">
                            Password needs to have:
                            <ul className="mb-0">
                                <li>At least 8 characters</li>
                                <li>A lowercase letter</li>
                                <li>An uppercase letter</li>
                                <li>A number</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            placeholder="Enter your last name"
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
                            Want extra hot Nando’s news? Tick the box
                        </label>
                    </div>
                    <button type="submit" className="btn btn-dark w-100 mb-3">
                        CREATE YOUR ACCOUNT
                    </button>
                </form>
                <div className="text-center mb-3">
                    <p>Or register with:</p>
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
                <p className="text-center text-muted small">
                    By signing up I confirm I am aged 16 years or over. For more
                    information, you can consult our{" "}
                    <a href="#" className="text-decoration-none">
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-decoration-none">
                        Terms and Conditions
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default Register;
