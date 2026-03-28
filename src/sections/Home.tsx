// import icons
import { FaPlay } from "react-icons/fa6";

// import types
import type { Review } from "../types";
import type { Plant } from "../types";

// import components
import ReviewCard from "../components/home/ReviewCard";
import FeaturedPlantCard from "../components/home/FeaturedPlantCard";

// review data
const review: Review = {
    name: "Alena Patel",
    image: "/images/people/p4.jpg",
    rating: 5,
    text: "Absolutely love the quality of plants! My Calathea arrived fresh, healthy, and beautifully packaged. Highly recommended!",
};

// plant data
const featuredPlant: Plant = {
    name: "Dieffenbachia Plant",
    tag: "Trendy House Plant",
    image: "/images/plants/plant5.png",
    alt: "Dieffenbachia indoor plant with variegated green and yellow leaves",
};

// home section
export default function Home() {
    return (
        <section className="relative overflow-hidden font-sans px-6 pt-24 md:px-12 lg:px-20 lg:pt-28">

            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20 -mt-10">
                {/* Left main content */}
                <div
                    className="text-white/80 max-w-xl lg:max-w-2xl"
                    data-aos="fade-down"
                    data-aos-duration="900"
                >
                    <h1 className="text-[52px] sm:text-[70px] lg:text-[90px] font-semibold leading-[0.95] -ml-1">
                        Breath Natural
                    </h1>

                    <p className="text-base sm:text-lg mt-4 ml-1 max-w-lg">
                        Transform your space with handpicked indoor plants that purify the air, reduce stress, and bring life to your home. Nature,
                        delivered to your doorstep.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-6 items-center">
                        <button className="border-2 border-white/60 rounded-xl px-10 sm:px-12 py-2.5 text-lg sm:text-xl hover:bg-white hover:text-[#1b2316]
                            transition-all cursor-pointer">
                            Explore
                        </button>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <button className="border-2 border-white/60 rounded-full p-4 flex items-center justify-center group-hover:bg-[#6fc33e]
                            group-hover:border-[#6fc33e] transition-all cursor-pointer">
                                <FaPlay className="text-[16px] text-white" />
                            </button>

                            <p className="text-base sm:text-lg font-medium">
                                Live Demo...
                            </p>
                        </div>
                    </div>

                    {/* Floating Review Card */}
                    <div
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <ReviewCard review={review} />
                    </div>
                </div>

                {/* Featured Plant Card */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <FeaturedPlantCard plant={featuredPlant} />
                </div>
            </div>
        </section>
    );
}