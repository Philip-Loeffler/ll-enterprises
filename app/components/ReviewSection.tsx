"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const fallbackReviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    date: "2 weeks ago",
    text: "Outstanding service! They installed a new electrical panel in our home and the work was professional and clean. Highly recommend for any electrical needs.",
    avatar: "JS",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    date: "1 month ago",
    text: "We hired them for commercial lighting installation in our warehouse. The team was efficient, knowledgeable, and completed the project on time and within budget. Excellent work!",
    avatar: "SJ",
  },
  {
    id: 3,
    name: "Michael Brown",
    rating: 5,
    date: "3 weeks ago",
    text: "Had them install an EV charger in my garage. The electrician was prompt, courteous, and did a fantastic job. Everything works perfectly and the installation looks great.",
    avatar: "MB",
  },
];

export const ReviewSection = ({
  setActiveSection,
}: {
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const [reviews, setReviews] = useState(fallbackReviews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (inView) setActiveSection("review");
  }, [inView, setActiveSection]);

  useEffect(() => {
    // Fetch Google reviews
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();

        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      } catch (error) {
        console.error("Failed to fetch reviews, using fallback data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section
      id="review"
      ref={ref}
      className="h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-20 bg-white"
    >
      <h2 className="text-6xl font-bold mb-4 text-center text-black">
        Customer Reviews
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl text-center mb-12">
        See what our customers are saying about our electrical services
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`bg-gray-50 rounded-2xl border border-gray-200 p-8 hover:border-[#550000] transition-all duration-300 hover:shadow-lg flex flex-col ${
              index === 2 ? "hidden md:flex" : ""
            }`}
          >
            {/* Avatar and Name */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white"
                style={{ backgroundColor: "#550000" }}
              >
                {review.avatar}
              </div>
              <div>
                <h3 className="font-semibold text-black">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.date}</p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: review.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="#550000"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 leading-relaxed flex-grow">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>

      {/* Loading/Status indicator */}
      {loading && (
        <p className="mt-8 text-sm text-gray-600">Loading reviews...</p>
      )}
    </section>
  );
};
