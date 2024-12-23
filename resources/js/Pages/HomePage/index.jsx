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
                    <div className="row row-grid">
                        <div className="col-md-12 align-self-center">
                            <div className="prices-container text-center ">
                                <h3 style={{ color: "red" }}>
                                    S U Y A R E P U B L I C K
                                </h3>
                                <h1 className="font-12">
                                    <b>
                                        We are bringing the taste of Africa to
                                        Manchester.
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
                                <h3 className="py-2">
                                    <b>SUYA SPICE</b>
                                </h3>
                                <p>
                                    Get your Suya spice anywhere anyime within
                                    UK
                                </p>
                                <Link
                                    href={"/orderOnline"}
                                    className="suggest-link drop-down-option nav-test text-left"
                                    // activeClassName="active"
                                >
                                    {" "}
                                    <h6
                                        className="text-left"
                                        style={{
                                            color: "#b7903c",
                                        }}
                                    >
                                        ORDER NOW
                                    </h6>
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
                                <h3 className="py-2">
                                    <b>OUR MENU</b>
                                </h3>
                                <p>
                                    Our meals are made with natural, fresh and
                                    organic spices and recipes from Africa.
                                </p>
                                <Link
                                    href={"/menu"}
                                    className="suggest-link drop-down-option nav-test"
                                    exact
                                    // activeClassName="active"
                                >
                                    <h6 style={{ color: "#b7903c" }}>
                                        OUR MENU
                                    </h6>
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
                                <h3 className="py-2">
                                    <b>OUR BRAND</b>
                                </h3>
                                <p>
                                    The first Suya Republick started out in the
                                    streets of Lagos, Nigeria in 2018.
                                </p>
                                <h6 style={{ color: "#b7903c" }}>LEARN MORE</h6>
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

            <div
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
            </div>

            <Footer />
        </div>
    );
};
export default HomeComponent;
