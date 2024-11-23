import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import SideBar from "@/components/SideBar";
import dummy from "../../../assets/img/suya/Lamb-Suya-3.jpg";
import "./menu.css";

const OurMenu = ({ products, categories }) => {
    const [selectedItems, setSelectedItems] = useState({}); // State to track selected items
    // const navigate = useNavigate(); // Initialize useNavigate

    const toggleItemSelection = (id) => {
        setSelectedItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle the selection state for the given item ID
        }));
    };

    // const handleCheckout = () => {
    //     navigate("/checkout"); // Navigate to the checkout page
    // };

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
                                            <div
                                                className="col-md-4"
                                                key={data.id}
                                            >
                                                <div className="card-container text-center">
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
                                                                // data.product_image ||
                                                                dummy
                                                            }
                                                            alt={data.name}
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
                                                        className="col-md-6 d-flex justify-content-between align-items-center"
                                                        style={{
                                                            margin: "0 auto",
                                                        }}
                                                    >
                                                        <button
                                                            onClick={() =>
                                                                toggleItemSelection(
                                                                    data.id
                                                                )
                                                            }
                                                            style={{
                                                                background:
                                                                    selectedItems[
                                                                        data.id
                                                                    ]
                                                                        ? "#e74c3c"
                                                                        : "#56ccf2",
                                                                color: "white",
                                                                margin: "20px 0",
                                                                fontWeight:
                                                                    "600",
                                                                fontSize:
                                                                    "14px",
                                                                lineHeight:
                                                                    "14px",
                                                                border: "none",
                                                                padding:
                                                                    "10px 15px",
                                                                cursor: "pointer",
                                                                borderRadius:
                                                                    "5px",
                                                            }}
                                                        >
                                                            {selectedItems[
                                                                data.id
                                                            ]
                                                                ? "REMOVE ITEM"
                                                                : "SELECT ITEM"}
                                                        </button>
                                                        {selectedItems[
                                                            data.id
                                                        ] && (
                                                            <div>
                                                                <a
                                                                    href={
                                                                        "/checkout"
                                                                    } // Navigate on click
                                                                    style={{
                                                                        display:
                                                                            "inline-block",
                                                                        background:
                                                                            "#27ae60",
                                                                        color: "white",
                                                                        margin: "10px 0",
                                                                        fontWeight:
                                                                            "600",
                                                                        fontSize:
                                                                            "16px",
                                                                        lineHeight:
                                                                            "24px",
                                                                        border: "none",
                                                                        padding:
                                                                            "5px 10px",
                                                                        cursor: "pointer",
                                                                        borderRadius:
                                                                            "5px",
                                                                        textDecoration:
                                                                            "none",
                                                                    }}
                                                                >
                                                                    <i
                                                                        className="bi bi-cart-plus text-white"
                                                                        style={{
                                                                            fontSize:
                                                                                "14px",
                                                                            marginRight:
                                                                                "4px",
                                                                        }}
                                                                    ></i>
                                                                </a>
                                                            </div>
                                                        )}
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
