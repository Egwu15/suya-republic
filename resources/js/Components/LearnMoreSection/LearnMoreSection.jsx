import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LearnMoreSection.css";
import image from "../../../assets/img/suya/Full-Platter-1.jpg";
import logo from "../../../assets/img/suya/Mobile-Logo.png";

const LearnMoreSection = () => {
    return (
        <div className="learn-more-section position-relative text-white">
            <img src={image} alt="Suya Platter" className="background-image" />

            <div className="content-card bg-orange p-4 p-md-5  position-absolute end-0 top-50 translate-middle-y shadow-lg">
                <div className="d-flex flex-column justify-content-center align-items-center p-md-5">
                    <img
                        src={logo}
                        alt="Suya Republic Logo"
                        className="menu-logo mb-2 mb-md-3"
                    />
                    <p className="menu-description">
                        <span className="quote">&#8220;</span> Welcome to Suya
                        Republic, where the essence of traditional flavors meets
                        modern culinary artistry. Our journey began with a
                        simple vision: to create a dining experience that brings
                        people together over delicious, carefully crafted spicy
                        suya inspired by our roots and local ingredients. At
                        Suya Republic, we believe in honoring heritage while
                        embracing innovation, resulting in a menu that
                        celebrates both classic favorites and unique, original
                        creations. <span className="quote">&#8221;</span>
                    </p>
                    <div>
                        <button className="btn btn-light text-red px-4 py-3 fw-bold rounded-pill fw-bold d-flex align-items-center gap-2 mt-3">
                            Learn More{" "}
                            <span className="material-symbols-outlined fw-bold">
                                arrow_outward
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnMoreSection;
