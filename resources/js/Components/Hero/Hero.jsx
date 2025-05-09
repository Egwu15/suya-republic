import React from "react";
import Navbar from "../NavBar";
import "./index.css";
import { Link } from "@inertiajs/react";
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
                    // backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <div style={{ zIndex: 2 }}>
                <h2 className="alpha-heading-h text-warning mb-5">
                    {pagename}
                </h2>
                <h2 className="gro-bold-heading-h text-white ">{title}</h2>

                <p className="lead text-center px-3  mt-3 ">{desc}</p>
                <div className=" ">
                    {" "}
                    <Link
                        href="/order-online"
                        className=" action-btn-bg text-decoration-none mx-2"
                    >
                        ORDER ONLINE{" "}
                        <span className="material-symbols-outlined">
                            arrow_outward
                        </span>
                    </Link>
                    <Link
                        href="/order-online"
                        className="action-btn-outline  text-decoration-none mx-2"
                    >
                        PICKUP IN STORE{" "}
                        <span className="material-symbols-outlined">
                            arrow_outward
                        </span>
                    </Link>
                </div>

                {/* </div> */}
            </div>
        </div>
    );
};

export default Hero;
