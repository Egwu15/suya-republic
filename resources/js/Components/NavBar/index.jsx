import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import CartIcon from "@/Pages/Cart/CartIcon";
import useCartStore from "@/store/Store"; // Assuming you're using Zustand or another store library
import "./index.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, setUser, clearUser } = useCartStore(); // Manage user state in the store
    // const user = useCartStore((state) => state.user);
    // const clearUser = useCartStore((state) => state.clearUser);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSignOut = () => {
        clearUser(); // Clear user details from the store
        localStorage.removeItem("guestUser"); // Clear localStorage if used
    };
    // const handleLogout = () => {
    //     clearUser(); // Clear the user from the store
    //     localStorage.removeItem("guestUser"); // Clear from localStorage
    //     alert("You have logged out.");
    // };
    useEffect(() => {
        // Check if a guest user exists in localStorage or the store
        const guestUser = JSON.parse(localStorage.getItem("guestUser"));
        if (guestUser) {
            setUser(guestUser);
        }
    }, [setUser]);

    return (
        <div className="navbar-section">
            <div className="container-fluid px-0">
                <nav className="navb">
                    {/* Logo */}
                    <Link className="navbar-brand d-flex mr-auto" href="/">
                        <img src={logo} alt="Logo" className="home-logo" />
                    </Link>

                    {/* Hamburger menu toggle button */}
                    <button className="navbar-togg" onClick={toggleMenu}>
                        <i className="bi bi-list"></i>
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`menu-links ${isMenuOpen ? "show" : "hide"}`}
                    >
                        <ul className="ml-auto">
                            <li className="notify">
                                <Link
                                    href="/"
                                    className="nav-test text-dark font-bold"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="notify">
                                <Link
                                    href="/menu"
                                    className="nav-test text-dark font-bold"
                                >
                                    OUR MENU
                                </Link>
                            </li>
                            <li className="notify">
                                <Link
                                    href="/about"
                                    className="nav-test text-dark font-bold"
                                >
                                    OUR BRAND
                                </Link>
                            </li>
                            <li className="notify">
                                <Link
                                    href="/contact"
                                    className="nav-test text-dark font-bold"
                                >
                                    TALK TO US
                                </Link>
                            </li>
                            <li className="notify">
                                <Link
                                    href="/cart"
                                    className="nav-test text-dark font-bold"
                                >
                                    <CartIcon />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/order-online"
                                    className="blue-btn-nav nav-test text-white"
                                >
                                    ORDER ONLINE
                                </Link>
                            </li>
                            <li>
                                {user ? (
                                    <button
                                        onClick={handleSignOut}
                                        className="black-btn-nav mx-1 text-white"
                                    >
                                        Sign Out
                                    </button>
                                ) : (
                                    <Link
                                        href="/login"
                                        className="black-btn-nav mx-1 text-white"
                                    >
                                        Sign In
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
