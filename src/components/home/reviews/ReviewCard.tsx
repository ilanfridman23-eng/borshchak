import { Star, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Review } from "@/data/reviews";
import { motion } from "framer-motion";

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-card rounded-xl p-6 md:p-8 border border-border hover:shadow-md transition-shadow relative overflow-hidden"
    >
      {/* Google G watermark */}
      <span className="absolute bottom-3 right-4 text-[64px] font-bold leading-none text-muted-foreground/5 select-none pointer-events-none">
        G
      </span>

      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg flex-shrink-0">
          {review.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-lg text-foreground">{review.name}</h4>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    "w-4 h-4",
                    star <= review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{review.date}</span>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-base leading-relaxed mb-4">
        {review.text}
      </p>

      {/* Verified badge */}
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground/70">
        <BadgeCheck className="w-4 h-4 text-accent" />
        <span>Google Review</span>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
