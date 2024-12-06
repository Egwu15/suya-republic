import React from "react";
import { Link } from "@inertiajs/react";
import "./index.css";

const SideBar = ({ categories }) => {
    return (
        <div className="side-bar">
            <ul className="sidebar-list">
                <div>
                    <li>
                        <Link href={`/menu`}>
                            <div className="profile-sidebar">All</div>
                        </Link>
                    </li>
                    {categories.data.map((data) => (
                        <li key={data.id}>
                            <Link
                                href={`/menu?selectedCategory=${data.id}`}
                                // className={({ isActive }) =>
                                //     isActive ? "active" : ""
                                // }
                            >
                                <div className="profile-sidebar">
                                    {data.name}
                                </div>
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default SideBar;
