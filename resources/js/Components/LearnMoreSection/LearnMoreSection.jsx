import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LearnMoreSection.css";
import image from "../../../assets/img/suya/Full-Platter-1.jpg";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import { Link } from "@inertiajs/react";
import Button from "../Button";

const LearnMoreSection = () => {
    return (
        <div className="learn-more-section position-relative text-white">
            <img src={image} alt="Suya Platter" className="background-image" />

            <div className="content-card bg-orange   position-absolute end-0 top-50 translate-middle-y shadow-lg">
                <div className="d-flex flex-column justify-content-center align-items-center p-md-5">
                    <img
                        src={logo}
                        alt="Suya Republic Logo"
                        className="menu-logo mb-2 mb-md-3"
                    />
                    <span className="quote" style={{ alignSelf: "flex-start" }}>
                        &#8220;
                    </span>
                    <p className="menu-description">
                        Welcome to Suya Republic, where the essence of
                        traditional flavors meets modern culinary artistry. Our
                        journey began with a simple vision: to create a dining
                        experience that brings people together over delicious,
                        carefully crafted spicy suya inspired by our roots and
                        local ingredients. At Suya Republic, we believe in
                        honoring heritage while embracing innovation, resulting
                        in a menu that celebrates both classic favorites and
                        unique, original creations.
                    </p>
                    <span className="quote" style={{ alignSelf: "flex-end" }}>
                        &#8221;
                    </span>
                    <div>
                        <Link href="/about">
                            <Button
                                btnstyle={{ border: "none" }}
                                text="Learn More"
                                type="button"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnMoreSection;
