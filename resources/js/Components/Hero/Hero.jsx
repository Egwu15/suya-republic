import React from "react";
import Navbar from "../NavBar";
import "./index.css";
import { Link } from "@inertiajs/react";
import Button from "../Button";
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
                <div className="hero-button">
                    {" "}
                    <Link
                        href="/order-online"
                        style={{ marginLeft: ".5rem", marginBottom: "1rem" }}
                    >
                        <Button
                            text="ORDER ONLINE"
                            //   handleButtonClick={handleSubmit}
                            // btnstyle={{ cursor: "pointer" }}
                            type="button"
                        />
                    </Link>
                    {/* <Link
                        href="/order-online"
                        className=" action-btn-bg text-decoration-none"
                        style={{marginLeft: ".5rem", marginBottom: "1rem"}}
                    >
                        ORDER ONLINE{" "}
                        <span className="material-symbols-outlined">
                            arrow_outward
                        </span>
                    </Link> */}
                    <Link
                        href="/order-online"
                        style={{ marginLeft: ".5rem" }}
                    >
                        <Button
                            text="PICKUP IN STORE"
                            // btnstyle={{ cursor: "pointer" }}
                            type="button"
                            className="Button_Wrap_secondary"
                        />
                    </Link>
                 
                </div>

                {/* </div> */}
            </div>
        </div>
    );
};

export default Hero;
