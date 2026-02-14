// import icons
import { HiOutlineShoppingBag } from "react-icons/hi2";

// import components
import SectionHeading from "../components/SectionHeading";

// palnts contnent
const trendyPlants = [
    {
        title: "For Small Decs Ai Plat",
        price: "599/-",
        image: "/images/plants/plant6.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        class: "md:flex-row",
        position: "translate-x-30 max-sm:translate-y-2"
    },
    {
        title: "For Small Decs Ai Plat",
        price: "599/-",
        image: "/images/plants/plant7.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        class: "md:flex-row-reverse",
        position: "translate-x-20 max-sm:translate-y-2"
    }
];

// trendy plants
export default function Trendy() {
    return (
        <div className="text-white flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden">
            {/* Header with Styled Brackets */}
            <SectionHeading title="Trendy Plants" />

            {/* Boxes Container */}
            <div className="flex flex-col gap-25 w-full max-w-6xl z-10">
                {trendyPlants.map((plant, index) => (
                    <div
                        key={index}
                        className="relative p-[1.5px] rounded-[4rem] bg-linear-to-br from-white/10 via-transparent to-white/10"
                    >
                        <div
                            className={`bg-[#242c20]/40 backdrop-blur-sm flex flex-col ${plant.class} max-md:flex-col items-center gap-10 px-20 py-5 rounded-[4rem]`}
                        >
                            {/* Plant Image */}
                            <div className="md:w-1/2 relative">
                                <img
                                    src={plant.image}
                                    alt={plant.title}
                                    className={`h-80 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] scale-150 md:${plant.position} -translate-y-10`}
                                />
                            </div>

                            {/* Content Section */}
                            <div className="md:w-1/2 space-y-3">
                                <h2 className="text-2xl font-semibold leading-tight">{plant.title}</h2>
                                <p className="text-sm leading-relaxed max-w-md">
                                    {plant.description}
                                </p>
                                <h2 className="text-2xl font-semibold">Rs. {plant.price}</h2>

                                <div className="flex items-center gap-4 pt-4">
                                    <button className="px-10 py-2.5 border border-white/40 rounded-md text-md font-medium hover:bg-white
                                    hover:text-black transition-all cursor-pointer">
                                        Explore
                                    </button>
                                    <button className="py-2.5 px-3  border border-white/40 rounded-md hover:bg-[#6fc33e] hover:border-[#6fc33e]
                                    transition-all group cursor-pointer">
                                        <HiOutlineShoppingBag className="text-2xl text-white/80 group-hover:text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}