import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import useCartStore from "@/store/Store";
import "./menu.css";
import { useState } from "react";
import ProductList from "./ProductList";
import MobileCategoryScroll from "@/Components/MobileCategoryScroll";
import { Link } from "@inertiajs/react";
// import Hero from "@/Components/Hero/Hero";
import Button from "../../Components/Button";
import "../../Components/Hero/index.css";

const OurMenu = ({ products, categories }) => {
    const { cartItems, addItem, removeItem } = useCartStore();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    console.log("newcategories", categories);
    console.log("products", products);

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
                    height: "500px",
                }}
            >
                <Navbar />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h2 className="sub-heading  text-warning ">
                        {"Choose your favorite"}
                    </h2>
                    <h2 className="gro-bold-heading-pages text-white p-5">
                        {"Tasty Menu"}
                    </h2>
                    <div className="d-md-flex d-block gap-md-3 gap-4 d-flex flex-column flex-md-row my-5 justify-content-center ">
                        <Link
                            href="/order-online"
                            style={{
                                marginLeft: ".5rem",
                                marginBottom: "1rem",
                            }}
                        >
                            <Button text="ORDER ONLINE" type="button" />
                        </Link>
                        <Link
                            href="/order-online"
                            style={{ marginLeft: ".5rem" }}
                        >
                            <Button
                                text="PICKUP IN STORE"
                                type="button"
                                className="Button_Wrap_secondary"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <section className="menu-section">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-12 pt-4">
                            <h2
                                className="text-center text-white mb-4 py-4"
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 800
                                }}
                            >
                                OUR TASTY MENU
                            </h2>
                            <MobileCategoryScroll categories={categories} />
                        </div>

                        <ProductList products={products} />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OurMenu;
