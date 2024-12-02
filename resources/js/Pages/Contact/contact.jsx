import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./contact.css";
import Loader from "@/Components/Loader/Loader";
import InputField from "@/Components/InputField";
import MapAndHotlines from "@/Components/GoogleMap/GoogleMap";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(false);

    const [text, setText] = useState(""); // State to hold the textarea value

    // Handler for changes in the textarea
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <>
                    <section className="our-menu">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-12 text-center">
                                    <p>Contact Us</p>
                                    <h1 className="mb-2">Talk to us</h1>
                                    <p>
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
                                                placeholder="House number and street name"
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
                                                value={text}
                                                onChange={handleChange}
                                                style={{
                                                    padding: "10px",
                                                    fontSize: "16px",
                                                    width: "100%",
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <button
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
