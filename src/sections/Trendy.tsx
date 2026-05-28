// import components
import SectionHeading from "../components/utils/SectionHeading";
import TrendyPlantCard from "../components/trendyPlant/TrendyPlantCard";

// import type
import type { TrendyPlant } from "../types";

// palnts contnent
const trendyPlants: TrendyPlant[] = [
    {
        title: "Variegated Hosta",
        price: "599/-",
        image: "/images/plants/plant6.png",
        description: "A beautiful indoor foliage plant with soft variegated leaves. Perfect for brightening small spaces and adding a calm, natural vibe to your home.",
        layout: "md:flex-row",
        position: "translate-x-30 max-sm:translate-y-2"
    },
    {
        title: "Haworthia Zebra",
        price: "599/-",
        image: "/images/plants/plant7.png",
        description: "A compact, low-maintenance succulent with striking white-striped leaves. Ideal for desks, shelves, and modern interiors.",
        layout: "md:flex-row-reverse",
        position: "translate-x-20 max-sm:translate-y-2"
    }
];

// get direction for aos as per card layout
function getAosDirection(layout: TrendyPlant["layout"]): string {
    return layout === "md:flex-row" ? "fade-right" : "fade-left";
}

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
                        key={plant.title + index}
                        data-aos={getAosDirection(plant.layout)}
                        data-aos-duration="800"
                        data-aos-delay={index * 150}
                    >
                        <TrendyPlantCard plant={plant} />
                    </div>
                ))}
            </div>
        </div>
    );
}