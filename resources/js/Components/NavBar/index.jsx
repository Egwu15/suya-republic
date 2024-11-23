import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import down from "../../../assets/img/Profile/Wallet/Vector.png";
import Avatar from "../../../assets/img/avatar.png";
import "./index.css";
import account from "../../../assets/img/Vector.png";

export const Navbar = () => {
    const [user, setUser] = useState(null);
    // const [menu, setMenu] = useState(true);
    const [isMenuActive, setIsMenuActive] = useState(0);
    const [isMenuActive2, setIsMenuActive2] = useState(0);
    const [isMenuActive3, setIsMenuActive3] = useState(0);
    // const [hamburger, setHamburger] = useState(0);

    // const setMenuBurger = ()=>{
    // setIsMenuActive(index)
    // let i
    // for(i=0; i<=4; i++){
    //     if(i===index) {
    //       setIsMenuActive(true)
    //     }else{
    //       setIsMenuActive(false)
    //     }
    // }
    // }

    // useEffect(()=>{
    // activeMenu(0)
    // })

    const toggleMenu = () => {
        // setMenu(false);
        var x = document.getElementById("navbarsExample09");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    };

    const logOut = () => {
        removeState();
        removeStateWallet();
        navigate.push("/");
        window.location.reload();
    };

    return (
        <div className="navbar-section">
            <div className="container">
                <nav className="navb">
                    <Link className="navbar-brand d-flex mr-auto" to="/">
                        <img src={logo} alt="" className="home-logo" />
                    </Link>
                    <div
                        // className="navbar-togg"
                        className="navbar-togg"
                        onClick={toggleMenu}
                        // onClick={() => setMenuBurger(true)}
                    >
                        <i className="fa fa-bars"></i>
                    </div>
                    <div
                        className=""
                        id="navbarsExample09"
                        style={{ paddingTop: "20px" }}
                    >
                        {user === null ? (
                            <ul className="menu-links ml-auto justify-content-end align-items-center">
                                <li
                                    className="notify"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <Link
                                        href={"/"}
                                        className="suggest-link drop-down-option nav-test"
                                        exact={true}
                                        // activeClassName="active"
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li
                                    className="notify"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <Link
                                        href={"/menu"}
                                        className="suggest-link drop-down-option nav-test"
                                        exact={true}
                                        // activeClassName="active"
                                    >
                                        OUR MENU
                                    </Link>
                                </li>
                                <li
                                    className="notify"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <Link
                                        to="/suggest-route"
                                        className="suggest-link drop-down-option nav-test"
                                        exact={true}
                                        // activeClassName="active"
                                    >
                                        OUR BRAND
                                    </Link>
                                </li>
                                <li
                                    className="notify"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <Link
                                        to="/suggest-route"
                                        className="suggest-link drop-down-option nav-test"
                                        exact={true}
                                        // activeClassName="active"
                                    >
                                        TALK TO US
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link
                                        href={"/orderOnline"}
                                        className="blue-btn-nav nav-test"
                                    >
                                        ORDER ONLINE
                                    </Link>
                                    <Link
                                        href={"/signup"}
                                        className="black-btn-nav mx-1"
                                    >
                                        Sign In / Sign Up
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="menu-links ml-auto justify-content-end align-items-center">
                                <li className="notify">
                                    <button
                                        id="sub-active"
                                        // className="drop-down-option"
                                        className={`${
                                            isMenuActive === 0
                                                ? "active"
                                                : "drop-down-option"
                                        }`}
                                        // onClick={toggleMenu2}
                                    >
                                        Move Freely
                                        <img
                                            id="sub-active-icon"
                                            src={down}
                                            alt=""
                                            className="ml-1"
                                        />{" "}
                                    </button>
                                    <ul className="submenu" id="sub-menu">
                                        <li style={{ marginBottom: "10px" }}>
                                            <Link to="/Pickupservice">
                                                Pick up Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/hire-vehicle">
                                                Hire a Bus
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="notify">
                                    <button
                                        id="sub-active2"
                                        // className="drop-down-option"
                                        className={`${
                                            isMenuActive2 === 0
                                                ? "active"
                                                : "drop-down-option"
                                        }`}
                                        // onClick={toggleMenu3}
                                    >
                                        Do Freely
                                        <img
                                            id="sub-active-icon2"
                                            src={down}
                                            alt=""
                                            className="ml-1"
                                        />{" "}
                                    </button>
                                    <ul className="submenu" id="sub-menu2">
                                        <li style={{ marginBottom: "10px" }}>
                                            <Link to="/paybills">
                                                Bills Payment
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/enterprise">
                                                Enterprise Partner
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    className="notify"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <Link
                                        to="/suggest-route"
                                        className="suggest-link drop-down-option"
                                        exact={true}
                                        // activeClassName="active"
                                    >
                                        Suggest Route
                                    </Link>
                                </li>

                                <li className="notify">
                                    <button
                                        id="sub-active3"
                                        // className="drop-down-option"
                                        className={`${
                                            isMenuActive3 === 0
                                                ? "active"
                                                : "drop-down-option"
                                        }`}
                                        // onClick={toggleMenu4}
                                    >
                                        <div className="avatar-icon">
                                            {user.Image === null ||
                                            user.Image === "" ? (
                                                <img
                                                    src={Avatar}
                                                    alt=""
                                                    className="rounded-circle"
                                                />
                                            ) : (
                                                <img
                                                    src={user.Image}
                                                    alt=""
                                                    className="rounded-circle"
                                                />
                                            )}
                                        </div>
                                        <img
                                            id="sub-active-icon3"
                                            src={down}
                                            alt=""
                                            className="ml-1"
                                        />{" "}
                                    </button>
                                    <ul className="submenu" id="sub-menu3">
                                        <li style={{ marginBottom: "10px" }}>
                                            <img src={account} alt="" />{" "}
                                            <Link to="/setting">
                                                My Account
                                            </Link>
                                        </li>
                                        <li onClick={logOut}>
                                            <i className="fa fa-sign-out"></i>{" "}
                                            Logout
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
