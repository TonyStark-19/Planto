// import react icons
import { BiMenuAltRight } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";

// nav icons component
import NavIcons from "./NavIcons";

// navbar component
export default function Navbar() {
    return (
        <nav className="bg-transparent flex flex-row items-center justify-between py-8 px-12 w-full z-50">
            {/* Navbar Logo */}
            <div className="flex flex-row items-center gap-3 cursor-pointer group">
                <img
                    className="w-10 h-10 object-contain drop-shadow-xl transition-transform group-hover:scale-110"
                    src="/images/navbar/plant.png"
                    alt="Planto Logo"
                />
                <h3 className="text-[26px] font-bold text-white tracking-tight">
                    Planto.
                </h3>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex flex-row items-center gap-12 list-none text-white/90 font-medium text-lg">
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
            <div className="flex flex-row items-center gap-8">
                <NavIcons icon={IoSearchOutline} />
                <NavIcons icon={HiOutlineShoppingBag} />
                <NavIcons icon={BiMenuAltRight} />
            </div>
        </nav>
    );
}