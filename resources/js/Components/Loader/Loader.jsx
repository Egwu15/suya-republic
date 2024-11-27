import React from "react";
import "./Loader.css";
import logo from "../../../assets/img/suya/Mobile-Logo.png";

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="spinner">
                    {" "}
                    <img src={logo} alt="Logo" className="loader-logo" />
                </div>
            </div>
        </div>
    );
};

export default Loader;
