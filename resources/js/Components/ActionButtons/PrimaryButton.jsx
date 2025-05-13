import { FiExternalLink } from "react-icons/fi";
import "./index.css";

export default function PrimaryButton({ children, onClick }) {
    return (
        <div className="d-flex gap-3">
            <button onClick={onClick} className="action-btn-bg">{children}</button>
        </div>
    );
}
