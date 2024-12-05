import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import SideBar from "@/components/SideBar";
import useCartStore from "@/store/Store";
import "./menu.css";
import { Link } from "@inertiajs/react";
import Modal from "@/Components/Modal";

const OurMenu = ({ products, categories }) => {
    const { cartItems, addItem, removeItem } = useCartStore(); // Zustand store methods
    const [selectedItems, setSelectedItems] = useState({}); // Local UI state
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    // Sync Zustand state with local selected items
    useEffect(() => {
        const initialSelection = {};
        cartItems.forEach((item) => {
            initialSelection[item.id] = true;
        });
        setSelectedItems(initialSelection);
    }, [cartItems]);

    const toggleItemSelection = (id, product) => {
        const isSelected = selectedItems[id];
        const updatedSelection = { ...selectedItems, [id]: !isSelected };
        setSelectedItems(updatedSelection);

        if (isSelected) {
            removeItem(id); // Remove from cart (Zustand)
        } else {
            addItem(product); // Add to cart (Zustand)
        }
    };
    const handleCartClick = () => {
        setModalMessage("You have added an item to your cart!");
        setShowModal(true);
    };

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
                                                        <button
                                                            onClick={() =>
                                                                toggleItemSelection(
                                                                    data.id,
                                                                    data
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
                                                            <div className="mx-2">
                                                                <Link
                                                                    // href="/cart"
                                                                    onClick={
                                                                        handleCartClick
                                                                    }
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
                {/* Modal */}
                <Modal
                    show={showModal}
                    message={modalMessage}
                    onClose={() => setShowModal(false)}
                />
            </section>
            <Footer />
        </div>
    );
};

export default OurMenu;
