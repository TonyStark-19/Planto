// import components
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/product/ProductCard";

// import type
import type { Product } from "../types";

// products data
const products: Product[] = [
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
                {products.map((product, index) => (
                    <ProductCard
                        key={product.image + index}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}