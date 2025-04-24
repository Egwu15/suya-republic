import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import useCartStore from "@/store/Store";
import "./menu.css";
import { useState } from "react";
import ProductList from "./ProductList";
import MobileCategoryScroll from "@/Components/MobileCategoryScroll";

const OurMenu = ({ products, categories }) => {
    const { cartItems, addItem, removeItem } = useCartStore();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const toggleItemSelection = (id, product) => {
        const isSelected = cartItems.some((item) => item.id === id);
        isSelected ? removeItem(id) : addItem(product);
    };

    return (
        <div>
            <div
                className="hero-bg text-white text-center d-flex flex-column justify-content-center align-items-center "
                style={{
                    height: "700px",
                }}
            >
                <Navbar />
                <div className="hero-overlay" />
                <div style={{ zIndex: 2, paddingBlock: "150px" }}>
                    <h2 className="alpha-heading-2 text-warning mb-3">
                        {"CHOOSE YOUR FAVORITE"}
                    </h2>
                    <h2 className="gro-bold-heading-2 text-white">
                        {"TASTY MENU"}
                    </h2>
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
                </div>
            </div>

            <section className="menu-section">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-12 pt-4">
                            <h2 className="text-center text-white mb-4 py-4">
                                OUR TOP MENU
                            </h2>
                            <MobileCategoryScroll categories={categories} />
                        </div>

                        <ProductList products={products} />

                        {/* <div className="col-md-10">
                            <section className="hot-cards pt-5 pb-5">
                                <div className="container">
                                    <div className="row row-grid">
                                        {products && products.length > 0 ? (
                                            products.map((data) => {
                                                const isSelected =
                                                    cartItems.some(
                                                        (item) =>
                                                            item.id === data.id
                                                    );

                                                return (
                                                    <div
                                                        className="col-md-4"
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
                                                                }
                                                            >
                                                                <img
                                                                    src={`/storage/${data.product_image}`}
                                                                    alt={
                                                                        data.name
                                                                    }
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
                                                                <button
                                                                    onClick={() =>
                                                                        toggleItemSelection(
                                                                            data.id,
                                                                            data
                                                                        )
                                                                    }
                                                                    style={{
                                                                        background:
                                                                            isSelected
                                                                                ? "#f1c40f"
                                                                                : "#ffffff",
                                                                        color: isSelected
                                                                            ? "#000000"
                                                                            : "#000000",
                                                                        margin: "20px 0",
                                                                        fontWeight:
                                                                            "600",
                                                                        fontSize:
                                                                            "14px",
                                                                        lineHeight:
                                                                            "14px",
                                                                        border: isSelected
                                                                            ? "none"
                                                                            : "1px solid #ccc",
                                                                        padding:
                                                                            "10px 15px",
                                                                        cursor: "pointer",
                                                                        borderRadius:
                                                                            "30px",
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        gap: "8px",
                                                                    }}
                                                                >
                                                                    {isSelected ? (
                                                                        <>
                                                                            Delete
                                                                            Item{" "}
                                                                            <i className="bi bi-trash"></i>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            Select
                                                                            Item{" "}
                                                                            <i className="bi bi-arrow-up-right"></i>
                                                                        </>
                                                                    )}
                                                                </button>

                                                                {isSelected && (
                                                                    <div className="mx-2">
                                                                        <Link
                                                                            href="/cart"
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
                                                );
                                            })
                                        ) : (
                                            <div className="col-12 text-center">
                                                <p>No items available.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* {showModal && selectedProduct && (
                <ProductModal
                    show={showModal}
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )} */}

            <Footer />
        </div>
    );
};

export default OurMenu;
