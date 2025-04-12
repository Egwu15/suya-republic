import React, { useState } from "react";
import "./index.css";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import Button from "../Button";
import { Link, usePage } from "@inertiajs/react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { url } = usePage(); // Get current path

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav
            className="position-absolute top-0 start-0 w-100 d-flex justify-content-between justify-content-md-around align-items-center px-4 py-3"
            style={{ zIndex: 3 }}
        >
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
            <ul className="nav-container list-unstyled m-0 d-none d-md-flex">
                <li className="nav-item">
                    <Link
                        className={`nav-link ${url === "/" ? "active" : ""}`}
                        href="/"
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${
                            url === "/menu" ? "active" : ""
                        }`}
                        href="/menu"
                    >
                        Menu
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${
                            url === "/spices" ? "active" : ""
                        }`}
                        href="/spices"
                    >
                        Spices
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${
                            url === "/about" ? "active" : ""
                        }`}
                        href="/about"
                    >
                        Our Brand
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${
                            url === "/contact" ? "active" : ""
                        }`}
                        href="/contact"
                    >
                        Talk to Us
                    </Link>
                </li>
                <div className="cart-icon">
                    <i className="bi bi-cart text-dark"></i>
                </div>
            </ul>

            <button
                onClick={toggleMenu}
                className="menu-button d-block d-md-none"
                style={{ backgroundColor: "transparent", border: "none" }}
            >
                <FaBars size={24} color="#fff" />
            </button>

            <div className="gap-3 justify-content-center mt-4 d-none d-md-flex">
                <button className="rounded-pill px-4 py-3 fw-bold order-button">
                    ORDER ONLINE
                </button>
                <button className="login-signup-button">LOGIN/SIGNUP</button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`navbar-collapse ${
                    menuOpen ? "show" : ""
                } d-md-none`}
            >
                <div className="mobile-menu-card">
                    <ul className="menu-link">
                        <li className="d-flex justify-content-between align-items-start">
                            <Link
                                className={`menu-item ${
                                    url === "/" ? "active" : ""
                                }`}
                                href="/"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <div className="mobile-menu-header">
                                <div className="cart-icon-circle">
                                    <i className="bi bi-cart text-dark"></i>
                                </div>
                                <button
                                    className="close-button"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    &times;
                                </button>
                            </div>
                        </li>
                        <li>
                            <Link
                                className={`menu-item ${
                                    url === "/menu" ? "active" : ""
                                }`}
                                href="/menu"
                                onClick={() => setMenuOpen(false)}
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`menu-item ${
                                    url === "/spices" ? "active" : ""
                                }`}
                                href="/spices"
                                onClick={() => setMenuOpen(false)}
                            >
                                Spices
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`menu-item ${
                                    url === "/about" ? "active" : ""
                                }`}
                                href="/about"
                                onClick={() => setMenuOpen(false)}
                            >
                                Our Brand
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`menu-item ${
                                    url === "/contact" ? "active" : ""
                                }`}
                                href="/contact"
                                onClick={() => setMenuOpen(false)}
                            >
                                Talk to Us
                            </Link>
                        </li>
                        <li className="text-start">
                            <button className="order-button mt-3">
                                ORDER ONLINE
                            </button>
                        </li>
                        <li className="text-start">
                            <button className="login-signup-button mt-2">
                                LOGIN/SIGNUP
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link, usePage, router } from "@inertiajs/react";
// import logo from "../../../assets/img/suya/Mobile-Logo.png";
// import CartIcon from "@/Pages/Cart/CartIcon";
// import useCartStore from "@/store/Store"; // Assuming you're using Zustand or another store library
// import "./index.css";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const { guest, setGuest, clearGuest } = useCartStore(); // Manage user state in the store
//     const user = usePage().props.auth.user;

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//     const handleSignOut = () => {
//         clearGuest();
//         localStorage.removeItem("guestUser");
//         router.post(route("logout"));
//     };

