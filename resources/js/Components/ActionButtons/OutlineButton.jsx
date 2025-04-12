import { FiExternalLink } from "react-icons/fi";
import "./index.css";
export default function OutlineButton({ children }) {
    return (
        <div className="d-flex gap-3">
            <button className="action-btn pickup-btn">
                {children} <FiExternalLink size={20} />
            </button>
        </div>
    );
}
