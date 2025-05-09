import { Calendar, Clock } from "react-feather"; // Or react-icons
import "./index.css";
import pizaboy from "../../../assets/img/image.png";
import PrimaryButton from "../ActionButtons/PrimaryButton";
export default function DeliverySection() {
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
                            <PrimaryButton>ORDER COLLECT</PrimaryButton>
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
                            <PrimaryButton>ORDER DELIVERY</PrimaryButton>
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
