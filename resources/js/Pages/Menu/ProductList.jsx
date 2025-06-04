import React, { useState } from "react";
import { ArrowUpRight, Trash2 } from "lucide-react";
import suyabeef from "../../../assets/img/suya/Beef-Suya-2.jpg";
import Shawarma from "../../../assets/img/suya/Sharwama.png";
import platter from "../../../assets/img/suya/Full-Platter-1.jpg";
import useCartStore from "@/store/Store";
import ProductModal from "@/Components/ProductModal/ProductModal"; // Make sure the path is correct

const ProductList = ({ products }) => {
    const { cartItems, addItem, removeItem } = useCartStore();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const toggleItemSelection = (item) => {
        const isSelected = cartItems.some((i) => i.id === item.id);
        isSelected ? removeItem(item.id) : addItem(item);
    };

    const handleImageClick = (item) => {
        setSelectedProduct(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setShowModal(false);
    };

    return (
        <div className="container py-5">
            <div className="row g-4 justify-content-center">
                {products.map((item) => {
                    const isSelected = cartItems.some((i) => i.id === item.id);

                    return (
                        <div
                            className="col-12 col-sm-6 col-md-4 my-5"
                            key={item.id}
                        >
                            <div className="text-center text-white">
                                <img
                                    // src={platter}
                                    src={item.image}
                                    alt={item.name}
                                    className="img-fluid rounded cursor-pointer border "
                                    onClick={() => handleImageClick(item)}
                                    style={{
                                        height: "320px",
                                        // width: "320px",
                                        objectFit: "cover",
                                        marginBottom: "10px",
                                        cursor: "pointer",
                                    }}
                                />
                                <div className="px-5">
                                    <p
                                        className="fw-semibold text-left text-uppercase mx- mx-md-0"
                                        style={{
                                            textAlign: "left",
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
                                        {item.name}
                                    </p>

                                    <div className="d-flex justify-content-between  align-items-center gap-2 mx-  mx-md-0">
                                        <button
                                            onClick={() =>
                                                toggleItemSelection(item)
                                            }
                                            className={`d-flex align-items-center gap-2 ${
                                                isSelected
                                                    ? "btn btn-warning text-dark"
                                                    : "btn btn-outline-light"
                                            }`}
                                            style={{
                                                borderRadius: "30px",
                                                fontWeight: "500",
                                                padding: "6px 16px",
                                            }}
                                        >
                                            {isSelected ? (
                                                <>
                                                    Delete Item{" "}
                                                    <Trash2 size={16} />
                                                </>
                                            ) : (
                                                <>
                                                    Add To Cart{" "}
                                                    <ArrowUpRight size={16} />
                                                </>
                                            )}
                                        </button>

                                        <div
                                            style={{
                                                backgroundColor: "white",
                                                color: "#000",
                                                padding: "6px 16px",
                                                borderRadius: "30px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            £{item?.price ?? 0}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Product Modal */}
            {showModal && selectedProduct && (
                <ProductModal
                    show={showModal}
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ProductList;
