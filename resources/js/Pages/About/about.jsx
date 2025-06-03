import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./about.css";
import Loader from "@/Components/Loader/Loader";
import image1 from "../../../assets/img/suya/The-Suya-Experience.jpg";
import image2 from "../../../assets/img/suya/image.png";
import image3 from "../../../assets/img/suya/Roast-suya.png";
import image4 from "../../../assets/img/suya/Sharwama.png";
import Button from "@/Components/Button";
import { Link } from "@inertiajs/react";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(false);

    // Initialize cartItems from localStorage or products

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="hero-bg text-white text-center d-flex flex-column justify-content-center align-items-center vh-95">
                        {/* Navbar */}
                        <Navbar />
                        <div className="hero-overlay" />

                        {/* Content */}
                        <div style={{ zIndex: 2, padding: "30px 20px" }}>
                            <h2 className="sub-heading-about text-bold text-warning mb-3">
                                {"About Us"}
                            </h2>
                            <h2 className="gro-bold-heading-about text-white">
                                We are bringing the taste of Africa to
                                Manchester.
                            </h2>
                            <p className="lead-about text-center px-3 my-3">
                                We cure your Nostalgia With our Tasty Suya. Get
                                you Spicy Suya anywhere, anytime within
                                Manchester.
                            </p>

                            <div className="d-md-flex d-block gap-md-3 gap-4 d-flex flex-column flex-md-row justify-content-center mt-4 ">
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
                            {/* <ActionButtons />{" "} */}
                        </div>
                    </div>

                    <section
                        style={{
                            padding: "50px 0 0 0",
                            background: "#D64727",
                            color: "#ffffff",
                        }}
                    >
                        <div className="container">
                            <div className="about-cards row align-items-center">
                                {/* Text Section */}
                                <div style={{ padding: "25px 0 0 0" }}>
                                    <h2 className="about-h2">Our Brand</h2>
                                    <p
                                        className="lh-lg"
                                        style={{
                                            maxWidth: "500px",
                                        }}
                                    >
                                        We’re an absolute leader in the
                                        Manchester cuisine-themed restaurants,
                                        with our{" "}
                                        <span style={{ color: "#FFD703" }}>
                                            Naija Spicy Suya.
                                        </span>
                                    </p>
                                </div>
                                {/* Image Section */}
                                <div
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
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div
                                className="row align-items-center"
                                style={{ display: "flex", flexWrap: "wrap" }}
                            >
                                {/* Left Section */}
                                <div
                                    className="col-md-6 col-12"
                                    style={{ padding: "15px 20px" }}
                                >
                                    <h2
                                        className="about-h2"
                                        style={{
                                            maxWidth: "500px",
                                            marginBottom: "20px",
                                            fontSize: "28px",
                                        }}
                                    >
                                        One of the best resturants in
                                        Manchester, UK.
                                    </h2>
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
                                    <img
                                        src={image2}
                                        alt="Suya Republic Team"
                                        style={{
                                            width: "100%",
                                            borderRadius: "8px",
                                        }}
                                    />
                                </div>

                                {/* Right Section */}
                                <div
                                    className="col-md-6 col-12"
                                    style={{ padding: "15px 20px" }}
                                >
                                    <img
                                        src={image4}
                                        alt="Suya Republic Shawarma"
                                        style={{
                                            width: "100%",
                                            borderRadius: "8px",
                                        }}
                                    />
                                    <h2
                                        className="about-h2"
                                        style={{
                                            margin: "20px 0",
                                            fontSize: "28px",
                                        }}
                                    >
                                        Suya Republick is An Experience
                                    </h2>
                                    <p className="lh-lg">
                                        The idea of street food is constantly
                                        evolving and we are taking something
                                        that is already in existence to birth
                                        something more beautiful. We are
                                        bringing the ambience of Africa to
                                        Manchester.
                                    </p>
                                    <h2
                                        className="about-h2"
                                        style={{
                                            margin: "20px 0",
                                            fontSize: "28px",
                                        }}
                                    >
                                        Our Mission
                                    </h2>
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
                        <div className="container">
                            <div className="about-cards-2 row align-items-center">
                                {/* Image Section */}
                                <div
                                    // className="col-md-6 col-12"
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
                                <div style={{ padding: "25px 15px" }}>
                                    <h2 className="about-h2">Our Vision</h2>
                                    <p
                                        className="lh-lg"
                                        style={
                                            {
                                                // maxWidth: "500px",
                                            }
                                        }
                                    >
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

