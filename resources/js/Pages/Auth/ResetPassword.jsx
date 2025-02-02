import React, { useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import useStore from "@/store/Store"; // Import the Zustand store
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "@inertiajs/react";
import "react-toastify/dist/ReactToastify.css";
import InputError from "@/Components/InputError";
import useCartStore from "@/store/Store";

const ResetPassword = () => {
    const { cartItems } = useCartStore();

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

        // if (!guestData.name || !guestData.email) {
        //     toast.error("Please fill out all fields.");
        //     // alert("Please fill out all fields.");
        //     return;
        // }

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
                    <h2 className="h5">{"Reset Password"}</h2>
                </div>

                {/* {!isGuest ? ( */}
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
                            onChange={(e) => setData("email", e.target.value)}
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
                                        showPassword ? "bi-eye-slash" : "bi-eye"
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

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Confirm Password
                        </label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="form-control"
                                placeholder="Confirm your password"
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
                                        showPassword ? "bi-eye-slash" : "bi-eye"
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

                    <button type="submit" className="btn btn-dark w-100">
                        RESET PASSWORD
                    </button>
                </form>

                <div className="text-center my-3">
                    <Link href="/signup" className="text-decoration-none">
                        Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
