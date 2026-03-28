// import icons
import { MdOutlineArrowForwardIos } from "react-icons/md";

// import type
import type { Plant } from "../../types";

// Featured Plant Card props
interface FeaturedPlantCardProps {
    plant: Plant;
}

// crousal dots
const dots = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
];

// featured plat cards
export default function FeaturedPlantCard({ plant }: FeaturedPlantCardProps) {
    return (
        <div className="relative group w-full max-w-sm mx-auto max-lg:max-w-lg lg:mx-0">
            <div className="p-[1.5px] rounded-[4rem] bg-linear-to-br from-white/20 via-transparent to-white/20">
                <div className="bg-[#242c20]/60 backdrop-blur-sm py-8 px-8 sm:px-10 rounded-[4rem] text-left">

                    {/* Plant Image */}
                    <div className="relative -mt-24 sm:-mt-30 mb-6">
                        <img
                            src={plant.image}
                            alt={plant.alt}
                            className="w-full h-64 sm:h-72 object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
                        />
                    </div>

                    <div className="text-white/70">
                        <p className="text-sm sm:text-md mb-3 tracking-wide">
                            {plant.tag}
                        </p>

                        <div className="flex items-center justify-between gap-4">
                            <h3 className="text-xl sm:text-2xl">{plant.name}</h3>
                            <MdOutlineArrowForwardIos className="text-lg sm:text-xl text-white/40" />
                        </div>

                        <button
                            className="mt-6 border border-white/40 rounded-xl px-8 sm:px-10 py-2.5 text-sm font-semibold hover:bg-white
                            hover:text-black transition-all cursor-pointer"
                        >
                            Buy Now
                        </button>

                        <div className="flex justify-center gap-2 mt-8">
                            {dots.map((dot) => (
                                <div
                                    key={dot.id}
                                    className={`h-1.5 rounded-full transition-all ${dot.active ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}