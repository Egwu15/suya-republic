import React from "react";
import { Link } from "@inertiajs/react";

import "./index.css";
import { data } from "autoprefixer";

const SideBar = ({ categories }) => {
    return (
        <div className="side-bar">
            <ul className="sidebar-list">
                <div>
                    <li>
                        <Link
                            href={`/menu`}
                            exact={true}
                            activeClassName="active"
                        >
                            <div className="profile-sidebar">All</div>
                        </Link>
                    </li>
                    {categories.data.map((data) => (
                        <li key={data.id}>
                            <Link
                                href={`/menu?selectedCategory=${data.id}`}
                                activeClassName="active"
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
