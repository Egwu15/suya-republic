import { Calendar, Clock } from "react-feather"; // Or react-icons
import "./index.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

export default function OpeningHours() {
    return (
        <section className="bg-orange">
            <div className="container ">
                <div className="opening-hours ">
                    <span className="opening-title">Opening Hours</span>
                    <div className="separator-vertical" />
                    <div className="separator-horizontal" />
                    <div className="section">
                        <FaRegCalendarAlt size={28} color="#fff" />
                        <span className="day">Tuesday – Sunday</span>
                    </div>
                    {/* Desktop-only vertical separators */}
                    <div className="separator-vertical" />
                    <div className="separator-horizontal" />
                    <div className="section">
                        <FaRegClock size={28} color="#fff" />

                        <span className="time pe-4">4pm – 8pm</span>
                    </div>{" "}
                </div>
            </div>{" "}
        </section>
    );
}
