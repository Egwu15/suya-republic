import React from "react";
import spiceImageGif from "../../../assets/img/suya/Suya-Spice-Banner-gif.gif";
import platterImg from "../../../assets/img/suya/Full-Platter-1.jpg";
import brandLogo from "../../../assets/img/suya/Banner-brand.jpg";
import staroutline from "../../../assets/img/star.png";
import star from "../../../assets/img/starbg.png";
import { Link } from "@inertiajs/react";
import "./index.css";
const ServiceSection = () => {
    return (
        <div className="row bg-orange position-relative p-5">
            <div className="col-12 col-md-12">
                <p
                    className="text-center text-red m-0"
                    style={{ fontSize: "32px", fontWeight: 500 }}
                >
                    SUYAREPUBLICK
                </p>
                <div className="center-item">
                    <h4 className="text-center text-white col-md-7 font-56">
                        We are bringing the taste of Africa to Manchester.
                    </h4>
                </div>
                <div className="center-item">
                    <p
                        className="text-center col-md-5 text-white"
                        style={{ fontSize: "20px", fontWeight: 400 }}
                    >
                        Our meals are made with natural and organic spices and
                        recipes from Africa.
                    </p>{" "}
                </div>
            </div>
            <div className="star-container">
                <img
                    src={star}
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                    style={{
                        width: "5%",
                    }}
                />
            </div>
            <div className="star-outline-container">
                <img
                    src={staroutline}
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                    style={{
                        width: "5%",
                    }}
                />
            </div>
            <div className="row">
                <section className="hot-cards pt-5 pb-5">
                    <div className="container">
                        <div className="row row-grid">
                            <div className="col-md-4 py-3 py-md-0">
                                <div className=" text-left">
                                    <div className="card-container-img">
                                        <img
                                            src={spiceImageGif}
                                            alt=""
                                            className="img-fluid"
                                            loading="lazy"
                                            style={{
                                                width: "100%",
                                                borderRadius: "20px",
                                            }}
                                        />
                                    </div>

                                    <h3 className="py-3 text-white">
                                        <b>SUYA SPICE</b>
                                    </h3>
                                    <p className="pb-2 text-white detail-text">
                                        Get your Suya spice anywhere anyime
                                        within UK
                                    </p>
                                    <Link
                                        href="/order-online"
                                        className="text-decoration-none order-btn p-0 m-0"
                                    >
                                        {" "}
                                        <span
                                            className="text-left bg-red "
                                            style={{
                                                borderRadius: "20px",
                                                padding: "10px 20px",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                color: "white",
                                                textDecoration: "none",
                                                display: "inline-block",
                                            }}
                                        >
                                            ORDER NOW{" "}
                                            <span className="material-symbols-outlined fw-bold">
                                                arrow_outward
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-container text-left">
                                    <div className="card-container-img ">
                                        <img
                                            src={platterImg}
                                            alt=""
                                            className=" img-fluid"
                                            loading="lazy"
                                            style={{
                                                width: "100%",
                                                borderRadius: " 20px ",
                                            }}
                                        />
                                    </div>
                                    <h3 className="py-3 text-white">
                                        <b>OUR MENU</b>
                                    </h3>
                                    <p className="pb-2 text-white detail-text">
                                        Our meals are made with natural, fresh
                                        and organic spices and recipes from
                                        Africa.
                                    </p>

                                    <Link
                                        href={"/menu"}
                                        className="text-decoration-none order-btn p-0 m-0"
                                    >
                                        {" "}
                                        <span
                                            className="text-left bg-red "
                                            style={{
                                                borderRadius: "20px",
                                                padding: "10px 20px",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                color: "white",
                                                textDecoration: "none",
                                                display: "inline-block",
                                            }}
                                        >
                                            OUR MENU{" "}
                                            <span className="material-symbols-outlined fw-bold">
                                                arrow_outward
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-container text-left">
                                    <div className="card-container-img">
                                        <img
                                            src={brandLogo}
                                            alt=""
                                            className="img-fluid"
                                            loading="lazy"
                                            style={{
                                                width: "100%",
                                                borderRadius: " 40px ",
                                            }}
                                        />
                                    </div>
                                    <h3 className="py-3 text-white">
                                        <b>OUR BRAND</b>
                                    </h3>
                                    <p className="pb-2 text-white detail-text">
                                        The first Suya Republick started out in
                                        the streets of Lagos, Nigeria in 2018.
                                    </p>

                                    <Link
                                        href="/contact"
                                        className="text-decoration-none order-btn p-0 m-0 "
                                    >
                                        <span
                                            className="text-left bg-red "
                                            style={{
                                                borderRadius: "20px",
                                                padding: "10px 20px",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                color: "white",
                                                textDecoration: "none",
                                                display: "inline-block", // Ensures it doesn't take full width
                                            }}
                                        >
                                            LEARN MORE{" "}
                                            <span className="material-symbols-outlined fw-bold">
                                                arrow_outward
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceSection;
