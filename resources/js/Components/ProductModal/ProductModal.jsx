import { useEffect, useState } from "react";
import { COLOR_RED } from "@/utils/constant";
import imag4 from "../../../assets/img/suya/Roast-suya.png";
import useCartStore from "@/store/Store";

const ProductModal = ({ show, product, onClose }) => {
    const { cartItems, addItem, removeItem } = useCartStore();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to check if product is already in cart
    const isInCart = (id) => cartItems.some((item) => item.id === id);

    return (
        <div
            className="modal fade show"
            tabIndex="-1"
            style={{
                display: show ? "block" : "none",
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 1000000
            }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{product?.name}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>

                    <div className="modal-body">
                        <section className="product">
                            <div className="container">
                                <div className="row row-grid">
                                    <div
                                        className="col-md-12 card-container-img cursor-pointer"
                                        style={{
                                            height: "200px",
                                            objectFit: "contain",
                                        }}
                                    >
                                        <img
                                            // Uncomment below if using product image from storage
                                            src={
                                                "/storage/" +
                                                product?.product_image
                                            }
                                            // src={imag4}
                                            alt={product?.name}
                                            loading="lazy"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </div>

                                    <div className="col-md-12 right-card d-flex justify-content-center align-items-center ">
                                        <div>
                                            <h2
                                                className="mt-3"
                                                style={{
                                                    textAlign: "center",
                                                }}
                                            >
                                                {product?.name}
                                            </h2>
                                            <h5
                                                style={{
                                                    color: "#ff0000",
                                                    textAlign: "center",
                                                    fontSize: "24px",
                                                }}
                                            >
                                                <b>£{product?.price}</b>
                                            </h5>
                                            <p
                                                style={{
                                                    color: "#333333",
                                                    marginBottom: "20px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {product?.description}
                                            </p>

                                            <div className="row ">
                                                <div className="col-md-12 d-flex justify-content-center">
                                                    {!isInCart(product?.id) ? (
                                                        <button
                                                            onClick={() =>
                                                                addItem(product)
                                                            }
                                                            style={{
                                                                background:
                                                                    COLOR_RED,
                                                                color: "white",
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
                                                                width: "180px",
                                                                marginInline:
                                                                    "10px",
                                                                borderRadius:
                                                                    "5px",
                                                            }}
                                                        >
                                                            ADD TO CART
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() =>
                                                                removeItem(
                                                                    product?.id
                                                                )
                                                            }
                                                            style={{
                                                                background:
                                                                    "#56ccf2",
                                                                color: "white",
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
                                                                width: "170px",
                                                                marginInline:
                                                                    "10px",
                                                                borderRadius:
                                                                    "5px",
                                                            }}
                                                        >
                                                            REMOVE ITEM
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
