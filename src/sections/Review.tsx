// import components
import SectionHeading from "../components/utils/SectionHeading";
import ReviewCard from "../components/review/Review";

// import type
import type { Review } from "../types";

// reviews data
const reviews: Review[] = [
    {
        name: "Maxn Raval",
        image: "/images/people/p1.jpg",
        rating: 4.5,
        text: "Great experience overall. The plant arrived fresh and well-packed, and it instantly added a nice touch to my room. Will definitely order again.",
    },
    {
        name: "Venely K",
        image: "/images/people/p2.jpg",
        rating: 5,
        text: "Absolutely loved the quality! The plant looks exactly like the pictures and feels very premium. Delivery was quick and packaging was perfect.",
    },
    {
        name: "Lii Thakur",
        image: "/images/people/p3.jpg",
        rating: 4.5,
        text: "Really happy with my purchase. The plant was healthy and easy to maintain. It fits perfectly in my workspace and feels very calming.",
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
                    {reviews.map((review, index) => (
                        <div
                            key={review.name}
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay={index * 150}
                            className="flex-1"
                        >
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}