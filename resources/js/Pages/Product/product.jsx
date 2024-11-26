import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./product.css";
import lambSuya from "../../../assets/img/suya/Lamb-Suya-3.jpg";
import Button from "../../components/Button";
import { COLOR_RED, COLOR_WHITE } from "@/utils/constant";
import RelatedProducts from "@/Components/RelatedProducts";
// import Select from "react-select";

const Product = ({ data }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [productSpiceLevel, setProductSpiceLevel] = useState("");

    const spiceLevelOptions = [
        { value: "mild", name: "mild" },
        { value: "spicy", name: "spicy" },
        { value: "very spicy", name: "very spicy" },
    ];

    const optionSpiceLevel = spiceLevelOptions?.map((x) => ({
        label: x.name,
        value: x.value,
    }));

    const colorStyles = {
        option: (provided) => ({
            ...provided,
            color: "black",
            backgroundColor: "white",
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "black",
        }),
    };

    return (
        <div>
            <Navbar />
            <section className="product">
                <div className="container">
                    <div
                        className="row row-grid"
                        style={{ padding: "200px 0 50px 0" }}
                    >
                        <div
                            className="col-md-6 card-container-img"
                            style={{ height: "650px", objectFit: "contain" }}
                        >
                            <img
                                src={lambSuya}
                                alt=""
                                className=""
                                loading="lazy"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <div
                            className="col-md-6 right-card"
                            style={{ padding: "0 50px 0 100px" }}
                        >
                            <h2
                                className="mt-3"
                                // style={{ color: "#b7903c" }}
                            >
                                LAMB SUYA
                            </h2>
                            <h5 style={{ color: "#ff0000" }}>
                                <b>£9.50</b>
                            </h5>
                            <p
                                style={{
                                    color: "#333333",
                                    marginBottom: "70px",
                                }}
                            >
                                We serve the lamb suya with sliced red onions,
                                tomatoes, cucumber with the Republick suya spice
                                mix to complement its tender texture. It’s
                                amazing!!
                            </p>
                            <div className="col-md-5 mb-4 ">
                                {/* <SelectComponent
                                    options={optionSpiceLevel}
                                    handleChange={(e) =>
                                        setProductSpiceLevel(e.value)
                                    }
                                    value={productSpiceLevel}
                                    styles={colorStyles}
                                    placeholder="Select Spice Level"
                                /> */}
                                {/* <Select
                                    options={optionSpiceLevel}
                                    onChange={(e) =>
                                        setProductSpiceLevel(e.value)
                                    }
                                    value={optionSpiceLevel.find(
                                        (option) =>
                                            option.value === productSpiceLevel
                                    )}
                                    styles={colorStyles}
                                    placeholder="Select Spice Level"
                                /> */}
                                <select
                                    value={productSpiceLevel}
                                    onChange={(e) =>
                                        setProductSpiceLevel(e.target.value)
                                    }
                                >
                                    <option value="mild">Mild</option>
                                    <option value="spicy">Spicy</option>
                                    <option value="very spicy">
                                        Very Spicy
                                    </option>
                                </select>
                            </div>
                            <h5
                                className="mt-3 mb-4 text-right"
                                // style={{ color: "#b7903c" }}
                            >
                                <b>SUBTOTAL:</b>
                            </h5>
                            <p
                                className="text-right"
                                style={{ color: "#333333" }}
                            >
                                £9.50
                            </p>
                            <h5
                                className="mt-3 mb-4 text-right"
                                // style={{ color: "#b7903c" }}
                            >
                                <b>ADD-ONS TOTAL:</b>
                            </h5>
                            <p
                                className="text-right"
                                style={{ color: "#333333" }}
                            >
                                +£0.00
                            </p>
                            <h5
                                className="mt-3 mb-4 text-right"
                                // style={{ color: "#b7903c" }}
                            >
                                <b>TOTAL:</b>
                            </h5>
                            <p
                                className="text-right"
                                style={{ color: "#333333" }}
                            >
                                £9.50
                            </p>
                            <div
                                className="row row-grid col-md-12 mt-5"
                                // style={{ margin: "0 auto" }}
                            >
                                {/* <SelectComponent
                                    options={optionSpiceLevel}
                                    handleChange={(e) =>
                                        setProductSpiceLevel(e.value)
                                    }
                                    value={productSpiceLevel}
                                    styles={colorStyles}
                                    placeholder="Spice Level"
                                    id="spice-level"
                                /> */}
                                <Button
                                    text="ADD TO CART"
                                    // handleButtonClick={handleRoundWay}
                                    type="button"
                                    btnstyle={{
                                        background: COLOR_RED,
                                        color: COLOR_WHITE,
                                        width: "170px",
                                        // margin: "20px 0",
                                        // fontFamily: "Euclid Circular B",
                                        fontWeight: "600",
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <RelatedProducts />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Product;
