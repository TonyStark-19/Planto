// import icons
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

// import components
import SectionHeading from "../components/SectionHeading";

// import type
import type { O2Plant } from "../types";

// plants data
const plants: O2Plant[] = [
    {
        image: "/images/plants/plant5.png",
        alt: "O2 Plant 1",
        title: "We Have Small And Best O2 Plants Collection",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        ],
    },
];

// crousal dots
const dots = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
];

// best o2 section
export default function BestO2() {
    return (
        <div className="bg-[#1b2316] text-white flex flex-col items-center justify-center py-20 px-6 font-sans">
            <SectionHeading title="Our Best O2" />

            <div className="relative max-w-6xl w-full group mt-10 max-sm:mt-5">
                <div className="p-[1.5px] rounded-[4rem] bg-linear-to-br from-white/20 via-transparent to-white/20">
                    {plants.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#242c20]/80 backdrop-blur-sm flex flex-col lg:flex-row max-lg:items-start items-center gap-12 px-6
                            md:px-10 py-6 md:py-0 rounded-[4rem]"
                        >
                            {/* Plant Image — driven by activeIndex */}
                            <div className="w-full md:w-1/2 flex justify-center relative">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full max-w-sm md:max-w-none h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] scale-100
                                    md:scale-110 -translate-y-6 md:-translate-y-12 md:-translate-x-15"
                                />
                            </div>

                            {/* Content — driven by activeIndex */}
                            <div className="md:w-1/2 space-y-6 text-white/70 max-lg:pb-10">
                                <h3 className="text-3xl max-sm:text-2xl font-semibold leading-tight max-w-md">
                                    {item.title}
                                </h3>

                                <div className="space-y-4 text-gray-300 text-lg max-sm:text-base leading-relaxed">
                                    {item.description.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-3">
                                    <button className="px-10 py-2 border border-white/40 rounded-md text-lg max-sm:text-base font-medium
                                    hover:bg-white hover:text-black transition-all cursor-pointer">
                                        Explore
                                    </button>

                                    {/* Slider Controls */}
                                    <div className="flex items-center gap-6 max-sm:gap-3 text-white/60">
                                        <button
                                            className="hover:text-white transition-colors"
                                        >
                                            <HiOutlineChevronLeft className="text-2xl" />
                                        </button>

                                        <span className="text-sm font-semibold tracking-widest text-white">01/04</span>

                                        <button
                                            className="hover:text-white transition-colors"
                                        >
                                            <HiOutlineChevronRight className="text-2xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    {dots.map((dot) => (
                        <div
                            key={dot.id}
                            className={`h-1.5 rounded-full transition-all ${dot.active ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}