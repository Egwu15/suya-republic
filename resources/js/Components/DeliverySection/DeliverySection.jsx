import { Calendar, Clock } from "react-feather"; // Or react-icons
import "./index.css";
import pizaboy from "../../../assets/img/image.png";
import PrimaryButton from "../ActionButtons/PrimaryButton";
import Button from "../Button";
export default function DeliverySection() {
    const handleDeliverToMe = () => {
        window.location.href =
            "https://deliveroo.co.uk/menu/manchester/hulme-park/suya-republick-and-grill?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share";
    };

    const handleCollect = () => {
        // Store a value in localStorage
        localStorage.setItem("orderType", "collect");

        // Navigate to the menu page
        window.location.href = "/menu";
    };
    return (
        <div className="row m-0 delivery ">
            <div className="col-12 col-md-6 ">
                {" "}
                <div className="center-item-justify">
                    <div className="card col-md-8 bg-transparen border">
                        <div className="card-body d-flex flex-column align-items-center text-center p-4">
                            <div className="icon">
                                <i className="bi bi-cart text-dark fs-3"></i>
                            </div>
                            <h6 className="fw-bold text-white mt-2">
                                Order for Collect
                            </h6>
                            <p className="text-white w-75">
                                Please plan ahead and get your PERI-PERI to go,
                                from our restaurant location.
                            </p>
                            <Button
                                text="ORDER COLLECT"
                                handleButtonClick={handleCollect}
                                btnstyle={{ border: "none" }}
                                type="button"
                            />
                        </div>
                        <div className="card-body d-flex flex-column align-items-center text-center p-4">
                            <div className="icon">
                                <i className="bi bi-cart text-dark fs-3"></i>
                            </div>
                            <h6 className="fw-bold text-white mt-2">
                                Suya Republic’s Delivery{" "}
                            </h6>
                            <p className="text-white w-75">
                                Our delivery zones shift demand-check now to see
                                if Suya Republic is bringing he flavour to your
                                doorstep!
                            </p>
                            <Button
                                text="ORDER DELIVERY"
                                handleButtonClick={handleDeliverToMe}
                                btnstyle={{ marginBottom: "10px", border: "none" }}
                                type="button"
                            />
                            <p className="text-white w-75">Brought to you by</p>
                            <p className="text-white w-75">Deliveroo </p>
                        </div>{" "}
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="grid place-content-center">
                    <img
                        src={pizaboy}
                        alt="Pumpkin Soup"
                        className="img-fluid img-fluid-pizza"
                    />
                </div>
            </div>
        </div>
    );
}
