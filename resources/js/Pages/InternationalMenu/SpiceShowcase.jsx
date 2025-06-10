import React, { useState } from "react";
import useCartStore from "@/store/Store";
import ProductModal from "@/Components/ProductModal/ProductModal"; // Your modal component
import "./spices.css";
import Shawarma from "../../../assets/img/suya/Sharwama.png";

const SpiceShowcase = ({ products }) => {
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
        <section className="spice-section text-white text-center py-5">
            <h4 className="spices-notch fw-bold text-dark py-6 mt-5">
                Top-Notch Spices
            </h4>
            <h1 className="spices-notch-2 display-5 fw-bold text-white mt-2">
                It worth mouth watering.
            </h1>

            <div className="container mt-5 ">
                <div className="row justify-content-center gy-5">
                    {products.map((spice) => {
                        const isSelected = cartItems.some(
                            (item) => item.id === spice.id
                        );
                        return (
                            <div
                                className="col-12 col-sm-6 col-md-4"
                                key={spice.id}
                            >
                                <div className=" spice-card border-0 mx-auto text-center">
                                    <div
                                        className="card-img-top spice-img"
                                        style={{
                                            cursor: "pointer",
                                            overflow: "hidden",
                                        }}
                                        onClick={() =>
                                            handleProductClick(spice)
                                        }
                                    >
                                        <img
                                            // src={Shawarma}
                                            src={`/storage/${item.product_image}`}
                                            alt={spice.name}
                                            className="img-fluid w-100 rounded"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="card-bod  text-left spice-section">
                                        <h5 className="card-title fw-bold text-dark py-4">
                                            {spice.name}
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                                            <button
                                                className={`btn rounded-pill fw-semibold px-4 py-2 d-flex align-items-center gap-2 ${
                                                    isSelected
                                                        ? "btn-warning text-dark  "
                                                        : "background-red text-white"
                                                }`}
                                                onClick={() =>
                                                    toggleItemSelection(
                                                        spice.id,
                                                        spice
                                                    )
                                                }
                                                // style={{ minWidth: "160px" }}
                                            >
                                                {isSelected ? (
                                                    <>
                                                        Delete Item{" "}
                                                        <i className="bi bi-trash3-fill"></i>
                                                    </>
                                                ) : (
                                                    <>
                                                        Add To Cart{" "}
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </>
                                                )}
                                            </button>
                                            <span className="btn btn-light rounded-pill px-4 py-2 fw-bold">
                                                £{spice?.price  ?? ''}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Product Modal */}
            {showModal && selectedProduct && (
                <ProductModal
                    show={showModal}
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
};

export default SpiceShowcase;
