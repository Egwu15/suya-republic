import React from "react";
import Navbar from "../NavBar";
import "./index.css";
const Hero = ({ pagename, title, desc }) => {
    return (
        <div
            className="hero-bg text-white text-center d-flex flex-column justify-content-center align-items-center vh-100"
            style={{}}
        >
            {/* Navbar */}
            <Navbar />
            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <div style={{ zIndex: 2 }}>
                <h2 className="alpha-heading text-warning mb-3">{pagename}</h2>
                <h2 className="gro-bold-heading text-white">{title}</h2>
                <p className="lead text-center px-3 mt-3">{desc}</p>
                <div className="d-md-flex d-block gap-md-3 gap-4 d-flex flex-column flex-md-row ">
                    <button className="action-btn order-btn-hero">
                        ORDER ONLINE{" "}
                        <span className="material-symbols-outlined">
                            arrow_outward
                        </span>
                    </button>
                    <button className="action-btn pickup-btn">
                        PICKUP IN STORE{" "}
                        <span className="material-symbols-outlined">
                            arrow_outward
                        </span>
                    </button>
                </div>
                {/* <ActionButtons />{" "} */}
            </div>
        </div>
    );
};

export default Hero;