//     useEffect(() => {
//         const guestUser = JSON.parse(localStorage.getItem("guestUser"));
//         if (guestUser) {
//             setGuest(guestUser);
//         }
//     }, [setGuest]);

//     return (
//         <div className="navbar-section">
//             <div className=" ">
//                 <nav className="navb">
//                     {/* <div className="flex"> */}
//                     <Link className="navbar-brand  mr-auto" href="/">
//                         <img src={logo} alt="Logo" className="home-logo" />
//                     </Link>
//                     <div>
//                         <Link
//                             href="/order-online"
//                             className="blue-btn-nav nav-test text-white scale-effect d-md-none"
//                         >
//                             ORDER ONLINE
//                         </Link>
//                     </div>
//                     {/* Hamburger menu toggle button */}

//                     <div className="d-flex">
//                         <Link
//                             href="/cart"
//                             className="nav-test d-md-none text-dark font-bold"
//                         >
//                             <CartIcon />
//                         </Link>
//                         <button className="navbar-togg" onClick={toggleMenu}>
//                             <i className="bi bi-list"></i>
//                         </button>
//                     </div>

//                     <div
//                         className={`menu-link ${isMenuOpen ? "show" : "hide"}`}
//                     >
//                         <ul className="ml-aut">
//                             <li className="notify">
//                                 <Link
//                                     href="/"
//                                     className="nav-test text-dark font-bold"
//                                     style={{
//                                         fontFamily: "Dynapuff",
//                                     }}
//                                 >
//                                     HOME
//                                 </Link>
//                             </li>
//                             <li className="notify">
//                                 <Link
//                                     href="/menu"
//                                     className="nav-test text-dark font-bold"
//                                     style={{
//                                         fontFamily: "Dynapuff",
//                                     }}
//                                 >
//                                     OUR MENU
//                                 </Link>
//                             </li>
//                             <li className="notify">
//                                 <Link
//                                     href="/international-menu"
//                                     style={{
//                                         fontFamily: "Dynapuff",
//                                     }}
//                                     className="nav-test text-dark font-bold"
//                                 >
//                                     SPICES
//                                 </Link>
//                             </li>
//                             <li className="notify">
//                                 <Link
//                                     href="/about"
//                                     className="nav-test text-dark font-bold"
//                                     style={{
//                                         fontFamily: "Dynapuff",
//                                     }}
//                                 >
//                                     OUR BRAND
//                                 </Link>
//                             </li>
//                             <li className="notify">
//                                 <Link
//                                     href="/contact"
//                                     className="nav-test text-dark font-bold"
//                                     style={{
//                                         fontFamily: "Dynapuff",
//                                     }}
//                                 >
//                                     TALK TO US
//                                 </Link>
//                             </li>
//                             <li className="notify">
//                                 <Link
//                                     href="/cart"
//                                     className="nav-test hide text-dark font-bold"
//                                 >
//                                     <CartIcon />
//                                 </Link>
//                             </li>
//                             <li className="notify">
//                                 <Link
//                                     href="/order-online"
//                                     className="blue-btn-nav nav-test text-white scale-effect"
//                                     style={{
//                                         fontFamily: "Dynapuff",
//                                     }}
//                                 >
//                                     ORDER ONLINE
//                                 </Link>
//                             </li>
//                             <li className="notify mt-6">
//                                 {user ? (
//                                     <button
//                                         onClick={handleSignOut}
//                                         className="black-btn-nav mx-1 p-2 text-white"
//                                         style={{
//                                             fontFamily: "Dynapuff",
//                                         }}
//                                     >
//                                         Sign Out
//                                     </button>
//                                 ) : (
//                                     <Link
//                                         href="/login"
//                                         className="black-btn-nav mx-1 text-white"
//                                         style={{
//                                             fontFamily: "Dynapuff",
//                                         }}
//                                     >
//                                         Sign In
//                                     </Link>
//                                 )}
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
