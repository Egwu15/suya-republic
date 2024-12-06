// Modal component
const Modal = ({ show, message, onClose }) => {
    const [errorMessage, setErrorMessage] = useState("");

    if (!show) return null;
    const handleDeliverToMe = () => {
        if (postcode.trim() === "") {
            setErrorMessage("Please enter your postcode.");
        } else if (!postcode.toUpperCase().startsWith("MN")) {
            setModalMessage("We only deliver within Manchester.");
            setShowModal(true); // Show modal for invalid postcode
            setErrorMessage(""); // Clear error message
        } else {
            alert("Delivery is available for your postcode!");
            setErrorMessage(""); // Clear error message
        }
    };

    const handleCollect = () => {
        if (postcode.trim() === "") {
            setErrorMessage("Please enter your postcode.");
        } else {
            setModalMessage("Collection details will be provided soon.");
            setShowModal(true);
            setErrorMessage(""); // Clear error message
        }
    };
    return (
        <div
            className="modal fade show"
            tabIndex="-1"
            style={{
                display: "block",
                background: "rgba(0, 0, 0, 0.5)",
            }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cart Action</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="postcode"
                                    className="form-label text-left fw-bold"
                                >
                                    Enter your full postcode
                                </label>
                                <input
                                    type="text"
                                    id="postcode"
                                    className="form-control text-center"
                                    placeholder="e.g. EC1Y 1BE"
                                    value={postcode}
                                    onChange={(e) =>
                                        setPostcode(e.target.value)
                                    }
                                />
                                {errorMessage && (
                                    <p className="text-danger mt-2">
                                        {errorMessage}
                                    </p>
                                )}
                            </div>
                            <button
                                type="button"
                                className="btn btn-dark w-100 mb-2"
                                onClick={handleCollect}
                            >
                                I’LL COLLECT
                            </button>
                            <button
                                type="button"
                                className="btn btn-dark w-100"
                                onClick={handleDeliverToMe}
                            >
                                DELIVER TO ME
                            </button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;
