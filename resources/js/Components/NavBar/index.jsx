import React, { useEffect, useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import CartIcon from "@/Pages/Cart/CartIcon";
import useCartStore from "@/store/Store"; // Assuming you're using Zustand or another store library
import "./index.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { guest, setGuest, clearGuest } = useCartStore(); // Manage user state in the store
    const user = usePage().props.auth.user;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSignOut = () => {
        clearGuest();
        localStorage.removeItem("guestUser");
        router.post(route("logout"));
    };

    useEffect(() => {
        const guestUser = JSON.parse(localStorage.getItem("guestUser"));
        if (guestUser) {
            setGuest(guestUser);
        }
    }, [setGuest]);

    return (
        <div className="navbar-section">
            <div className=" ">
                <nav className="navb">
                    {/* <div className="flex"> */}
                    <Link className="navbar-brand  mr-auto" href="/">
                        <img src={logo} alt="Logo" className="home-logo" />
                    </Link>
                    <div>
                        <Link
                            href="/order-online"
                            className="blue-btn-nav nav-test text-white scale-effect d-md-none"
                        >
                            ORDER ONLINE
                        </Link>
                    </div>
                    {/* Hamburger menu toggle button */}

                    <div className="d-flex">
                        <Link
                            href="/cart"
                            className="nav-test d-md-none text-dark font-bold"
                        >
                            <CartIcon />
                        </Link>
                        <button className="navbar-togg" onClick={toggleMenu}>
                            <i className="bi bi-list"></i>
                        </button>
                    </div>

                    <div
                        className={`menu-links ${isMenuOpen ? "show" : "hide"}`}
                    >
                        <ul className="ml-aut">
                            <li className="notify">
                                <Link
                                    href="/"
                                    className="nav-test text-dark font-bold"
                                    style={{
                                        fontFamily: "Dynapuff",
                                    }}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="notify">
                                <Link
                                    href="/menu"
                                    className="nav-test text-dark font-bold"
                                    style={{
                                        fontFamily: "Dynapuff",
                                    }}
                                >
                                    OUR MENU
                                </Link>
                            </li>
                            <li className="notify">
                                <Link
                                    href="/international-menu"
                                    style={{
                                        fontFamily: "Dynapuff",
                                    }}
                                    className="nav-test text-dark font-bold"
                                >
                                    SPICES
                                </Link>
                            </li>
                            <li className="notify">
                                <Link
                                    href="/about"
                                    className="nav-test text-dark font-bold"
                                    style={{
                                        fontFamily: "Dynapuff",
                                    }}
                                >
                                    OUR BRAND
                                </Link>
                            </li>
                            <li className="notify">
                                <Link
                                    href="/contact"
                                    className="nav-test text-dark font-bold"
                                    style={{
                                        fontFamily: "Dynapuff",
                                    }}
                                >
                                    TALK TO US
                                </Link>
                            </li>
                            <li className="notify">
                                <Link
                                    href="/cart"
                                    className="nav-test hide text-dark font-bold"
                                >
                                    <CartIcon />
                                </Link>
                            </li>
                            <li className="notify">
                                <Link
                                    href="/order-online"
                                    className="blue-btn-nav nav-test text-white scale-effect"
                                    style={{
                                        fontFamily: "Dynapuff",
                                    }}
                                >
                                    ORDER ONLINE
                                </Link>
                            </li>
                            <li className="notify mt-6">
                                {user ? (
                                    <button
                                        onClick={handleSignOut}
                                        className="black-btn-nav mx-1 p-2 text-white"
                                        style={{
                                            fontFamily: "Dynapuff",
                                        }}
                                    >
                                        Sign Out
                                    </button>
                                ) : (
                                    <Link
                                        href="/login"
                                        className="black-btn-nav mx-1 text-white"
                                        style={{
                                            fontFamily: "Dynapuff",
                                        }}
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
