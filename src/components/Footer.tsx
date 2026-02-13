// footer component
export default function Footer() {
    return (
        <div className="bg-[#222c1d] py-14 px-35 flex flex-col">
            {/* upper footer */}
            <div className="flex flex-row justify-between">
                {/* Brand info column */}
                <div className="flex flex-col gap-5 w-87.5">
                    <div className="flex flex-row items-center gap-2.5">
                        <img
                            className="w-11 h-11 shadow-2xl"
                            src="/images/navbar/plant.png"
                            alt="navbar head"
                        />
                        <h3 className="text-[28px] font-black text-white">Planto.</h3>
                    </div>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                </div>

                {/* Quick links */}
                <div className="flex flex-col text-white">
                    <h3 className="text-[22px] font-semibold">Quick Links</h3>

                    <ul className="list-none flex flex-col gap-2.5 mt-5 text-[17px]">
                        <li>Home</li>
                        <li>Types of plants</li>
                        <li>Contact</li>
                        <li>Privacy</li>
                    </ul>
                </div>

                {/* Mail */}
                <div className="flex flex-col text-white w-80">
                    <h3 className="text-[22px] font-semibold">For Every Update.</h3>

                    <div className="border-2 border-white rounded-sm mt-8 flex flex-row justify-between">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="outline-none py-2 pl-2.5 w-full bg-transparent"
                        />
                        <div className="my-0.5 mx-0.5">
                            <button className="bg-white text-[#222c1d] font-semibold uppercase text-[14px] px-3 rounded-md cursor-pointer h-full">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom footer */}
            <div className="flex flex-row justify-between text-white mt-5">
                <div className="text-[20px] flex flex-row gap-5 font-semibold">
                    <h2>FB</h2>
                    <h2>TW</h2>
                    <h2>LI</h2>
                </div>

                <p className="pr-35">planto © all right reserve</p>
            </div>
        </div>
    )
}