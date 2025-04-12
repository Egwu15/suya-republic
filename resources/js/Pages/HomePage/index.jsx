import "./index.css";
import Button from "@/components/Button";
import Footer from "@/components/Footer/index";
import { Link } from "@inertiajs/react";
import useCartStore from "@/store/Store";
import Hero from "@/Components/Hero/Hero";
import OpeningHours from "@/Components/OpeningHour/OpeningHour";
import TopMenuSection from "@/Components/TopMenuSection/TopMenuSection";
import LearnMoreSection from "@/Components/LearnMoreSection/LearnMoreSection";
import DeliverySection from "@/Components/DeliverySection/DeliverySection";
import ServiceSection from "@/Components/ServiceSection/ServiceSection";

export const HomeComponent = () => {
    // const { loadUserFromLocalStorage } = useCartStore();

    // useEffect(() => {
    //     loadUserFromLocalStorage();
    // }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // dots: true,
                    autoplay: false,
                },
            },
        ],
    };

    return (
        <div id="top" style={{ width: "100vw", overflowX: "hidden" }}>
            {/* <section className="">
                <div className="chatwithus">
                    <div>
                        <a
                            href="https://wa.me/447378837837"
                            target="_blank"
                            rel="noreferrer"
                            className="chatwithusLink"
                        >
                            Chat with us!
                        </a>
                    </div>
                </div>
            </section> */}
            <Hero
                pagename={"The pure taste of"}
                title={"Naija"}
                desc={`We Cure your Nostalgia with our Tasty Suya. 
                    Get you Spicy Suya anywhere, anytime 
                    within the UK.`}
            />
            <OpeningHours />
            <TopMenuSection />
            <LearnMoreSection />
            <DeliverySection />
            <ServiceSection />

            <Footer />
        </div>
    );
};
export default HomeComponent;
