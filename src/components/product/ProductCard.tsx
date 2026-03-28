// import icons
import { HiOutlineShoppingBag } from "react-icons/hi2";

// import type
import type { Product } from "../../types";

// Product Card Props
interface ProductCardProps {
    product: Product;
}

// product card component
export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="relative group">
            <div className="relative mt-10 mb-5 p-[1.5px] rounded-[3.5rem] transition-all duration-300 bg-linear-to-br from-white/20 via-transparent to-white/20">
                <div className="bg-[#242c20] p-8 pt-0 rounded-[3.5rem] flex justify-center flex-col items-center shadow-2xl">
                    {/* Plant Image */}
                    <div className="z-10 w-56 h-56 duration-500 scale-130 group-hover:scale-140">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain -translate-y-10"
                        />
                    </div>

                    <div className="text-white/70">
                        <h3 className="text-2xl font-medium mb-3">{product.name}</h3>
                        <p className="text-sm leading-relaxed mb-5 w-[85%]">{product.desc}</p>

                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold">Rs. {product.price}</h3>

                            <button
                                className="py-2.5 px-3 border border-gray-500 rounded-xl hover:bg-[#6fc33e] hover:border-[#6fc33e] transition-colors
                                group/btn cursor-pointer"
                            >
                                <HiOutlineShoppingBag className="text-xl text-white/80 group-hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}