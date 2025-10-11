import React from "react";

const MapAndHotlines = () => {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
            {/* Map Section */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.4123871562027!2d-2.2511235842331626!3d53.46333597999915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1f64b1705b5%3A0xef9b5a25e1608d53!2s303%20Chester%20Rd%2C%20Manchester%20M15%204EY%2C%20UK!5e0!3m2!1sen!2sus!4v1698414883621!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
            </div>

            {/* Hotlines Section */}
            <div
                style={{
                    textAlign: "left",
                    fontSize: "1.2em",
                    marginTop: "20px",
                }}
            >
                <h2 style={{ marginBottom: "10px" }} className="font-bold">
                    Hotlines
                </h2>
                <p style={{ margin: "5px 0" }}>
                    {" "}
                    <strong>07378 837837</strong>
                </p>
                <p style={{ margin: "5px 0" }}>
                    {" "}
                    <strong>01616 980898</strong>
                </p>
            </div>
            <div
                style={{
                    textAlign: "left",
                    fontSize: "1.2em",
                    marginTop: "20px",
                }}
            >
                <h2 style={{ marginBottom: "10px" }} className="font-bold">
                    {" "}
                    Opening Hours
                </h2>
                <p style={{ margin: "5px 0" }}>
                    {" "}
                    <strong>Monday</strong> – Closed
                </p>
                <p style={{ margin: "5px 0" }}>
                    <strong>Tuesday:</strong> 4:00pm – 11:00pm
                </p>
                <p style={{ margin: "5px 0" }}>
                    <strong>Wednesday:</strong> 4:00pm – 11:00pm
                </p>
                <p style={{ margin: "5px 0" }}>
                    <strong>Thursday:</strong> 4:00pm – 11:00pm
                </p>
                <p style={{ margin: "5px 0" }}>
                    <strong>Friday:</strong> 4:00pm – 11:00pm
                </p>
                <p style={{ margin: "5px 0" }}>
                    <strong>Saturday:</strong> 4:00pm – 11:00pm
                </p>
                <p style={{ margin: "5px 0" }}>
                    <strong>Sunday:</strong> 4:00pm – 11:00pm
                </p>
            </div>
        </div>
    );
};

export default MapAndHotlines;
