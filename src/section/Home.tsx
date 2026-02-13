// import icons
import { FaPlay } from "react-icons/fa6";

// home component
export default function Home() {
    return (
        <div className="h-screen px-10">
            {/* Content */}
            <div className="text-white/80 w-200 mt-15">
                <h1 className="text-[110px] font-semibold -mb-5">Breath Natural</h1>
                <p className="text-xl ml-1.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.</p>

                <div className="flex flex-row gap-6 mt-5">
                    <button className="border-2 border-white/80 rounded-lg px-10 py-2 text-xl cursor-pointer">Explore</button>

                    <div className="flex flex-row items-center gap-2.5">
                        <button className="border-2 border-white/80 rounded-full p-3 flex items-center justify-center cursor-pointer">
                            <FaPlay className="text-[20px]" />
                        </button>
                        <p className="text-lg">Live Demo...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}