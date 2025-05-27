import React from "react";
import spiceImageGif from "../../../assets/img/suya/Suya-Spice-Banner-gif.gif";
import platterImg from "../../../assets/img/suya/Full-Platter-1.jpg";
import brandLogo from "../../../assets/img/suya/Banner-brand.jpg";
import staroutline from "../../../assets/img/star.png";
import star from "../../../assets/img/starbg.png";
import { Link } from "@inertiajs/react";
import "./index.css";
import Button from "../Button";
const ServiceSection = () => {
    return (
        <div className="row bg-orange position-relative p-2">
            <div className="col-12 col-md-12">
                <p
                    className="text-center text-red m-3"
                    style={{
                        fontSize: "32px",
                        fontWeight: 800,
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    SUYAREPUBLICK
                </p>
                <div className="">
                    <h4
                        className="text-center text-white font-56"
                        style={{ fontFamily: "GROBOLD" }}
                    >
                        We are bringing the taste of Africa to Manchester.
                    </h4>
                </div>
                <div className="">
                    <p
                        className="text-center  text-white"
                        style={{
                            fontSize: "20px",
                            fontWeight: 400,
                            fontFamily: "Poppins, sans-serif",
                        }}
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
                    className="img-fluid img-fluid-star"
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
                            <div className="col-md-4 py-3 py-md-0 margin-buttom-10 ">
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

                                    <h3
                                        className="py-3 text-white"
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
                                        <b>SUYA SPICE</b>
                                    </h3>
                                    <p
                                        className="pb-2 text-white detail-text"
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
                                        Get your Suya spice anywhere anyime
                                        within UK
                                    </p>

                                    <Link
                                        href="/order-online"
                                        // style={{ marginLeft: ".5rem", marginBottom: "1rem" }}
                                    >
                                        <Button
                                            text="ORDER NOW"
                                            btnstyle={{ border: "none" }}
                                            type="button"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0 margin-buttom-10">
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
                                    <h3
                                        className="py-3 text-white"
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
                                        <b>OUR MENU</b>
                                    </h3>
                                    <p
                                        className="pb- text-white detail-text-2"
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
                                        Our meals are made with natural, fresh
                                        and organic spices and recipes from
                                        Africa.
                                    </p>

                                    <Link
                                        href="/menu"
                                    >
                                        <Button
                                            text="OUR MENU"
                                            btnstyle={{ border: "none" }}
                                            type="button"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0 ">
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
                                    <h3
                                        className="py-3 text-white"
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
                                        <b>OUR BRAND</b>
                                    </h3>
                                    <p
                                        className="pb-2 text-white detail-text-2"
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
                                        The first Suya Republick started out in
                                        the streets of Lagos, Nigeria in 2018.
                                    </p>

                                    <Link
                                        href="/contact"
                                    >
                                        <Button
                                            text="LEARN MORE"
                                            btnstyle={{ border: "none" }}
                                            type="button"
                                        />
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
