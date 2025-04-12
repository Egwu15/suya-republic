import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopMenuSection.css";
import bigImage from "../../../assets/img/suya/Home-Banner-2.jpg";
import suyabeef from "../../../assets/img/suya/Beef-Suya-2.jpg";
import Shawarma from "../../../assets/img/suya/Sharwama.png";
import platter from "../../../assets/img/suya/Full-Platter-1.jpg";
import { Link } from "@inertiajs/react";

const allCategories = [
    "All",
    "Extras",
    "Grilled Fish",
    "Lagos Shawarma & Burgers",
    "Pepper Soup",
    "Periperi Grilled Chicken",
    "Sides",
    "Suya",
];

const menuItems = [
    {
        id: 1,
        title: "Tomato Toast",
        price: "$29",
        image: suyabeef,
        isStarter: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
        oldPrice: null,
        category: "Extras",
    },
    {
        id: 2,
        title: "Noodle Soup",
        price: "$5.00",
        image: Shawarma,
        isStarter: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
        oldPrice: "$8.00",
        category: "Pepper Soup",
    },
    {
        id: 3,
        title: "Pumpkin Soup",
        price: "$5.00",
        image: platter,
        isStarter: true,
        description: "Lorem ipsum dolor sit amet, consectetur",
        oldPrice: null,
        category: "Sides",
    },
];

const TopMenuSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredItems =
        selectedCategory === "All"
            ? menuItems
            : menuItems.filter((item) => item.category === selectedCategory);

    return (
        <div className="menu-section position-relative text-white py-5 px-3">
            <h2 className="text-center mb-4  py-4">OUR TOP MENU</h2>

            <div className="category-scroll-wrapper mb-4 py-3 d-md-none">
                <div className="d-flex gap-3 flex-nowrap category-scroll-inner">
                    {allCategories.map((category) => (
                        <span
                            key={category}
                            className={`category-item px-4 fw-bold ${
                                selectedCategory === category
                                    ? "active rounded-pill"
                                    : "text-white"
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>

            {/* Desktop version – unchanged */}
            <div className="d-none d-md-flex justify-content-center align-items-center gap-3 mb-4 py-5 flex-wrap">
                {allCategories.map((category) => (
                    <span
                        key={category}
                        className={`category-item px-4 fw-bold ${
                            selectedCategory === category
                                ? "active rounded-pill"
                                : "text-white"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </span>
                ))}
            </div>

            <div className="menu-layout container">
                <div className="row">
                    {/* Image Section - stays first on desktop, second on mobile */}
                    <div className="col-lg-6 mb-4 order-1 order-lg-0">
                        <div className="menu-image-wrapper relative p-5">
                            <img
                                src={bigImage}
                                alt="Featured Dish"
                                className="img-fluid rounded shadow p-3  "
                            />
                        </div>
                    </div>

                    {/* Category Section - second on desktop, first on mobile */}
                    <div className="col-lg-6 order-0 order-lg-1">
                        <div className="menu-items">
                            <h3
                                style={{
                                    fontWeight: "400",
                                    color: "#ffd703",
                                    fontSize: "32px",
                                }}
                                className="p-3"
                            >
                                {selectedCategory}
                            </h3>

                            {filteredItems.length === 0 ? (
                                <p className="text-white text-center py-4">
                                    No items available in this category.
                                </p>
                            ) : (
                                filteredItems.map((item) => (
                                    <div
                                        className={`menu-card d-flex  flex-row align-items-center p-3 rounded-4 mb-3 position-relative ${
                                            item.isStarter
                                                ? "starter-highlight"
                                                : ""
                                        }`}
                                        key={item.id}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="rounded-3 menu-img me-3"
                                        />
                                        <div className="flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-center mx-3 mx-md-0">
                                                <h6 className="mb-1 fw-normal fw-md-bold big-font text-white">
                                                    {item.title}
                                                    {item.isStarter && (
                                                        <span className="ms-2 text-warning leaf">
                                                            🥄
                                                        </span>
                                                    )}
                                                </h6>
                                                <h6 className="fw-bold big-font text-white">
                                                    {item.oldPrice && (
                                                        <span className="text-decoration-line-through text-cancel me-2">
                                                            {item.oldPrice}
                                                        </span>
                                                    )}
                                                    {item.price}
                                                </h6>
                                            </div>
                                            <p className="d-none d-md-block small mb-2 custom-description">
                                                {item.description}
                                            </p>
                                            <button className="select-btn d-block ms-3 d-md-none">
                                                select Item
                                                <span className="material-symbols-outlined">
                                                    arrow_outward
                                                </span>
                                            </button>
                                        </div>
                                        {item.isStarter && (
                                            <span className="starter-label text-dark px-3 py-2 bg-warning rounded">
                                                Starter of the Day
                                            </span>
                                        )}
                                    </div>
                                ))
                            )}

                            <div className="text-star margin ">
                                <Link
                                    href="/menu"
                                    className="link-outline-btn "
                                >
                                    See More{" "}
                                    <span className="material-symbols-outlined fw-bold">
                                        arrow_outward
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMenuSection;
