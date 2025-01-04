import React, { useState } from "react";
import logo from "../../../assets/img/suya/Mobile-Logo.png";
import { Link } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const OrderOnline = () => {
    const [postcode, setPostcode] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleDeliverToMe = () => {
        // if (postcode.trim() === "") {
        //     setErrorMessage("Please enter your postcode.");
        // } else if (!postcode.toUpperCase().startsWith("MN")) {
        //     setModalMessage("We only deliver within Manchester.");
        //     setShowModal(true); // Show modal for invalid postcode

        //     // Navigate to external UberEats link
        //     // window.location.href =''
        //     setErrorMessage(""); // Clear error message
        // } else {
        //     // Navigate to internal login page
        //     window.location.href =
        //         "https://www.ubereats.com/store/suya-republick-and-grill/Hiu7Y8B1T9a1HTNGb_7pYQ?diningMode=DELIVERY";
        //     setShowModal(false); // Hide modal

        //     setErrorMessage(""); // Clear error message
        // }
        window.location.href =
            "https://deliveroo.co.uk/menu/manchester/hulme-park/suya-republick-and-grill?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share";
    };

    const handleCollect = () => {
        // Store a value in localStorage
        localStorage.setItem("orderType", "collect");

        // Navigate to the menu page
        window.location.href = "/menu";
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage("");
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <ToastContainer />
            <div
                className="text-center p-4"
                style={{ maxWidth: "350px", width: "100%" }}
            >
                <Link href={"/"}>Home</Link>
                <div className="text-center mb-4">
                    <img
                        src={logo}
                        alt=""
                        className="home-logo"
                        style={{ height: "40px" }}
                    />
                </div>
                <form>
                    {/* <div className="mb-3">
                        <label
                            htmlFor="postcode"
                            className="form-label text-left fw-bold"
                        >
                            Enter your full postcode
                        </label>
                        <input
                            type="text"
                            id="postcode"
                            className="form-control text-center"
                            placeholder="e.g. EC1Y 1BE"
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                        />
                        {errorMessage && (
                            <p className="text-danger mt-2">{errorMessage}</p>
                        )}
                    </div> */}
                    <button
                        type="button"
                        className="btn btn-dark w-100 mb-2"
                        onClick={handleCollect}
                    >
                        I’LL COLLECT
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={handleDeliverToMe}
                    >
                        DELIVER TO ME
                    </button>
                </form>
                <div className="mt-3">
                    <p className="text-muted mb-0">brought to you by</p>
                    <h1>Deliveroo</h1>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div
                    className="modal fade show"
                    tabIndex="-1"
                    style={{
                        display: "block",
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title color-red">
                                    Notice
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>{modalMessage}</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-dark"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderOnline;
