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

export const HomeComponent = ({ products, categories }) => {

    console.log('products', products);
    console.log('categories',categories);
    // const { loadUserFromLocalStorage } = useCartStore();

    // useEffect(() => {
    //     loadUserFromLocalStorage();
    // }, []);

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
