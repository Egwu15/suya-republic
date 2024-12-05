// Modal component
const Modal = ({ show, message, onClose }) => {
    if (!show) return null;

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
                        <p>{message}</p>
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
