import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./contact.css";
import Loader from "@/Components/Loader/Loader";
import MapAndHotlines from "@/Components/GoogleMap/GoogleMap";
import { Link, useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./ContactForm";
import Button from "@/Components/Button";

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
                    <div className="hero-bg contact-sec text-white text-center d-flex flex-column justify-content-center align-items-center">
                        {/* Navbar */}
                        <Navbar />
                        <div className="hero-overlay" />

                        {/* Content */}
                        <div className="contact-head">
                            <h2 className="sub-heading-about text-bold text-warning mb-3">
                                {"Contact Us"}
                            </h2>
                            <h3 className="gro-bold-heading col-md-7 col-12 mx-auto text-center text-white">
                                Hello! We are glad you are here. We'd love to
                                hear from you.{" "}
                            </h3>

                            <div className="d-md-flex d-inline-block gap-md-3 gap-4 d-flex flex-column flex-md-row justify-content-center mt-4">
                                <Link
                                    href="/order-online"
                                    style={{
                                        marginLeft: ".5rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <Button text="ORDER ONLINE" type="button" />
                                </Link>
                                <Link
                                    href="/order-online"
                                    style={{ marginLeft: ".5rem" }}
                                >
                                    <Button
                                        text="PICKUP IN STORE"
                                        type="button"
                                        className="Button_Wrap_secondary"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <section className=" p">
                        <div className="row red-black ">
                            {/* Left Form */}
                            <div className="col-md-12 mb-4">
                                <div className="pt-5 mb-4 ">
                                    <p
                                        className="text-center text-white font-bold"
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
                                        HAVE QUESTIONS?
                                    </p>
                                    <h2
                                        className="mb-4 text-center text-white font-bold"
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
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
                                            <div
                                                className="mb-4"
                                                style={{
                                                    fontFamily:
                                                        "Poppins, sans-serif",
                                                }}
                                            >
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
                                            <div
                                                className="mb-4"
                                                style={{
                                                    fontFamily:
                                                        "Poppins, sans-serif",
                                                }}
                                            >
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
                                            <div
                                                style={{
                                                    fontFamily:
                                                        "Poppins, sans-serif",
                                                }}
                                            >
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
