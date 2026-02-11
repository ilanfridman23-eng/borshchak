import { useState, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import { reviews } from "@/data/reviews";
import ReviewStatsHeader from "./reviews/ReviewStatsHeader";
import FeaturedReview from "./reviews/FeaturedReview";
import ReviewCard from "./reviews/ReviewCard";

const GoogleReviews = () => {
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const filteredReviews = useMemo(() => {
    const fiveStarOnly = reviews.filter((r) => r.rating === 5);
    if (filterRating === null) return fiveStarOnly;
    return fiveStarOnly.filter((r) => r.rating === filterRating);
  }, [filterRating]);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-5xl">
        <ReviewStatsHeader
          filterRating={filterRating}
          onFilterChange={setFilterRating}
        />

        {/* Featured Spotlight (only when unfiltered) */}
        {filterRating === null && <FeaturedReview />}

        {/* All Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Read More CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Borshchak+Law+Group/@39.9612,-82.9988,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-base font-medium"
          >
            Read All 160 Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
