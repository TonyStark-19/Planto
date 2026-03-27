// import type
import type { Review } from "../types";

// Review Card props
interface ReviewCardProps {
    review: Review;
}

// review card component
export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="mt-20 sm:mt-24 w-80 max-lg:w-full max-w-full p-px rounded-3xl backdrop-blur-sm">
            <div className="bg-white/5 px-6 py-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-3">
                    <img
                        src={review.avatar}
                        className="w-10 h-10 rounded-full border object-cover border-white/20"
                        alt={review.name}
                    />
                    <div>
                        <h4 className="text-sm font-semibold tracking-wide">{review.name}</h4>
                        <div className="flex text-yellow-300 text-[12px] tracking-wider">
                            {"★".repeat(review.rating)}
                        </div>
                    </div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">{review.comment}</p>
            </div>
        </div>
    );
}