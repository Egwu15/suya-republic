import { useState } from "react";
import lambSuya from "../../../assets/img/suya/Lamb-Suya-3.jpg";
import shawarma from "../../../assets/img/suya/Shawarma.jpg";
import beefSuya from "../../../assets/img/suya/Beef-Suya-2.jpg";
import { Link } from "@inertiajs/react";

const RelatedProducts = () => {
    const [selectedItems, setSelectedItems] = useState({});

    const toggleItemSelection = (id) => {
        setSelectedItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const products = [
        { id: 1, name: "LAMB SUYA", price: 9.5, img: lambSuya },
        { id: 2, name: "CLASSIC CHICKEN SHAWARMA", price: 9.99, img: shawarma },
        { id: 3, name: "BEEF SUYA", price: 9.5, img: beefSuya },
    ];

    return (
        <div className="related-products mb-5">
            <h3 style={{ color: "#b7903c", margin: "50px 0" }}>
                RELATED PRODUCTS
            </h3>
            <div className="row row-grid">
                {products.map((product) => (
                    <div key={product.id} className="col-md-3">
                        <div className="card-container text-center">
                            <div
                                className="card-container-img"
                                style={{
                                    width: "300px",
                                    height: "300px",
                                    objectFit: "contain",
                                }}
                            >
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </div>
                            <h6 className="mt-3" style={{ color: "#b7903c" }}>
                                {product.name}
                            </h6>
                            <h6 style={{ color: "#ff0000" }}>
                                £{product.price.toFixed(2)}
                            </h6>
                            <div
                                className="col-md-6"
                                style={{ margin: "0 auto" }}
                            >
                                <button
                                    onClick={() =>
                                        toggleItemSelection(product.id)
                                    }
                                    style={{
                                        background: selectedItems[product.id]
                                            ? "#e74c3c"
                                            : "#56ccf2",
                                        color: "white",
                                        margin: "20px 0",
                                        fontWeight: "600",
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        border: "none",
                                        padding: "10px 20px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    {selectedItems[product.id]
                                        ? "REMOVE ITEM"
                                        : "SELECT ITEM"}
                                </button>
                                {selectedItems[product.id] && (
                                    <Link
                                        href="/cart"
                                        style={{
                                            display: "inline-block",
                                            background: "#27ae60",
                                            color: "white",
                                            margin: "10px 0",
                                            fontWeight: "600",
                                            fontSize: "16px",
                                            lineHeight: "24px",
                                            border: "none",
                                            padding: "5px 20px",
                                            cursor: "pointer",
                                            borderRadius: "5px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        <i
                                            className="bi bi-cart-plus text-white"
                                            style={{
                                                fontSize: "14px",
                                                marginRight: "4px",
                                            }}
                                        ></i>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
