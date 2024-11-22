import React from "react";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import { Link } from "@inertiajs/react";

const orderOnline = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div
                className="text-center p-4"
                style={{ maxWidth: "350px", width: "100%" }}
            >
                <Link href={"/"}>Home</Link>{" "}
                <div className="text-center mb-4">
                    <img
                        src={logo}
                        alt=""
                        className="home-logo"
                        style={{ height: "40px" }}
                    />
                    {/* <h2 className="h5">Back</h2> */}
                </div>
                <form>
                    <div className="mb-3">
                        <label
                            htmlFor="postcode"
                            className="form-label  text-left fw-bold"
                        >
                            Enter your full postcode
                        </label>
                        <input
                            type="text"
                            id="postcode"
                            className="form-control text-center"
                            placeholder="e.g. EC1Y 1BE"
                        />
                    </div>
                    <button type="button" className="btn btn-dark w-100 mb-2">
                        I’LL COLLECT
                    </button>
                    <button type="button" className="btn btn-dark w-100">
                        DELIVER TO ME
                    </button>
                </form>
                <div className="mt-3">
                    <p className="text-muted mb-0">brought to you by</p>
                    {/* <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Deliveroo_logo.svg"
                        alt="Deliveroo"
                        style={{ height: "24px" }}
                    /> */}
                    <h1>Deliveroo</h1>
                </div>
            </div>
        </div>
    );
};

export default orderOnline;
