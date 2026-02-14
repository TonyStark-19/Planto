// import icons
import { HiOutlineShoppingBag } from "react-icons/hi2";

// import components
import SectionHeading from "../components/SectionHeading";

// products data
const products = [
    {
        name: "Calathea plant",
        price: "359/-",
        image: "/images/plants/plant5.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        name: "Calathea plant",
        price: "359/-",
        image: "/images/plants/plant6.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        name: "Calathea plant",
        price: "359/-",
        image: "/images/plants/plant1.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        name: "Calathea plant",
        price: "359/-",
        image: "/images/plants/plant2.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        name: "Calathea plant",
        price: "359/-",
        image: "/images/plants/plant3.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        name: "Calathea plant",
        price: "359/-",
        image: "/images/plants/plant4.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
];

// selling section
export default function Selling() {
    return (
        <div className="bg-[#1b2316] text-white flex flex-col items-center justify-center pt-24 pb-10 max-sm:pb-5 px-6 font-sans">

            {/* Header with Styled Brackets */}
            <SectionHeading title="Best Selling Plants" />

            {/* Product Grid */}
            <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 max-lg:grid-cols-2 gap-10 max-w-7xl w-full mt-5">
                {products.map((item, index) => (
                    <div key={index} className="relative group">

                        {/* Card Container */}
                        <div
                            className="relative mt-10 mb-5 p-[1.5px] rounded-[3.5rem] transition-all duration-300 bg-linear-to-br from-white/20
                            via-transparent to-white/20"
                        >
                            <div
                                className="bg-[#242c20] p-8 pt-0 rounded-[3.5rem] flex justify-center flex-col items-center shadow-2xl"
                            >
                                {/* Plant Image */}
                                <div className="z-10 w-56 h-56 duration-500 scale-130 group-hover:scale-140">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-contain -translate-y-10" />
                                </div>

                                <div className="text-white/70">
                                    <h3 className="text-2xl font-medium mb-3">{item.name}</h3>
                                    <p className="text-sm leading-relaxed mb-5 w-[85%]">
                                        {item.desc}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-semibold">Rs. {item.price}</h3>
                                        <button className="py-2.5 px-3 border border-gray-500 rounded-xl hover:bg-[#6fc33e] hover:border-[#6fc33e]
                                        transition-colors group/btn cursor-pointer">
                                            <HiOutlineShoppingBag className="text-xl text-white/80 group-hover:text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}