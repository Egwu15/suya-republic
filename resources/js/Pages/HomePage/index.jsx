import spiceText from "../../../assets/img/suya/Suya-Spice-Text-1.png";
import spiceImage from "../../../assets/img/suya/Suya-Spice-Banner.jpg";
import spiceImageGif from "../../../assets/img/suya/Suya-Spice-Banner-gif.gif";
import platterImg from "../../../assets/img/suya/Full-Platter-1.jpg";
import brandLogo from "../../../assets/img/suya/Banner-brand.jpg";
import brandVideo from "../../../assets/img/suya/SUYA-REPUBLICK-VIDEO_vid.mp4";
import Navbar from "@/components/NavBar/index";

import "./index.css";
import Button from "@/components/Button";
import Footer from "@/components/Footer/index";
import { Link } from "@inertiajs/react";
import useCartStore from "@/store/Store";
import Carousel from "@/Components/Carousel/Carousel";

export const HomeComponent = () => {
    // const { loadUserFromLocalStorage } = useCartStore();

    // useEffect(() => {
    //     loadUserFromLocalStorage();
    // }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // dots: true,
                    autoplay: false,
                },
            },
        ],
    };

    return (
        <div id="top" style={{ width: "100vw", overflowX: "hidden" }}>
            <Navbar />
            <section className="">
                <div className="chatwithus">
                    <div>
                        <a
                            href="https://wa.me/447378837837"
                            target="_blank"
                            rel="noreferrer"
                            className="chatwithusLink"
                        >
                            Chat with us!
                        </a>
                    </div>
                </div>
            </section>
            <Carousel />

            <section className="hot-trips pt-5 pb-5">
                <div className="container">
                    <div className=" row d-flex justify-content-around align-items-center bg-light py-5 px-3">
                        {/* Order for Collect Section */}
                        <div
                            className="text-center col-12 mb-5 "
                            style={{ maxWidth: "400px" }}
                        >
                            <h1
                                className="fw-bold fs-"
                                style={{
                                    fontFamily: "'Pacifico', cursive",
                                    fontSize: "38px",
                                }}
                            >
                                Order for Collect
                            </h1>
                            <p className="fs-5 text-secondary my-2">
                                Please plan ahead and get your PERI-PERI to go,
                                from our restaurant location.
                            </p>
                            <Link
                                href="/order-online"
                                className="text-decoration-none"
                            >
                                <span
                                    className="btn btn-danger fw-bold px-4 py-2"
                                    style={{
                                        borderRadius: "8px",
                                        fontSize: "14px",
                                    }}
                                >
                                    ORDER COLLECT
                                </span>
                            </Link>
                        </div>

                        {/* Delivery Section */}
                        <div
                            className="text-center col-12 mt-4"
                            style={{ maxWidth: "400px" }}
                        >
                            <h1
                                className="fw-bold fs-"
                                style={{
                                    fontFamily: "'Pacifico', cursive",
                                    fontSize: "38px",
                                }}
                            >
                                Suya Republic's Delivery
                            </h1>

                            <p className="fs-5 text-secondary my-2">
                                Our delivery zones shift with demand—check now
                                to see if Suya Republic is bringing the flavour
                                to your doorstep!
                            </p>
                            <Link
                                href="/order-online"
                                className="text-decoration-none"
                            >
                                <span
                                    className="btn btn-danger fw-bold px-4 py-2"
                                    style={{
                                        borderRadius: "8px",
                                        fontSize: "14px",
                                    }}
                                >
                                    ORDER DELIVERY
                                </span>
                            </Link>
                            {/* <div className="mt-3">
                                <img
                                    src="/images/deliveroo-logo.png"
                                    alt="Deliveroo logo"
                                    className="img-fluid"
                                    style={{ height: "40px" }}
                                />
                            </div> */}
                            <div className="mt-3">
                                <span className="text-muted font-12 mb-0">
                                    brought to you by
                                </span>
                                <h3>Deliveroo</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hot-trips pt-5 pb-5">
                <div className="container">
                    <div className="row row-grid">
                        <div className="col-md-12 align-self-center">
                            <div className="prices-container text-center ">
                                <h3
                                    style={{
                                        color: "red",
                                        fontFamily: "Dynapuff",
                                        fontWeight: "300",
                                    }}
                                >
                                    S U Y A R E P U B L I C K
                                </h3>
                                <h1
                                    className="font-12"
                                    style={{
                                        fontFamily: "Creepster",
                                    }}
                                >
                                    <b>
                                        We are bringing the taste of Africa{" "}
                                        <br />
                                        to Manchester.
                                    </b>
                                </h1>
                                <p>
                                    Our meals are made with natural, fresh and
                                    organic spices and recipes from Africa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hot-cards pt-5 pb-5">
                <div className="container">
                    <div className="row row-grid">
                        <div className="col-md-4">
                            <div className="card-container text-left">
                                <div className="card-container-img">
                                    <img
                                        src={spiceImageGif}
                                        alt=""
                                        className=""
                                        loading="lazy"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <h3
                                    className="py-2"
                                    style={{
                                        fontFamily: "Kavoon",
                                    }}
                                >
                                    <b>SUYA SPICE</b>
                                </h3>
                                <p>
                                    Get your Suya spice anywhere anyime within
                                    UK
                                </p>
                                <Link
                                    href="/order-online"
                                    className="text-decoration-none order-btn p-0 m-0"
                                    // className="suggest-link drop-down-option nav-test text-left"
                                    // className="blue-btn-nav nav-test text-white scale-effect"
                                >
                                    {" "}
                                    <span
                                        className="text-left order-btn"
                                        style={{
                                            background: "#d2401e",
                                            borderRadius: "8px",
                                            padding: "10px 20px",
                                            fontWeight: 600,
                                            fontSize: "14px",
                                            color: "white",
                                            textDecoration: "none",
                                            display: "inline-block",
                                        }}
                                    >
                                        ORDER NOW
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-container text-left">
                                <div className="card-container-img">
                                    <img
                                        src={platterImg}
                                        alt=""
                                        className=""
                                        loading="lazy"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <h3
                                    className="py-2"
                                    style={{
                                        fontFamily: "Kavoon",
                                    }}
                                >
                                    <b>OUR MENU</b>
                                </h3>
                                <p>
                                    Our meals are made with natural, fresh and
                                    organic spices and recipes from Africa.
                                </p>

                                <Link
                                    href={"/menu"}
                                    className="text-decoration-none order-btn p-0 m-0"
                                    // className="suggest-link drop-down-option nav-test text-left"
                                    // className="blue-btn-nav nav-test text-white scale-effect"
                                >
                                    {" "}
                                    <span
                                        className="text-left order-btn  "
                                        style={{
                                            background: "#d2401e",
                                            borderRadius: "8px",
                                            padding: "10px 20px",
                                            fontWeight: 600,
                                            fontSize: "14px",
                                            color: "white",
                                            textDecoration: "none",
                                            display: "inline-block",
                                        }}
                                    >
                                        OUR MENU
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-container text-left">
                                <div className="card-container-img">
                                    <img
                                        src={brandLogo}
                                        alt=""
                                        className=""
                                        loading="lazy"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <h3
                                    className="py-2"
                                    style={{
                                        fontFamily: "Kavoon",
                                    }}
                                >
                                    <b>OUR BRAND</b>
                                </h3>
                                <p>
                                    The first Suya Republick started out in the
                                    streets of Lagos, Nigeria in 2018.
                                </p>

                                <Link
                                    href="/contact"
                                    className="text-decoration-none order-btn p-0 m-0 "
                                >
                                    <span
                                        style={{
                                            background: "#d2401e",
                                            borderRadius: "8px",
                                            padding: "10px 20px",
                                            fontWeight: 600,
                                            fontSize: "14px",
                                            color: "white",
                                            textDecoration: "none",
                                            display: "inline-block", // Ensures it doesn't take full width
                                        }}
                                    >
                                        LEARN MORE
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="app-section">
                <video
                    className="videoTag"
                    autoPlay
                    loop
                    muted
                    style={{
                        width: "100%",
                        // height: "100%"
                    }}
                >
                    <source src={brandVideo} type="video/mp4" />
                </video>
            </section>

            {/* <div
                className="col-md-12 "
                style={{
                    margin: "10px auto",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Link
                    href="/menu"
                    className="button-design text-white"
                    // handleButtonClick={handleRoundWay}
                    style={{
                        background: "#D2401E",
                        color: "white",
                        margin: "20px 0",
                        // fontFamily: "Euclid Circular B",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "24px",
                        padding: "10px",
                        borderRadius: "5px",
                        textDecoration: "none",
                    }}
                >
                    MAKE YOUR ORDER
                </Link>
            </div> */}

            <Footer />
        </div>
    );
};
export default HomeComponent;
