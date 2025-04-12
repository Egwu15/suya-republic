import React from "react";
import { Link } from "@inertiajs/react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

import brandVideo from "../../../assets/img/suya/SUYA-REPUBLICK-VIDEO_vid.mp4";

import logo from "../../../assets/img/suya/Mobile-Logo.png";
import "./index.css";

export const Footer = () => {
    return (
        <div>
            <div
                className="video-containe"
                style={{
                    height: "600px",
                    overflowY: "hidden",
                }}
            >
                <div
                    className="video-overlay"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#69141180", // semi-transparent overlay
                        pointerEvents: "none", // allows clicks to pass through if needed
                    }}
                />
                <section className=" video-container ">
                    <video
                        className="videoTag "
                        autoPlay
                        loop
                        muted
                        style={{
                            width: "100%",
                        }}
                    >
                        <source src={brandVideo} type="video/mp4" />
                    </video>
                </section>
            </div>
            <footer className="footer-container   d-fle">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <img
                                src={logo}
                                alt="logo"
                                // width="0"
                                height="50%"
                            />{" "}
                            <div>
                                <h3 className="Manchester">
                                    We are bringing the taste of Africa to
                                    Manchester.
                                </h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 pt-1 pt-md-5">
                            {" "}
                            <div>
                                <h1 className="text-yellow text-header">
                                    QUICK LINKS
                                </h1>
                                <div className="d-flex d-md-block gap-3">
                                    <Link
                                        href="/"
                                        className="text-decoration-none "
                                    >
                                        <p className="link-text ">Home</p>
                                    </Link>

                                    <Link
                                        href="/menu"
                                        className="text-decoration-none "
                                    >
                                        <p className="link-text"> Menu</p>
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="text-decoration-none "
                                    >
                                        <p className="link-text">Spice</p>
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="text-decoration-none "
                                    >
                                        <p className="link-text">Our Brand</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 pt-1 pt-md-5">
                            {" "}
                            <div>
                                <h1 className="text-yellow text-header">
                                    Contact{" "}
                                </h1>

                                <p className="link-text">
                                    07378 837837, 01616980898
                                </p>

                                <p className="link-text">
                                    303 Chester Rd Manchester M15 4EY
                                </p>

                                <button className="outline-btn">
                                    Talk to Us{" "}
                                    <span className="material-symbols-outlined">
                                        arrow_outward
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 pt-5">
                            {" "}
                            <div>
                                <h1 className="text-yellow text-header pb-3">
                                    Opening Hours
                                </h1>
                                <div className="d-flex d-md-block gap-3">
                                    <p className="link-text">
                                        TUESDAY - SUNDAY
                                    </p>

                                    <p className="link-text">
                                        5:00pm - 11:00pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    <div
                        style={{
                            height: "3px",
                            backgroundColor: "#ffffff", // solid white
                            border: "none",
                            margin: 0,
                            padding: 0,
                        }}
                    />
                    <div className="d-md-flex d-block justify-content-between">
                        <p
                            className="pt-2"
                            style={{
                                fontWeight: "400",
                            }}
                        >
                            copyright © 2025 Suya Republick
                        </p>
                        <div className="footer-img pt-2">
                            <a
                                className="px-2"
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/suyarepublick"
                            >
                                <FaFacebookF size={15} color="white" />
                            </a>{" "}
                            <a
                                className="px-2"
                                target="_blank"
                                rel="noreferrer"
                                href="https://x.com/suyarepublick"
                            >
                                <FaTwitter size={15} color="white" />
                            </a>
                            <a
                                className="px-2"
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.instagram.com/suyarepublick/"
                            >
                                <FaInstagram size={15} color="white" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
