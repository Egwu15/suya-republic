import React, { useEffect } from "react";
import Carousel from "bootstrap/js/dist/carousel";
import suyaRepublic from "../../../assets/img/suya/Suya-Republick-Banner-4.jpg";
import cureText from "../../../assets/img/suya/we-cure.png";
import spiceText from "../../../assets/img/suya/Suya-Spice-Text-1.png";
import spiceImage from "../../../assets/img/suya/Suya-Spice-Banner.jpg";
import phoneLocation from "../../../assets/img/suya/phone-booking.png";
import locationtext from "../../../assets/img/suya/Order-Online-loc.jpg";
import suyaBurst from "../../../assets/img/suya/burst-brain.png";
import suyaOnion from "../../../assets/img/suya/Home-Banner-2.jpg";
import proudlyNaija from "../../../assets/img/suya/proudlynaija.png";
import "./Carousel.css";
import { Link } from "@inertiajs/react";

const CarouselComponent = () => {
    useEffect(() => {
        const myCarousel = document.getElementById("carouselExample");
        if (myCarousel) {
            new Carousel(myCarousel, {
                interval: 2000, // Set auto-slide interval to 2 seconds
                pause: false, // Ensure it keeps sliding on touch
                ride: "carousel",
            });
        }
    }, []);

    return (
        <div
            id="carouselExample"
            className="carousel slide py-4"
            data-bs-ride="carousel"
            data-bs-interval="2000"
            data-bs-pause="false"
        >
            <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12 flex">
                                <div className="d-fl">
                                    <div>
                                        <img
                                            src={suyaBurst}
                                            alt="Suya Burst"
                                            className="pb-4"
                                        />
                                    </div>
                                    <img
                                        src={proudlyNaija}
                                        alt="Proudly Naija"
                                        className="burst-head"
                                    />
                                    <Link
                                        href="/order-online"
                                        className="carousel-btn nav-test text-white mt-4"
                                    >
                                        ORDER ONLINE
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <img
                                    src={suyaOnion}
                                    alt="Suya Onion"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12 flex">
                                <div className="d-fl">
                                    <div>
                                        <img
                                            src={cureText}
                                            alt="Cure Text"
                                            className=""
                                        />
                                    </div>
                                    <img
                                        src={proudlyNaija}
                                        alt="Proudly Naija"
                                        className="proudly-nija"
                                    />
                                    <Link
                                        href="/order-online"
                                        className="carousel-btn nav-test text-white mt-4"
                                    >
                                        ORDER ONLINE
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <img
                                    src={suyaRepublic}
                                    alt="Suya Republic"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                                <div className="d-fl">
                                    <img
                                        src={spiceText}
                                        alt="Spice Text"
                                        className="w-75"
                                    />
                                    <Link
                                        href="/order-online"
                                        className="carousel-btn nav-test text-white mt-2"
                                    >
                                        ORDER ONLINE
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <img
                                    src={spiceImage}
                                    alt="Spice Image"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 4 */}
                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12 flex pb-4">
                                <img
                                    src={locationtext}
                                    alt="Location Text"
                                    className=""
                                />
                            </div>
                            <div className="col-md-6 col-12">
                                <img
                                    src={phoneLocation}
                                    alt="Phone Booking"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Navigation Buttons */}
            {/* <button
                className="carousel-control-prev custom-btn-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span>PREV</span>
            </button>
            <button
                className="carousel-control-next custom-btn-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span>NEXT</span>
            </button> */}
        </div>
    );
};

export default CarouselComponent;
