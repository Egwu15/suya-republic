import { useEffect, useState } from "react";
import { COLOR_RED } from "@/utils/constant";
import imag4 from "../../../assets/img/suya/Roast-suya.png";
import useCartStore from "@/store/Store";

const ViewProduct = ({ show, product, onClose }) => {
    const { cartItems } = useCartStore();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className="modal fade show"
            tabIndex="-1"
            style={{
                display: show ? "block" : "none",
                background: "rgba(0, 0, 0, 0.5)",
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

                                    <div className="col-md-12 right-card">
                                        <h2 className="mt-3">
                                            {product?.name}
                                        </h2>
                                        <h5 style={{ color: "#ff0000" }}>
                                            <b>£{product?.price}</b>
                                        </h5>
                                        <p
                                            style={{
                                                color: "#333333",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            {product?.description}
                                        </p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => onClose()}
                                            style={{
                                                background: COLOR_RED,
                                                color: "white",
                                                fontWeight: "600",
                                                fontSize: "14px",
                                                lineHeight: "14px",
                                                border: "none",
                                                padding: "10px 15px",
                                                cursor: "pointer",
                                                width: "170px",
                                                marginInline: "10px",
                                                borderRadius: "5px",
                                            }}
                                        >
                                            Close
                                        </button>
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

export default ViewProduct;
