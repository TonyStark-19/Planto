// import icons
import { FaPlay } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";

// home section
export default function Home() {
    return (
        <div className="relative px-15 pt-25 overflow-hidden font-sans">
            <div className="relative z-10 flex h-full items-center justify-between -mt-10">
                {/* Left main content */}
                <div className="text-white/80 max-w-200">
                    <h1 className="text-[90px] font-semibold leading-[0.9] -ml-1">Breath Natural</h1>
                    <p className="text-lg mt-4 ml-1 max-w-125">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="flex flex-row gap-6 mt-4 items-center">
                        <button className="border-2 border-white/60 rounded-xl px-12 py-2.5 text-xl hover:bg-white hover:text-[#1b2316]
                        transition-all cursor-pointer">
                            Explore
                        </button>

                        <div className="flex flex-row items-center gap-4 group cursor-pointer">
                            <button className="border-2 border-white/60 rounded-full p-4 flex items-center justify-center group-hover:bg-[#6fc33e]
                            group-hover:border-[#6fc33e] transition-all cursor-pointer">
                                <FaPlay className="text-[16px] text-white" />
                            </button>
                            <p className="text-lg font-medium">Live Demo...</p>
                        </div>
                    </div>

                    {/* Floating Review Card*/}
                    <div className="mt-30 w-80 p-1px rounded-3xl backdrop-blur-sm">
                        <div
                            className="bg-white/5 px-6 py-8 rounded-3xl"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src="/images/people/p4.jpg"
                                    className="w-10 h-10 rounded-full border object-cover border-white/20"
                                    alt="people" />
                                <div>
                                    <h4 className="text-sm font-semibold tracking-wide">alena Patel</h4>
                                    <div className="flex text-yellow-300 text-[12px] tracking-wider">★ ★ ★ ★ ★</div>
                                </div>
                            </div>
                            <p className="text-xs text-white/60 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                            </p>
                        </div>
                    </div>
                </div>

                {/* Featured Plant Card */}
                <div className="relative -mt-10 group">
                    <div
                        className="p-[1.5px] rounded-[4rem] bg-linear-to-br from-white/20 via-transparent to-white/20"
                    >
                        <div
                            className="bg-[#242c20]/60 backdrop-blur-sm max-w-96 py-8 px-10 rounded-[4rem] text-left"
                        >
                            {/* Floating Plant Image */}
                            <div className="relative -mt-30 mb-6">
                                <img
                                    src="/images/plants/plant5.png"
                                    alt="Calathea"
                                    className="w-full h-75 object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
                                />
                            </div>

                            <div className="text-white/70">
                                <p className="text-md mb-3 tracking-wide">Trendy House Plant</p>
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-2xl">Calathea plant</h3>
                                    <MdOutlineArrowForwardIos className="text-xl text-white/40" />
                                </div>

                                <button className="mt-6 border border-white/40 rounded-xl px-10 py-2.5 text-sm font-semibold hover:bg-white
                                hover:text-black transition-al cursor-pointer">
                                    Buy Now
                                </button>

                                <div className="flex justify-center gap-2 mt-8">
                                    <div className="w-6 h-1.5 bg-white rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}