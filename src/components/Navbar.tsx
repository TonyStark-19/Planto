// import react icons
import { BiMenuAltRight } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

// import components
import NavIcons from "./NavIcons";

// Navbar component
export default function Navbar() {
    return (
        <div className="bg-transparent flex flex-row items-center justify-between py-6 px-10">
            {/* Navbar head/logo */}
            <div className="flex flex-row items-center gap-2.5 cursor-pointer">
                <img
                    className="w-11 h-11 shadow-2xl"
                    src="/images/navbar/plant.png"
                    alt="navbar head"
                />
                <h3 className="text-[28px] font-black text-white/80">Planto.</h3>
            </div>

            {/* Nav elements */}
            <ul className="flex flex-row items-center gap-9 list-none text-white/80 text-xl">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Plants Type</li>
                <li className="cursor-pointer">More</li>
                <li className="cursor-pointer">Contact</li>
            </ul>

            {/* Nav icons */}
            <div className="flex flex-row gap-7">
                <NavIcons icon={IoSearchOutline} />
                <NavIcons icon={HiOutlineShoppingBag} />
                <NavIcons icon={BiMenuAltRight} />
            </div>
        </div>
    )
}