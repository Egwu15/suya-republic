import React from "react";
import { Link, usePage } from "@inertiajs/react";

const MobileCategoryScroll = ({ categories }) => {
    const excludedCategories = ["spices", "suya"];

    const { url } = usePage();
    const query = new URLSearchParams(url.split("?")[1]);
    const selectedCategory = query.get("selectedCategory");

    return (
        <div className="category-scroll-wrapper mb-4 py-3 ">
            <div className="d-flex gap-3 flex-nowrap category-scroll-inner px-3">
                <Link href="/menu" className="text-decoration-none">
                    <span
                        className={`category-item px-4 fw-bold rounded-pill ${
                            !selectedCategory
                                ? "active  text-dark"
                                : "text-white"
                        }`}
                    >
                        All
                    </span>
                </Link>

                {categories?.data
                    ?.filter(
                        (data) =>
                            !excludedCategories.includes(
                                data.name.toLowerCase()
                            )
                    )
                    .map((category) => (
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
    );
};

export default MobileCategoryScroll;
