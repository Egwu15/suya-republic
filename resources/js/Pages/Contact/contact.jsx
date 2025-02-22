import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./contact.css";
import Loader from "@/Components/Loader/Loader";
import InputField from "@/Components/InputField";
import MapAndHotlines from "@/Components/GoogleMap/GoogleMap";
import { useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <Navbar />
            <ToastContainer /> {/* Toast container for notifications */}
            {loading ? (
                <Loader />
            ) : (
                <>
                    <section className="our-menu">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-12 text-center">
                                    <p
                                        style={{
                                            fontSize: "20px",
                                        }}
                                    >
                                        Talk to us
                                    </p>
                                    <h1
                                        className="mb- "
                                        style={{
                                            fontFamily: "rubik wet paint",
                                        }}
                                    >
                                        Contact Us
                                    </h1>
                                    <p
                                        style={{
                                            fontSize: "20px",
                                        }}
                                    >
                                        Hello! We are glad you are here. We'd
                                        love to hear from you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container mt-5">
                        <div className="row">
                            {/* Left Form */}
                            <div className="col-md-6 mb-4">
                                <p className="color-red font-bold">
                                    HAVE QUESTIONS?
                                </p>
                                <h2 className="mb-4 font-bold">
                                    Send us a message, Call or visit us
                                </h2>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <label
                                                htmlFor="firstName"
                                                className="form-label"
                                            >
                                                Your Name (required)
                                            </label>
                                            <InputField
                                                type="text"
                                                placeholder="Enter first name"
                                                value={data.full_name}
                                                onChangeMethod={(e) =>
                                                    setData(
                                                        "full_name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label
                                                htmlFor="email"
                                                className="form-label"
                                            >
                                                Email Address (required)
                                            </label>
                                            <InputField
                                                type="email"
                                                placeholder="Enter email address"
                                                required
                                                value={data.email}
                                                onChangeMethod={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label
                                                htmlFor="streetAddress"
                                                className="form-label"
                                            >
                                                Subject (required)
                                            </label>
                                            <InputField
                                                type="text"
                                                placeholder="Subject of the message"
                                                required
                                                value={data.subject}
                                                onChangeMethod={(e) =>
                                                    setData(
                                                        "subject",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="textAreaInput">
                                                Your Message:
                                            </label>
                                            <textarea
                                                id="textAreaInput"
                                                rows="5"
                                                cols="50"
                                                placeholder="Enter your message here..."
                                                value={data.message}
                                                onChange={(e) =>
                                                    setData(
                                                        "message",
                                                        e.target.value
                                                    )
                                                }
                                                style={{
                                                    padding: "10px",
                                                    fontSize: "16px",
                                                    width: "100%",
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            {processing ? (
                                                <Loader />
                                            ) : (
                                                <button
                                                    onClick={(e) =>
                                                        handleSubmit(e)
                                                    }
                                                    style={{
                                                        background: "#d2401e",
                                                        color: "white",
                                                        margin: "20px 0",
                                                        fontWeight: "600",
                                                        fontSize: "16px",
                                                        lineHeight: "24px",
                                                        border: "none",
                                                        padding: "10px 20px",
                                                        borderRadius: "5px",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Send
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Right Form */}
                            <div className="col-md-6 mb-4">
                                <MapAndHotlines />
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
