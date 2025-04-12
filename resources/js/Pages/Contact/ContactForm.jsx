import React from "react";
import InputField from "@/Components/InputField";
import "./contact.css";
import { useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "@/Components/Loader/Loader";
const ContactForm = ({ data, setData, processing, handleSubmit }) => {
    return (
        <div className="form-wrapper menu-section">
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="firstName">Your Name (required)</label>
                    <InputField
                        type="text"
                        placeholder="Enter first name"
                        value={data.full_name}
                        onChangeMethod={(e) =>
                            setData("full_name", e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address (required)</label>
                    <InputField
                        type="email"
                        placeholder="Enter email address"
                        required
                        value={data.email}
                        onChangeMethod={(e) => setData("email", e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject (required)</label>
                    <InputField
                        type="text"
                        placeholder="Subject of the message"
                        required
                        value={data.subject}
                        onChangeMethod={(e) =>
                            setData("subject", e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Your Message:</label>
                    <textarea
                        id="message"
                        rows="6"
                        placeholder="Enter your message here..."
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                    />
                </div>

                <div className="form-group">
                    {processing ? (
                        <Loader />
                    ) : (
                        <button
                            type="submit"
                            className="submit-btn"
                            onClick={handleSubmit}
                        >
                            Send a Message
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
