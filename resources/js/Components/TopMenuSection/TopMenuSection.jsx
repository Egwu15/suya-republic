import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopMenuSection.css";
import bigImage from "../../../assets/img/suya/Home-Banner-2.jpg";
import suyabeef from "../../../assets/img/suya/Beef-Suya-2.jpg";
import Shawarma from "../../../assets/img/suya/Sharwama.png";
import platter from "../../../assets/img/suya/Full-Platter-1.jpg";
import { Link } from "@inertiajs/react";
import useCartStore from "@/store/Store";
import { ArrowUpRight, Trash2 } from "lucide-react";
import { usePage } from "@inertiajs/react";

const TopMenuSection = ({ products, categories }) => {
    const { cartItems, addItem, removeItem } = useCartStore();
    // Inside component:
    const { url } = usePage();
    const query = new URLSearchParams(url.split("?")[1]);
    const selectedCategory = query.get("selectedCategory") || "All";
    const selectedCategoryName =
        selectedCategory === "All"
            ? "All"
            : categories?.data?.find(
                  (cat) => cat.id === parseInt(selectedCategory)
              )?.name || "Unknown";
    const toggleItemSelection = (item) => {
        const isSelected = cartItems.some((i) => i.id === item.id);
        isSelected ? removeItem(item.id) : addItem(item);
    };
    const filteredItems =
        selectedCategory === "All"
            ? products
            : products.filter(
                  (item) => item.category_id === parseInt(selectedCategory)
              );

    return (
        <div className="menu-section position-relative text-white py-5 px-3">
            <h2 className="text-center mb-4  py-4">OUR TOP MENU</h2>

            <div className="category-scroll-wrapper mb-4 py-3 d-md-none">
                <div className="d-flex gap-3 flex-nowrap category-scroll-inner">
                    <Link href="/" className="text-decoration-none">
                        <span
                            className={`category-item px-4 fw-bold rounded-pill ${
                                selectedCategory === "All"
                                    ? "active text-dark"
                                    : "text-white"
                            }`}
                        >
                            All
                        </span>
                    </Link>

                    {categories?.data?.map((category) => (
                        <Link
                            key={category?.id}
                            href={`/?selectedCategory=${category?.id}`}
                            className="text-decoration-none"
                        >
                            <span
                                className={`category-item px-4 fw-bold rounded-pill ${
                                    selectedCategory == category?.id
                                        ? "active text-dark"
                                        : "text-white"
                                }`}
                            >
                                {category?.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Desktop version – unchanged */}
            <div className="container d-none d-md-flex justify-content-cente align-items-center gap-3 mb-4 py-5 flex-wrap">
                <Link href="/" className="text-decoration-none">
                    <span
                        className={`category-item px-4 fw-bold rounded-pill ${
                            selectedCategory === "All"
                                ? "active text-dark"
                                : "text-white"
                        }`}
                    >
                        All
                    </span>
                </Link>

                {categories?.data?.map((category) => (
                    <Link
                        key={category?.id}
                        href={`/?selectedCategory=${category?.id}`}
                        className="text-decoration-none"
                    >
                        <span
                            className={`category-item px-4 fw-bold rounded-pill ${
                                selectedCategory == category?.id
                                    ? "active text-dark"
                                    : "text-white"
                            }`}
                        >
                            {category?.name}
                        </span>
                    </Link>
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
                                {selectedCategoryName}
                            </h3>

                            {filteredItems?.length === 0 ? (
                                <p className="text-white text-center py-4">
                                    No items available in this category.
                                </p>
                            ) : (
                                filteredItems?.map((item) => {
                                    const isSelected = cartItems.some(
                                        (i) => i.id === item.id
                                    );

                                    return (
                                        <div
                                            className={`menu-card d-flex  flex-row align-items-center p-3 rounded-4 mb-3 position-relative 
                                                ${
                                                    item.status === "in_stocky"
                                                        ? "starter-highlight"
                                                        : ""
                                                }
                                            `}
                                            key={item.id}
                                        >
                                            {console.log("item", item)}
                                            <img
                                                src={suyabeef}
                                                // src={item?.product_image}
                                                alt={item.name}
                                                className="rounded-3 menu-img me-3"
                                            />
                                            <div className="flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-center mx-3 mx-md-0">
                                                    <h6 className="mb-1 fw-normal fw-md-bold big-font text-white">
                                                        {item.name}
                                                        {/* {item.status ===
                                                            "in_stock" && (
                                                            <span className="ms-2 text-warning leaf">
                                                                🥄
                                                            </span>
                                                        )} */}
                                                    </h6>
                                                    <h6 className="fw-bold big-font text-white">
                                                        {/* {item.status ===
                                                            "in_stock" && (
                                                            <span className="text-decoration-line-through text-cancel me-2">
                                                                £{" "}
                                                                {item.price + 5}
                                                            </span>
                                                        )} */}
                                                        £ {item.price}
                                                    </h6>
                                                </div>
                                                <p className="d-none d-md-block small mb-2 custom-description">
                                                    {item.description}
                                                </p>
                                                <button
                                                    onClick={() =>
                                                        toggleItemSelection(
                                                            item
                                                        )
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
                                                            Select Item{" "}
                                                            <ArrowUpRight
                                                                size={16}
                                                            />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                            {/* {item.status === "in_stock" && (
                                                <span className="starter-label text-dark px-3 py-2 bg-warning rounded">
                                                    In Stock
                                                </span>
                                            )} */}
                                        </div>
                                    );
                                })
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
