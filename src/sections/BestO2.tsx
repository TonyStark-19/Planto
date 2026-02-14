// import icons
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

// import components
import SectionHeading from "../components/SectionHeading";

// best o2 section
export default function BestO2() {
    return (
        <div className="bg-[#1b2316] text-white flex flex-col items-center justify-center py-20 px-6 font-sans">

            {/* Header with Styled Brackets */}
            <SectionHeading title="Our Best O2" />

            {/* Main Feature Card */}
            <div className="relative max-w-6xl w-full group mt-10">

                <div
                    className="p-[1.5px] rounded-[4rem] bg-linear-to-br from-white/20 via-transparent to-white/20"
                >
                    <div
                        className="bg-[#242c20]/80 backdrop-blur-sm flex flex-col md:flex-row items-center gap-12 px-10 py-0 rounded-[4rem]"
                    >
                        {/* Plant Image */}
                        <div className="md:w-1/2 relative">
                            <img
                                src="/images/plants/plant5.png"
                                alt="O2 Plant"
                                className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] scale-110 -translate-y-12 -translate-x-15"
                            />
                        </div>

                        {/* Content Area */}
                        <div className="md:w-1/2 space-y-6 text-white/70">
                            <h3 className="text-3xl font-semibold leading-tight max-w-md">
                                We Have Small And Best O2 Plants Collection's
                            </h3>

                            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam.
                                </p>
                            </div>

                            {/* Bottom buttons */}
                            <div className="flex items-center justify-between pt-3">
                                <button className="px-10 py-2 border border-white/40 rounded-md text-lg font-medium hover:bg-white
                                hover:text-black transition-all cursor-pointer">
                                    Explore
                                </button>

                                {/* Slider Controls */}
                                <div className="flex items-center gap-6 text-white/60">
                                    <button className="hover:text-white transition-colors">
                                        <HiOutlineChevronLeft className="text-2xl" />
                                    </button>
                                    <span className="text-sm font-semibold tracking-widest text-white">01/04</span>
                                    <button className="hover:text-white transition-colors">
                                        <HiOutlineChevronRight className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    <div className="w-6 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}