// import components
import SectionHeading from "../components/SectionHeading";
import TrendyPlantCard from "../components/trendyPlant/TrendyPlantCard";

// import type
import type { TrendyPlant } from "../types";

// palnts contnent
const trendyPlants: TrendyPlant[] = [
    {
        title: "For Small Decs Ai Plat",
        price: "599/-",
        image: "/images/plants/plant6.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        layout: "md:flex-row",
        position: "translate-x-30 max-sm:translate-y-2"
    },
    {
        title: "For Small Decs Ai Plat",
        price: "599/-",
        image: "/images/plants/plant7.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        layout: "md:flex-row-reverse",
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
                    <TrendyPlantCard
                        key={plant.title + index}
                        plant={plant}
                    />
                ))}
            </div>
        </div>
    );
}