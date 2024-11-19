import React, { useEffect } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./menu.css";
import SideBar from "@/components/SideBar";
import Button from "../../components/Button";

const OurMenu = ({ products, categories }) => {
    

    return (
        <div>
            <Navbar />
            <section className="our-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h6 className="mb-2">CHOOSE YOUR FAVORITE</h6>
                            <h1 className="mb-2">MENU</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-answer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="booking">
                                <h6>MENU CATEGORIES</h6>
                                <SideBar categories={categories} />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <section className="hot-cards pt-5 pb-5">
                                <div className="container">
                                    <div className="row row-grid">
                                        {products.data.map((data) => (
                                            <div className="col-md-4">
                                                <div
                                                    key={data.id}
                                                    className="card-container text-center"
                                                >
                                                    <div
                                                        className="card-container-img"
                                                        style={{
                                                            height: "300px",
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                    >
                                                        <img
                                                            src={
                                                                data.product_image
                                                            }
                                                            alt=""
                                                            className=""
                                                            loading="lazy"
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                            }}
                                                        />
                                                    </div>
                                                    <h6
                                                        className="mt-3"
                                                        style={{
                                                            color: "#b7903c",
                                                        }}
                                                    >
                                                        {data.name}
                                                    </h6>
                                                    <h6
                                                        style={{
                                                            color: "#ff0000",
                                                        }}
                                                    >
                                                        £{data.price}
                                                    </h6>
                                                    <div
                                                        className="col-md-6"
                                                        style={{
                                                            margin: "0 auto",
                                                        }}
                                                    >
                                                        <Button
                                                            text="SELECT ITEM"
                                                            handleButtonClick={() => {
                                                                navigate(
                                                                    "/product/1"
                                                                );
                                                            }}
                                                            type="button"
                                                            btnstyle={{
                                                                background:
                                                                    "#56ccf2",
                                                                color: "white",
                                                                margin: "20px 0",
                                                                fontWeight:
                                                                    "600",
                                                                fontSize:
                                                                    "16px",
                                                                lineHeight:
                                                                    "24px",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default OurMenu;
