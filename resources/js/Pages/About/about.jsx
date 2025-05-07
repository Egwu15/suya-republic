import { useEffect, useState } from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./about.css";
import Loader from "@/Components/Loader/Loader";
import image1 from "../../../assets/img/suya/The-Suya-Experience.jpg";
import image2 from "../../../assets/img/suya/image.png";
import image3 from "../../../assets/img/suya/Roast-suya.png";
import image4 from "../../../assets/img/suya/Sharwama.png";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(false);

    // Initialize cartItems from localStorage or products

    return (
        <div>
            {/* <Navbar /> */}
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="hero-bg text-white text-center d-flex flex-column justify-content-center align-items-center vh-95">
                        {/* Navbar */}
                        <Navbar />
                        <div className="hero-overlay" />

                        {/* Content */}
                        <div style={{ zIndex: 2, paddingBlock: "150px" }}>
                            <h2 className="sub-heading text-warning mb-3">
                                {"About Us"}
                            </h2>
                            <h2 className="gro-bold-heading text-white">
                                We are bringing the taste of Africa to
                                Manchester.
                            </h2>
                            <p className="lead text-center px-3 mt-3">
                                We cure your Nostalgia With our Tasty Suya.
                            </p>
                            <p className="lead text-center px-3 ">
                                Get you Spicy Suya anywhere, anytime within the
                                UK
                            </p>
                            <div className="d-md-flex d-block gap-md-3 gap-4 d-flex flex-column flex-md-row ">
                                <button className="header-action-btn order-btn-hero">
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
                            {/* <ActionButtons />{" "} */}
                        </div>
                    </div>
                    {/* <section className="our-menu">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-12 text-center">
                                    <p
                                        style={{
                                            fontSize: "20px",
                                        }}
                                    >
                                        {" "}
                                        Our Brand
                                    </p>
                                    <h1
                                        className="mb-2"
                                        style={{
                                            fontFamily: "Dynapuff",
                                        }}
                                    >
                                        About Us
                                    </h1>
                                    <p
                                        style={{
                                            fontSize: "20px",
                                        }}
                                    >
                                        We are bringing the taste of Africa to
                                        Manchester.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section style={{ margin: "50px 0" }}>
                        <div className="container">
                            <div
                                className="row align-items-center"
                                style={{ display: "flex", flexWrap: "wrap" }}
                            >
                                {/* Image Section */}
                                <div
                                    className="col-md-6 col-12"
                                    style={{ padding: "15px" }}
                                >
                                    <img
                                        src={image1}
                                        alt="Suya Republic Team"
                                        style={{
                                            width: "100%",
                                            borderRadius: "8px",
                                        }}
                                    />
                                </div>

                                {/* Text Section */}
                                <div
                                    className="col-md-6 col-12"
                                    style={{ padding: "45px" }}
                                >
                                    <p className="color-red font-bold">
                                        Suya Republick
                                    </p>
                                    <h2 className="font-bold">OUR BRAND</h2>
                                    <p className="lh-lg">
                                        The first Suya Republic started out in
                                        the streets of Lagos, Nigeria in 2018.
                                        Our main brand involves bringing
                                        affordable, healthy and fresh from the
                                        grill various African street delicacies
                                        to meet the demands of our customers.
                                        Our meals are made with natural, fresh
                                        and organic spices and recipes from
                                        Africa. We pride ourselves in hands-on
                                        commitment to community development and
                                        utmost satisfaction of our customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div
                                className="row align-items-center"
                                style={{ display: "flex", flexWrap: "wrap" }}
                            >
                                {/* Image Section */}
                                <div
                                    className="col-md-6 col-12"
                                    style={{ padding: "15px" }}
                                >
                                    <img
                                        src={image2}
                                        alt="Suya Republic Team"
                                        style={{
                                            width: "100%",
                                            borderRadius: "8px",
                                        }}
                                    />
                                </div>

                                {/* Text Section */}
                                <div
                                    className="col-md-6 col-12"
                                    style={{ padding: "45px" }}
                                >
                                    <h2 className="font-bold">
                                        SUYA REPUBLICK IS <br />
                                        AN EXPERIENCE
                                    </h2>
                                    <p className="lh-lg">
                                        The idea of street food is constantly
                                        evolving and we are taking something
                                        that is already in existence to birth
                                        something more beautiful. We are
                                        bringing the ambience of Africa to
                                        Manchester.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div
                                className="row align-items-center"
                                style={{ display: "flex", flexWrap: "wrap" }}
                            >
                                {/* Image Section */}
                                <div
                                    className="col-md-6 col-12"
                                    style={{ padding: "15px" }}
                                >
                                    <img
                                        src={image3}
                                        alt="Suya Republic Team"
                                        style={{
                                            width: "100%",
                                            borderRadius: "8px",
                                        }}
                                    />
                                </div>

                                {/* Text Section */}
                                <div
                                    className="col-md-6 col-12"
                                    style={{ padding: "45px" }}
                                >
                                    <h2 className="font-bold">OUR MISSION</h2>
                                    <p className="lh-lg">
                                        Our corporate mission is to provide
                                        optimal satisfaction for our customers
                                        through the provision and delivery of
                                        quality, delicious and affordable meals
                                        within a soul-reaching environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div
                                className="row align-items-center"
                                style={{ display: "flex", flexWrap: "wrap" }}
                            >
                                {/* Image Section */}
                                <div
                                    className="col-md-6 col-12"
                                    style={{ padding: "15px" }}
                                >
                                    <img
                                        src={image4}
                                        alt="Suya Republic Team"
                                        style={{
                                            width: "100%",
                                            borderRadius: "8px",
                                        }}
                                    />
                                </div>

                                {/* Text Section */}
                                <div
                                    className="col-md-6 col-12"
                                    style={{ padding: "45px" }}
                                >
                                    <p className="lh-lg">
                                        We aim to target indigenous tribes in
                                        diaspora who have had a nostalgic
                                        annotation to their indigenous meals. We
                                        have an array of several traditional
                                        dishes ranging from Suya (a popular
                                        indigenous snack from the Northern Parts
                                        of Nigeria), Shawarma (fashioned
                                        according to the taste of the people of
                                        Lagos State, Western Nigeria), Asun
                                        (spicy goat meat which originates from
                                        the South-Western region of Nigeria),
                                        Nyama Choma with Kachumbari Sauce (a
                                        popular meal which hails from Kenya,
                                        East Africa) and so many more options.
                                    </p>
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

export default About;
