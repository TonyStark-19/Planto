// import type
import type { Review } from "../../types";

// star rating type
export type StarRating = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

// get stars function
function getStars(rating: StarRating): { full: number; half: boolean } {
    return {
        full: Math.floor(rating),
        half: rating % 1 !== 0,
    };
}

// review card props
interface ReviewCardProps {
    review: Review;
}

// review card component
export default function ReviewCard({ review }: ReviewCardProps) {
    const { full, half } = getStars(review.rating as StarRating);

    return (
        <div className="flex-1">
            <div className="p-[1.2px] rounded-[3.2rem] bg-linear-to-br from-[#4a5a41] via-[#1f261b] to-[#4a5a41] hover:-translate-y-2
            transition-transform duration-500">
                <div className="relative bg-[#242c20]/90 rounded-[3.2rem] px-10 py-12 shadow-2xl overflow-hidden">
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
                                    {"★".repeat(full)}
                                    {half && <span className="opacity-70">★</span>}
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
    );
}