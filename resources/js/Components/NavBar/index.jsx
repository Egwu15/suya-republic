import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import "./index.css";
import CartIcon from "@/Pages/Cart/CartIcon";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu
    const [user, setUser] = useState(null);
    const [cartItemCount, setCartItemCount] = useState("");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };

    const logOut = () => {
        navigate.push("/");
        window.location.reload();
    };

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItemCount(items.length);
    }, [cartItemCount]);

    return (
        <div className="navbar-section">
            <div className="container-fluid px-0">
                <nav className="navb">
                    <Link className="navbar-brand d-flex mr-auto" href="/">
                        <img src={logo} alt="Logo" className="home-logo" />
                    </Link>

                    {/* Hamburger menu toggle button */}
                    <button className="navbar-togg" onClick={toggleMenu}>
                        <i class="bi bi-list"></i>
                    </button>

                    {/* Menu */}
                    <div
                        className={`menu-links ${isMenuOpen ? "show" : "hide"}`}
                    >
                        {user === null ? (
                            <ul className="ml-auto ">
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
                                        <CartIcon
                                            cartItemCount={cartItemCount}
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/order-online"
                                        className="blue-btn-nav nav-test text-white"
                                    >
                                        ORDER ONLINE
                                    </Link>
                                    <Link
                                        href="/signup"
                                        className="black-btn-nav mx-1 text-white"
                                    >
                                        Sign In / Sign Up
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="ml-auto justify-content-end align-items-center">
                                {/* User menu logic */}
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
