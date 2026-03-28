// import components
import SectionHeading from "../components/SectionHeading";
import ReviewCard from "../components/review/Review";

// import type
import type { Review } from "../types";

// reviews data
const reviews: Review[] = [
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
        <section className="bg-[#1b2316] text-white pt-28 pb-20 max-sm:pb-10 px-6 flex justify-center flex-col items-center font-sans">

            {/* Header with Styled Brackets */}
            <SectionHeading title="Customer Reviews" />

            <div className="max-w-7xl w-full mt-10 max-sm:mt-5">
                {/* Cards */}
                <div className="flex flex-row max-[1000px]:flex-col gap-10">
                    {reviews.map((review) => (
                        <ReviewCard
                            key={review.name}
                            review={review}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}