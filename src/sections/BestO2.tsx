// import components
import SectionHeading from "../components/utils/SectionHeading";
import BestO2Card from "../components/bestO2/BestO2Card";

// import type
import type { O2Plant } from "../types";

// plants data
const plants: O2Plant[] = [
    {
        image: "/images/plants/plant5.png",
        alt: "Dieffenbachia indoor plant",
        title: "Fresh & Air-Purifying Indoor Plants",
        description: [
            "Bring home the beauty of Dieffenbachia, known for its lush variegated leaves and air-refreshing qualities.",
            "Easy to care for and perfect for indoor spaces, it adds a vibrant and calming touch to your home or workspace.",
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
            {/* Header with Styled Brackets */}
            <SectionHeading title="Our Best O2" />

            <div
                className="relative max-w-6xl w-full group mt-10 max-sm:mt-5"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                {/* best O2 card */}
                <BestO2Card plants={plants} />

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