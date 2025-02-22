import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import useCartStore from "@/store/Store";
import "./InternationalMenu.css";
import { Link } from "@inertiajs/react";
import SideBar from "@/Components/SideBar";
import { ToastContainer } from "react-toastify";
import ProductModal from "@/Components/ProductModal/ProductModal";

const InternationalMenu = ({ products }) => {
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
            <Navbar />
            {/* <ToastContainer /> */}
            <section className="our-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h6 className="mb-2">CHOOSE YOUR FAVORITE</h6>
                            <h1
                                className="mb-2"
                                style={{ fontFamily: "rubik wet paint" }}
                            >
                                Spices
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-answer">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-2">
                            <div className="booking">
                                <h6>MENU CATEGORIES</h6>
                                 <SideBar categories={categories} /> 
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <section className="hot-cards pt-5 pb-5">
                                <div className="container">
                                    <div className="row row-grid">
                                        {products?.map((data) => (
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
                                        ))}
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

export default InternationalMenu;
