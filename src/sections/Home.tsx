// import icons
import { FaPlay } from "react-icons/fa6";

// import types
import type { Review } from "../types";
import type { Plant } from "../types";

// import components
import ReviewCard from "../components/ReviewCard";
import FeaturedPlantCard from "../components/FeaturedPlantCard";

// review data
const review: Review = {
    name: "Alena Patel",
    avatar: "/images/people/p4.jpg",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
};

// plant data
const featuredPlant: Plant = {
    name: "Calathea Plant",
    tag: "Trendy House Plant",
    image: "/images/plants/plant5.png",
    alt: "Calathea",
};

// home section
export default function Home() {
    return (
        <section className="relative overflow-hidden font-sans px-6 pt-24 md:px-12 lg:px-20 lg:pt-28">

            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20 -mt-10">

                {/* Left main content */}
                <div className="text-white/80 max-w-xl lg:max-w-2xl">
                    <h1 className="text-[52px] sm:text-[70px] lg:text-[90px] font-semibold leading-[0.95] -ml-1">
                        Breath Natural
                    </h1>

                    <p className="text-base sm:text-lg mt-4 ml-1 max-w-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                    <ReviewCard review={review} />
                </div>

                {/* Featured Plant Card */}
                <FeaturedPlantCard plant={featuredPlant} />
            </div>
        </section>
    );
}