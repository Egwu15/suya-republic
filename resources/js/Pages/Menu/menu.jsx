import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import SideBar from "@/components/SideBar";
import useCartStore from "@/store/Store";
import "./menu.css";
import { Link } from "@inertiajs/react";
import ProductModal from "@/Components/ProductModal/ProductModal";
import { useState } from "react";

const OurMenu = ({ products, categories }) => {
    const { cartItems, addItem, removeItem } = useCartStore();
    // State to manage modal visibility and selected product
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Handle opening the modal with the clicked product
    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const toggleItemSelection = (id, product) => {
        const isSelected = cartItems.some((item) => item.id === id);

        if (isSelected) {
            removeItem(id);
        } else {
            addItem(product);
        }
    };

    return (
        <div>
            <div className="hero-bg text-white text-center d-flex flex-column justify-content-center align-items-center vh-95">
                {/* Navbar */}
                <Navbar />
                <div className="hero-overlay" />

                {/* Content */}
                <div style={{ zIndex: 2, paddingBlock: "150px" }}>
                    <h2 className="alpha-heading-2 text-warning mb-3">
                        {"CHOOSE YOUR FAVORITE"}
                    </h2>
                    <h2 className="gro-bold-heading-2 text-white">
                        {"TASTY MENU"}
                    </h2>
                    {/* <p className="lead text-center px-3 mt-3">{desc}</p> */}
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
            <section className="faq-answer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="">
                                <h6>MENU CATEGORIES</h6>

                                <SideBar categories={categories} />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <section className="hot-cards pt-5 pb-5">
                                <div className="container">
                                    <div className="row row-grid">
                                        {products && products.length > 0 ? (
                                            products.map((data) => (
                                                <div
                                                    className="col-md-4 "
                                                    key={data.id}
                                                >
                                                    <div className="card-container text-center">
                                                        <div
                                                            className="card-container-img cursor-pointer"
                                                            style={{
                                                                height: "300px",
                                                                objectFit:
                                                                    "contain",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={() =>
                                                                handleProductClick(
                                                                    data
                                                                )
                                                            } // Open modal on click
                                                        >
                                                            <img
                                                                src={
                                                                    "/storage/" +
                                                                    data.product_image
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
                                                            className="col-md-6 d-flex justify-content-center align-items-center"
                                                            style={{
                                                                margin: "0 auto",
                                                            }}
                                                        >
                                                            {cartItems.some(
                                                                (item) =>
                                                                    item.id ===
                                                                    data.id
                                                            ) ? (
                                                                // Show REMOVE ITEM button if the item is selected
                                                                <button
                                                                    onClick={() =>
                                                                        toggleItemSelection(
                                                                            data.id,
                                                                            data
                                                                        )
                                                                    }
                                                                    style={{
                                                                        background:
                                                                            "#e74c3c",
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
                                                                    REMOVE ITEM
                                                                </button>
                                                            ) : (
                                                                // Show SELECT ITEM button if the item is not selected
                                                                <button
                                                                    onClick={() =>
                                                                        toggleItemSelection(
                                                                            data.id,
                                                                            data
                                                                        )
                                                                    }
                                                                    style={{
                                                                        background:
                                                                            "#56ccf2",
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
                                                                    SELECT ITEM
                                                                </button>
                                                            )}
                                                            {cartItems.some(
                                                                (item) =>
                                                                    item.id ===
                                                                    data.id
                                                            ) && (
                                                                <div className="mx-2">
                                                                    <Link
                                                                        href="/cart"
                                                                        // onClick={
                                                                        //     handleCartClick
                                                                        // }
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
                                                                    </Link>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="col-12 text-center">
                                                <p>No items available.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Modal */}
            {showModal && selectedProduct && (
                <ProductModal
                    show={showModal}
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
            <Footer />
        </div>
    );
};

export default OurMenu;
