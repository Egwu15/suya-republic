import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./contact.css";
import Loader from "@/Components/Loader/Loader";
import MapAndHotlines from "@/Components/GoogleMap/GoogleMap";
import { useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./ContactForm";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(false);

    const { data, setData, post, processing, reset } = useForm({
        full_name: "",
        email: "",
        subject: "",
        message: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/submitContact", {
            data: data,
            onError: (error) => {
                console.log(error);
                toast.error("An error occurred. Please try again.");
            },
            onSuccess() {
                reset();
                toast.success(
                    "Message sent successfully! We will get back to you soon."
                );
            },
        });
    }

    return (
        <div>
            <ToastContainer /> {/* Toast container for notifications */}
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="hero-bg text-white text-center d-flex flex-column justify-content-center align-items-center vh-100">
                        {/* Navbar */}
                        <Navbar />
                        <div className="hero-overlay" />

                        {/* Content */}
                        <div style={{ zIndex: 2, paddingBlock: "150px" }}>
                            <h2 className="alpha-heading-23 text-warning mb-3">
                                Contact Us
                            </h2>
                            <h2 className="gro-bold-heading-23 text-white">
                                Hello! We are glad you are here. We'd love to
                                hear from you.{" "}
                            </h2>
                            {/* <p className="lead text-center px-3 mt-3">
                                Hello! We are glad you are here. We'd love to
                                hear from you.{" "}
                            </p> */}

                            <div className="d-md-flex d-inline-block gap-md-3 gap-4 d-flex flex-column flex-md-row justify-content-center ">
                                <button className="header-action-btn order-btn-hero inline">
                                    ORDER ONLINE{" "}
                                    <span className="material-symbols-outlined material">
                                        arrow_outward
                                    </span>
                                </button>
                                <button className="header-action-btn pickup-btn">
                                    PICKUP IN STORE{" "}
                                    <span className="material-symbols-outlined material">
                                        arrow_outward
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <section className=" p">
                        <div className="row red-black ">
                            {/* Left Form */}
                            <div className="col-md-12 mb-4">
                                <div className="pt-5 mb-4 ">
                                    <p className="text-center text-white font-bold">
                                        HAVE QUESTIONS?
                                    </p>
                                    <h2 className="mb-4 text-center text-white font-bold">
                                        Send us a message, Call or visit us
                                    </h2>
                                </div>

                                <ContactForm
                                    data={data}
                                    setData={setData}
                                    processing={processing}
                                    handleSubmit={handleSubmit}
                                />
                            </div>

                            {/* Right Form */}
                            <div className="col-md-12 mb-4">
                                <div className="container-fluid px-0 ">
                                    <div className="row g-0">
                                        {/* Left Column */}
                                        <div className="col-lg-6 bg-maroo text-white p-5 d-flex flex-column justify-content-center">
                                            <div className="mb-4">
                                                <h4 className="text-gold fw-bold">
                                                    Opening Hours
                                                </h4>
                                                <p className="mb-1">
                                                    Tuesday to Sunday
                                                </p>
                                                <p className="mb-4">
                                                    05:00 PM to 11:00 PM
                                                </p>
                                                <p className="mb-1">Monday</p>
                                                <p>Closed</p>
                                            </div>
                                            <div className="mb-4">
                                                <h4 className="text-gold fw-bold">
                                                    Location
                                                </h4>
                                                <p className="mb-1">
                                                    303 Chester Rd
                                                </p>
                                                <p>
                                                    303 Chester Rd, Manchester
                                                    M15 4EY, UK
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-gold fw-bold">
                                                    Contact us
                                                </h4>
                                                <p className="mb-1">
                                                    07378 837837
                                                </p>
                                                <p>01616 980898</p>
                                            </div>
                                        </div>

                                        {/* Right Column */}
                                        <div className="col-lg-6 map-container">
                                            <MapAndHotlines />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
            <Footer />
        </div>
    );
}

export default Contact;
