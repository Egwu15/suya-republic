import React from "react";
import { Link, usePage } from "@inertiajs/react";
import "./index.css";

const SideBar = ({ categories }) => {
    const { url } = usePage();
    const query = new URLSearchParams(url.split("?")[1]);
    const selectedCategory = query.get("selectedCategory");

    return (
        <div className="side-bar">
            <ul className="sidebar-list">
                <li>
                    <Link href="/menu" className="text-decoration-none">
                        <div
                            className={`profile-sidebar ${
                                !selectedCategory ? "active" : ""
                            }`}
                            // style={{ fontFamily: "Dynapuff" }}
                        >
                            All
                        </div>
                    </Link>
                </li>
                {categories.data
                    .filter((data) => data.name.toLowerCase() !== "spices") // Filter out "spices"
                    .map((data) => (
                        <li key={data.id}>
                            <Link
                                href={`/menu?selectedCategory=${data.id}`}
                                className="text-decoration-none"
                            >
                                <div
                                    className={`profile-sidebar ${
                                        selectedCategory == data.id
                                            ? "active"
                                            : ""
                                    }`}
                                    // style={{ fontFamily: "Dynapuff" }}
                                >
                                    {data.name}
                                </div>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default SideBar;
