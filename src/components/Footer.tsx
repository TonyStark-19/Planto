// links
const links = ["Home", "Type's Of plant's", "Contact", "Privacy"];

// socials
const socials = ["FB", "TW", "LI"];

// footer component
export default function Footer() {
    return (
        <div className="bg-[#222c1d] py-20 px-10 md:px-24 flex flex-col font-sans border-t border-white/5">
            {/* Upper Footer */}
            <div className="flex flex-col md:flex-row justify-between gap-12">

                {/* Brand info column */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <div className="flex flex-row items-center gap-3 cursor-pointer">
                        <img
                            className="w-10 h-10 object-contain drop-shadow-xl"
                            src="/images/navbar/plant.png"
                            alt="Planto Logo"
                        />
                        <h3 className="text-3xl font-bold text-white tracking-tight">Planto.</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Quick links */}
                <div className="flex flex-col text-white">
                    <h3 className="text-xl font-bold mb-6">Quick Link's</h3>
                    <ul className="list-none flex flex-col gap-4 text-white/70 text-lg">
                        {links.map((link, idx) => (
                            <li key={idx} className="hover:text-[#6fc33e] cursor-pointer transition-colors">{link}</li>
                        ))}
                    </ul>
                </div>

                {/* Subscription Section */}
                <div className="flex flex-col text-white max-w-md w-full">
                    <h3 className="text-xl font-bold mb-8">For Every Update.</h3>

                    <div className="relative flex flex-row items-center border border-white/40 rounded-lg p-1 pr-2 group focus-within:border-white transition-all">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="bg-transparent outline-none py-3 px-4 w-full text-white placeholder:text-white/40 text-lg"
                        />
                        <button className="bg-white text-[#1b2316] font-bold uppercase text-sm px-6 py-3 rounded-md hover:bg-[#6fc33e]
                        hover:text-white transition-all cursor-pointer">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center text-white mt-16 pt-8 border-t border-white/5">
                <div className="flex flex-row gap-8 text-lg font-bold tracking-widest text-white/90">
                    {socials.map((social, idx) => (
                        <h2 key={idx} className="hover:text-[#6fc33e] cursor-pointer transition-colors">{social}</h2>
                    ))}
                </div>

                <p className="text-white/50 mt-6 md:mt-0 font-medium tracking-wide">
                    planto © all right reserve
                </p>
            </div>
        </div>
    )
}