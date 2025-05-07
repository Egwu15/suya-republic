import { r as c, j as e, a as o } from "./app-DnQFARRg.js";
import { N as d, C as m, a as x, F as h } from "./index-owp4mOny.js";
import { B as p } from "./index-PkZJM7qz.js";
import "./Mobile-Logo-DjYHHJYk.js";
import "./CartIcon-B8wCKsgN.js";
import "./Store-DJ_Ga0aW.js";
import "./react-toastify.esm-VNDM9f_Z.js";
/* empty css              */ import "./index-CLTn70qX.js";
const n = "/build/assets/Lamb-Suya-3-BDDLu0Em.jpg",
    g = "/build/assets/Shawarma-B_Vtzlcb.jpg",
    j = "/build/assets/Beef-Suya-2-DZjhClSk.jpg",
    u = () => {
        const [t, a] = c.useState({}),
            l = (s) => {
                a((r) => ({ ...r, [s]: !r[s] }));
            },
            i = [
                { id: 1, name: "LAMB SUYA", price: 9.5, img: n },
                {
                    id: 2,
                    name: "CLASSIC CHICKEN SHAWARMA",
                    price: 9.99,
                    img: g,
                },
                { id: 3, name: "BEEF SUYA", price: 9.5, img: j },
            ];
        return e.jsxs("div", {
            className: "related-products mb-5",
            children: [
                e.jsx("h3", {
                    style: { color: "#b7903c", margin: "50px 0" },
                    children: "RELATED PRODUCTS",
                }),
                e.jsx("div", {
                    className: "row row-grid",
                    children: i.map((s) =>
                        e.jsx(
                            "div",
                            {
                                className: "col-md-3",
                                children: e.jsxs("div", {
                                    className: "card-container text-center",
                                    children: [
                                        e.jsx("div", {
                                            className: "card-container-img",
                                            style: {
                                                width: "300px",
                                                height: "300px",
                                                objectFit: "contain",
                                            },
                                            children: e.jsx("img", {
                                                src: s.img,
                                                alt: s.name,
                                                loading: "lazy",
                                                style: {
                                                    width: "100%",
                                                    height: "100%",
                                                },
                                            }),
                                        }),
                                        e.jsx("h6", {
                                            className: "mt-3",
                                            style: { color: "#b7903c" },
                                            children: s.name,
                                        }),
                                        e.jsxs("h6", {
                                            style: { color: "#ff0000" },
                                            children: [
                                                "£",
                                                s?.price?.toFixed(2),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "col-md-6",
                                            style: { margin: "0 auto" },
                                            children: [
                                                e.jsx("button", {
                                                    onClick: () => l(s.id),
                                                    style: {
                                                        background: t[s.id]
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
                                                    },
                                                    children: t[s.id]
                                                        ? "REMOVE ITEM"
                                                        : "SELECT ITEM",
                                                }),
                                                t[s.id] &&
                                                    e.jsx(o, {
                                                        href: "/cart",
                                                        style: {
                                                            display:
                                                                "inline-block",
                                                            background:
                                                                "#27ae60",
                                                            color: "white",
                                                            margin: "10px 0",
                                                            fontWeight: "600",
                                                            fontSize: "16px",
                                                            lineHeight: "24px",
                                                            border: "none",
                                                            padding: "5px 20px",
                                                            cursor: "pointer",
                                                            borderRadius: "5px",
                                                            textDecoration:
                                                                "none",
                                                        },
                                                        children: e.jsx("i", {
                                                            className:
                                                                "bi bi-cart-plus text-white",
                                                            style: {
                                                                fontSize:
                                                                    "14px",
                                                                marginRight:
                                                                    "4px",
                                                            },
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            },
                            s.id
                        )
                    ),
                }),
            ],
        });
    },
    T = ({ data: t }) => {
        c.useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
        const [a, l] = c.useState(""),
            i = [
                { value: "mild", name: "mild" },
                { value: "spicy", name: "spicy" },
                { value: "very spicy", name: "very spicy" },
            ];
        return (
            i == null || i.map((s) => ({ label: s.name, value: s.value })),
            e.jsxs("div", {
                children: [
                    e.jsx(d, {}),
                    e.jsx("section", {
                        className: "product",
                        children: e.jsxs("div", {
                            className: "container",
                            children: [
                                e.jsxs("div", {
                                    className: "row row-grid",
                                    style: { padding: "200px 0 50px 0" },
                                    children: [
                                        e.jsx("div", {
                                            className:
                                                "col-md-6 card-container-img",
                                            style: {
                                                height: "650px",
                                                objectFit: "contain",
                                            },
                                            children: e.jsx("img", {
                                                src: n,
                                                alt: "",
                                                className: "",
                                                loading: "lazy",
                                                style: {
                                                    width: "100%",
                                                    height: "100%",
                                                },
                                            }),
                                        }),
                                        e.jsxs("div", {
                                            className: "col-md-6 right-card",
                                            style: {
                                                padding: "0 50px 0 100px",
                                            },
                                            children: [
                                                e.jsx("h2", {
                                                    className: "mt-3",
                                                    children: "LAMB SUYA",
                                                }),
                                                e.jsx("h5", {
                                                    style: { color: "#ff0000" },
                                                    children: e.jsx("b", {
                                                        children: "£9.50",
                                                    }),
                                                }),
                                                e.jsx("p", {
                                                    style: {
                                                        color: "#333333",
                                                        marginBottom: "70px",
                                                    },
                                                    children:
                                                        "We serve the lamb suya with sliced red onions, tomatoes, cucumber with the Republick suya spice mix to complement its tender texture. It’s amazing!!",
                                                }),
                                                e.jsx("div", {
                                                    className: "col-md-5 mb-4 ",
                                                    children: e.jsxs("select", {
                                                        value: a,
                                                        onChange: (s) =>
                                                            l(s.target.value),
                                                        children: [
                                                            e.jsx("option", {
                                                                value: "mild",
                                                                children:
                                                                    "Mild",
                                                            }),
                                                            e.jsx("option", {
                                                                value: "spicy",
                                                                children:
                                                                    "Spicy",
                                                            }),
                                                            e.jsx("option", {
                                                                value: "very spicy",
                                                                children:
                                                                    "Very Spicy",
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                e.jsx("h5", {
                                                    className:
                                                        "mt-3 mb-4 text-right",
                                                    children: e.jsx("b", {
                                                        children: "SUBTOTAL:",
                                                    }),
                                                }),
                                                e.jsx("p", {
                                                    className: "text-right",
                                                    style: { color: "#333333" },
                                                    children: "£9.50",
                                                }),
                                                e.jsx("h5", {
                                                    className:
                                                        "mt-3 mb-4 text-right",
                                                    children: e.jsx("b", {
                                                        children:
                                                            "ADD-ONS TOTAL:",
                                                    }),
                                                }),
                                                e.jsx("p", {
                                                    className: "text-right",
                                                    style: { color: "#333333" },
                                                    children: "+£0.00",
                                                }),
                                                e.jsx("h5", {
                                                    className:
                                                        "mt-3 mb-4 text-right",
                                                    children: e.jsx("b", {
                                                        children: "TOTAL:",
                                                    }),
                                                }),
                                                e.jsx("p", {
                                                    className: "text-right",
                                                    style: { color: "#333333" },
                                                    children: "£9.50",
                                                }),
                                                e.jsx("div", {
                                                    className:
                                                        "row row-grid col-md-12 mt-5",
                                                    children: e.jsx(p, {
                                                        text: "ADD TO CART",
                                                        type: "button",
                                                        btnstyle: {
                                                            background: m,
                                                            color: x,
                                                            width: "170px",
                                                            fontWeight: "600",
                                                            fontSize: "16px",
                                                            lineHeight: "24px",
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsx(u, {}),
                            ],
                        }),
                    }),
                    e.jsx(h, {}),
                ],
            })
        );
    };
export { T as default };
