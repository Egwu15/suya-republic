import { FiExternalLink } from "react-icons/fi";
import "./index.css";
export default function ActionButtons() {
    return (
        <div className="d-flex gap-3">
            <button className="action-btn order-btn-hero">
                ORDER ONLINE <FiExternalLink size={20} />
            </button>
            <button className="action-btn pickup-btn">
                PICKUP IN STORE <FiExternalLink size={20} />
            </button>
        </div>
    );
}
