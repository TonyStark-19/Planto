// import components
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/product/ProductCard";

// import type
import type { Product } from "../types";

// products data
const products: Product[] = [
    {
        name: "Dieffenbachia",
        price: "359/-",
        image: "/images/plants/plant5.png",
        desc: "A vibrant indoor plant with variegated leaves, perfect for adding freshness."
    },
    {
        name: "Variegated Hosta",
        price: "359/-",
        image: "/images/plants/plant6.png",
        desc: "Elegant foliage with soft green and white tones, ideal for bright indoor corners."
    },
    {
        name: "Desert Cactus",
        price: "359/-",
        image: "/images/plants/plant1.png",
        desc: "A hardy, low-maintenance cactus that thrives with minimal care—perfect for modern decor."
    },
    {
        name: "Monstera Deliciosa",
        price: "359/-",
        image: "/images/plants/plant2.png",
        desc: "Iconic split leaves that bring a bold tropical vibe to any room."
    },
    {
        name: "Bird of Paradise",
        price: "359/-",
        image: "/images/plants/plant3.png",
        desc: "Tall and striking plant with lush green leaves, great for statement interiors."
    },
    {
        name: "Aloe Vera",
        price: "359/-",
        image: "/images/plants/plant4.png",
        desc: "A medicinal succulent known for its soothing properties and easy care."
    }
];

// caps delay so it never gets too long on large lists
const MAX_DELAY = 400;

// selling section
export default function Selling() {
    return (
        <div className="bg-[#1b2316] text-white flex flex-col items-center justify-center pt-24 pb-10 max-sm:pb-5 px-6 font-sans">
            {/* Header with Styled Brackets */}
            <SectionHeading title="Best Selling Plants" />

            {/* Product Grid */}
            <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 max-lg:grid-cols-2 gap-10 max-w-7xl w-full mt-5">
                {products.map((product, index) => (
                    <div
                        key={product.image + index}
                        data-aos="zoom-in"
                        data-aos-duration="600"
                        data-aos-delay={Math.min(index * 100, MAX_DELAY)}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}