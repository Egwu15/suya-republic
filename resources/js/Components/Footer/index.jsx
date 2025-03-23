import React from "react";
import { Link } from "@inertiajs/react";
import arrowup from "../../../assets/img/arrow-up-small-footer.svg";
import facebook from "../../../assets/img/facebook.svg";
import instagram from "../../../assets/img/instagram.svg";
import footerImg from "../../../assets/img/suya/Footer-Banner.jpg";
import twitter from "../../../assets/img/twitter.svg";
import "./index.css";
import { COLOR_GOLD } from "../../utils/constant";

export const Footer = () => {
    return (
        <div>
            <footer className="last-section pb-5">
                <div className="row row-grid">
                    <div className="footer-cards bg-info col-md-6">
                        <div className="footer-card ">
                            <div className="mb-4 pl-5">
                                <h1
                                    style={{
                                        color: COLOR_GOLD,
                                        fontFamily: "Oswald",
                                    }}
                                >
                                    HOTLINES
                                </h1>

                                <span>
                                    <a
                                        href="tel:07378837837"
                                        className="text-decoration-none"
                                    >
                                        07378 837837
                                    </a>
                                    ,{" "}
                                    <a
                                        href="tel:01616980898"
                                        className="text-decoration-none"
                                    >
                                        01616980898
                                    </a>
                                </span>
                            </div>

                            <div>
                                <h1
                                    style={{
                                        color: COLOR_GOLD,
                                        fontFamily: "Oswald",
                                    }}
                                >
                                    QUICK LINKS
                                </h1>

                                <Link href="/" className="text-decoration-none">
                                    <p>Home</p>
                                </Link>

                                <Link
                                    href="/menu"
                                    className="text-decoration-none"
                                >
                                    <p>Our Menu</p>
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-decoration-none"
                                >
                                    <p>Our Brand</p>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-decoration-none"
                                >
                                    <p>Talk to us</p>
                                </Link>
                            </div>
                        </div>
                        <div className="footer-card mb-5">
                            <div className="socialfootericon mb-5 pl-5">
                                <h1 style={{ fontFamily: "Oswald" }}>
                                    Follow Us
                                </h1>
                                <div className="footer-img ">
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://x.com/suyarepublick"
                                    >
                                        {" "}
                                        <img
                                            src={twitter}
                                            alt=""
                                            width="0"
                                            height="20"
                                        />{" "}
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.facebook.com/suyarepublick"
                                    >
                                        <img
                                            src={facebook}
                                            alt=""
                                            width="20"
                                            height="20"
                                        />{" "}
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.instagram.com/suyarepublick/"
                                    >
                                        {" "}
                                        <img
                                            src={instagram}
                                            alt=""
                                            width="20"
                                            height="20"
                                        />{" "}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h1 style={{ fontFamily: "Oswald" }}>
                                    OPENING HOURS
                                </h1>
                                <p>TUESDAY TO SUNDAY</p>
                                <span>5:00pm – 11:00pm</span>
                            </div>
                        </div>
                        <div className="footer-card mb-5">
                            <div>
                                <h3 style={{ fontFamily: "Oswald" }}>
                                    VISIT US
                                </h3>
                                <span>303 Chester road Manchester M15 4EY</span>
                            </div>
                        </div>
                        <div className=" mb-5 ">
                            <h2
                                style={{
                                    fontFamily: "Dynapuff",
                                }}
                            >
                                WE ARE BRINGING THE TASTE OF AFRICA TO
                                MANCHESTER.
                            </h2>
                        </div>
                    </div>
                    <div className="pb-5 col-md-6">
                        <img
                            src={footerImg}
                            alt="footer banner"
                            loading="lazy"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>

                <hr />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <span>
                                © {new Date().getFullYear()} Suya Republick.
                            </span>

                            {/* <span>SUYA REPUBLICK</span> */}
                        </div>
                        <div className="col-md-2 offset-2">
                            <a href="#top">
                                <div className="footer-block-square">
                                    <img src={arrowup} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
