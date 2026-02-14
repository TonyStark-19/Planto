// import react icons
import { BiMenuAltRight } from "react-icons/bi";
import { IoSearchOutline, IoChevronDown } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

// nav icons component
import NavIcons from "./NavIcons";

// navbar component
export default function Navbar() {
    return (
        <nav className="bg-transparent flex items-center justify-between w-full z-50 px-6 py-6 sm:px-8 lg:px-12 lg:py-8">

            {/* Navbar Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
                <img
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-xl transition-transform group-hover:scale-110"
                    src="/images/navbar/plant.png"
                    alt="Planto Logo"
                />
                <h3 className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight">
                    Planto.
                </h3>
            </div>

            {/* Navigation Links */}
            <ul className="hidden lg:flex items-center gap-12 list-none text-white/90 font-medium text-lg">
                <li className="cursor-pointer hover:text-white transition-all">
                    Home
                </li>
                <li className="flex items-center gap-1 cursor-pointer hover:text-white transition-all">
                    Plants Type
                    <IoChevronDown size={16} className="mt-1 opacity-70" />
                </li>
                <li className="cursor-pointer hover:text-white transition-all">
                    More
                </li>
                <li className="cursor-pointer hover:text-white transition-all">
                    Contact
                </li>
            </ul>

            {/* Nav Icons */}
            <div className="flex items-center gap-5 sm:gap-6 lg:gap-8">
                <NavIcons icon={IoSearchOutline} />
                <NavIcons icon={HiOutlineShoppingBag} />
                <NavIcons icon={BiMenuAltRight} />
            </div>
        </nav>
    );
}