import React, { useState } from "react";
import man from "../../../assets/img/icons/pending.png";
import car from "../../../assets/img/Vector.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/Components/NavBar";
import "./index.css";
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
        <div
            className="hero-bg  text-center d-flex flex-colum justify-content-center align-items-center vh-100"
            style={{}}
        >
            {/* Navbar */}
            <Navbar />
            <section className="container px-5 ">
                <div
                    className="row  bg-white  p-6 pad "
                    style={{ borderRadius: "20px" }}
                >
                    <div className="col-12 col-md-6 py-5">
                        <div className="card-body d-flex flex-column align-items-center text-center p-">
                            <div
                                className="icon "
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    background: "#691411",
                                }}
                            >
                                {/* <i className="bi bi-cart text-white  fs-3"></i> */}
                                <img src={man} alt="man" width={30} />
                            </div>
                            <h6 className="fw-bold text-red  mt-2">
                                Order for Collect
                            </h6>
                            {/* <div className="center-item"> */}
                            <span className=" d-block text-center text-red w-75 p-4">
                                Please plan ahead and get your PERI-PERI to go,
                                from our restaurant location.
                            </span>
                            {/* </div> */}
                            <button
                                className="text-red action-btn"
                                style={{ color: "#691411" }}
                                onClick={handleCollect}
                            >
                                I'LL COLLECT
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card-body d-flex flex-column align-items-center text-center p-4">
                            <div
                                className="icon"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    background: "#691411",
                                }}
                            >
                                <img src={car} alt="man" width={20} />
                            </div>
                            <h6 className="fw-bold text-red mt-2">
                                Suya Republic’s Delivery{" "}
                            </h6>
                            <span className=" d-block text-center text-red w-75 p-4">
                                Our delivery zones shift demand-check now to see
                                if Suya Republic is bringing he flavour to your
                                doorstep!
                            </span>
                            <button
                                className="text-red action-btn"
                                style={{ color: "#691411" }}
                                onClick={handleDeliverToMe}
                            >
                                DELIVER TO ME
                            </button>
                            <p className=" w-75">Brought to you by</p>
                            <p className=" w-75">Deliveroo </p>
                        </div>{" "}
                    </div>
                </div>
            </section>

            {/* <div
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
                </div> */}
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
