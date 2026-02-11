import { useState, useEffect, useMemo } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { reviews, Review } from "@/data/reviews";
import { motion, AnimatePresence } from "framer-motion";

const FeaturedReview = () => {
  const featuredReviews = useMemo(
    () => reviews.filter((r) => r.rating === 5),
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [featuredReviews.length]);

  const review = featuredReviews[currentIndex];

  return (
    <div className="mb-16">
      <div className="relative bg-card rounded-2xl border border-border overflow-hidden">
        {/* Green accent left border */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />

        <div className="p-8 md:p-12 pl-10 md:pl-14 relative">
          {/* Decorative quote mark */}
          <span className="absolute top-4 right-8 text-[120px] leading-none font-serif text-accent/10 select-none pointer-events-none">
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center text-accent font-semibold text-2xl flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground">
                    {review.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-foreground/85 font-[Lora] italic">
                {review.text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + featuredReviews.length) %
                    featuredReviews.length
                )
              }
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Previous featured review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {featuredReviews.length}
            </span>
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev + 1) % featuredReviews.length
                )
              }
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Next featured review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReview;
