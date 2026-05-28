// import icons
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

// import type
import type { O2Plant } from "../../types";

// Best O2 card component
export default function BestO2Card({ plants }: { plants: O2Plant[] }) {
    return (
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
                            data-aos="fade-right"
                            data-aos-duration="900"
                            data-aos-delay="200"
                        />
                    </div>

                    {/* Content — driven by activeIndex */}
                    <div
                        className="md:w-1/2 space-y-6 text-white/70 max-lg:pb-10"
                        data-aos="fade-left"
                        data-aos-duration="900"
                        data-aos-delay="300"
                    >
                        <h3 className="text-3xl max-sm:text-2xl font-semibold leading-tight max-w-md">
                            {item.title}
                        </h3>

                        <div className="space-y-4 text-gray-300 text-lg max-sm:text-base leading-relaxed">
                            {item.description.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>

                        <div className="flex items-center justify-between pt-3">
                            <button
                                className="px-10 py-2 border border-white/40 rounded-md text-lg max-sm:text-base font-medium
                                hover:bg-white hover:text-black transition-all cursor-pointer"
                            >
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
    )
}