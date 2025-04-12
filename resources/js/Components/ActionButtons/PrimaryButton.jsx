import { FiExternalLink } from "react-icons/fi";
import "./index.css";

export default function PrimaryButton({ children }) {
    return (
        <div className="d-flex gap-3">
            <button className="action-btn order-btn-hero">{children}</button>
        </div>
    );
}
