// links
const links: string[] = ["Home", "Types Of Plants", "Contact", "Privacy"];

// import icons
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// type for react icons
import type { IconType } from "react-icons";

// type definition
type Social = {
    label: string;
    icon: IconType;
};

// social links
const socials: Social[] = [
    { label: "Facebook", icon: FaFacebookF },
    { label: "Twitter", icon: FaTwitter },
    { label: "LinkedIn", icon: FaLinkedinIn },
];

// footer component
export default function Footer() {
    return (
        <footer className="bg-[#222c1d] border-t border-white/5 font-sans px-6 py-16 sm:px-10 md:px-24 md:py-20">
            {/* Upper Footer */}
            <div className="flex flex-col xl:flex-row justify-between gap-12">
                {/* Brand info column */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <img
                            className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-xl"
                            src="/images/navbar/plant.png"
                            alt="Planto Logo"
                        />

                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            Planto.
                        </h3>
                    </div>

                    <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                        Bringing nature closer to you with handpicked indoor plants that purify your space and elevate your everyday living.
                    </p>
                </div>

                {/* Quick links */}
                <div className="flex flex-col text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">
                        Quick Links
                    </h3>

                    <ul className="flex flex-col gap-3 sm:gap-4 text-white/70 text-base sm:text-lg">
                        {links.map((link, idx) => (
                            <li
                                key={idx}
                                className="hover:text-[#6fc33e] cursor-pointer transition-colors"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Subscription Section */}
                <div className="flex flex-col text-white max-w-md w-full">
                    <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">
                        Stay Updated with Green Living 🌿
                    </h3>

                    <div
                        className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 border border-white/40 rounded-lg p-1
                        focus-within:border-white transition-all"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-transparent outline-none py-3 px-4 w-full text-white placeholder:text-white/40 text-base sm:text-lg"
                        />

                        <button
                            className="bg-white text-[#1b2316] font-bold uppercase text-sm px-6 py-3 rounded-md hover:bg-[#6fc33e] hover:text-white
                            transition-all cursor-pointer"
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-14 pt-8 border-t border-white/5">
                <div className="flex gap-6 sm:gap-8 text-base sm:text-lg font-bold tracking-widest text-white/90">
                    {socials.map(({ label, icon: Icon }) => (
                        <span
                            key={label}
                            aria-label={label}
                            className="hover:text-[#6fc33e] cursor-pointer transition-colors"
                        >
                            <Icon size={20} />
                        </span>
                    ))}
                </div>

                <p className="text-white/50 text-sm sm:text-base font-medium tracking-wide text-center">
                    © 2025 Planto. All rights reserved.
                </p>
            </div>
        </footer>
    );
}