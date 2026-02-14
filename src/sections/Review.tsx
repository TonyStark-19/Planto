// import components
import SectionHeading from "../components/SectionHeading";

// reviews data
const reviews = [
    {
        name: "Maxn Raval",
        image: "/images/people/p1.jpg",
        rating: 4.5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
        name: "Venely K",
        image: "/images/people/p2.jpg",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
        name: "Lii Thakur",
        image: "/images/people/p3.jpg",
        rating: 4.5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
];

// review section
export default function Review() {
    return (
        <section className="bg-[#1b2316] text-white pt-28 pb-20 px-6 flex justify-center flex-col items-center font-sans">

            {/* Header with Styled Brackets */}
            <SectionHeading title="Customer Reviews" />

            <div className="max-w-7xl w-full mt-10">
                {/* Cards */}
                <div className="flex flex-col md:flex-row gap-10">
                    {reviews.map((review, i) => (
                        <div key={i} className="flex-1">
                            <div className="p-[1.2px] rounded-[3.2rem] bg-linear-to-br from-[#4a5a41] via-[#1f261b] to-[#4a5a41] hover:-translate-y-2
                            transition-transform duration-500">
                                <div className="relative bg-[#242c20]/90 rounded-[3.2rem] px-10 py-12 shadow-2xl overflow-hidden">
                                    {/* CONTENT */}
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="w-16 h-16 rounded-full border object-cover border-[#3d4a37]"
                                            />
                                            <div>
                                                <h4 className="text-xl font-semibold">{review.name}</h4>
                                                <div className="flex text-yellow-400 mt-1 text-sm tracking-widest">
                                                    {"★".repeat(Math.floor(review.rating))}
                                                    {review.rating % 1 !== 0 && <span className="opacity-70">★</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-300/80 text-[15px] leading-relaxed">
                                            {review.text}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}