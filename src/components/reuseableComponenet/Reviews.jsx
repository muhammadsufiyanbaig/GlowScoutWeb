"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ashley K.",
    stars: 5,
    review:
      "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
  },
  {
    name: "Ashley F.",
    stars: 4,
    review:
      "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
  },
];

const Reviews = () => {
  const [favourite, setFavourite] = useState(false);
  const [reviews, setReviews] = useState(testimonials.slice(0, 4));
  const [allReviewsShown, setAllReviewsShown] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    stars: 0,
    review: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleViewMore = () => {
    const moreReviews = testimonials.slice(reviews.length, reviews.length + 4);
    setReviews([...reviews, ...moreReviews]);
    if (reviews.length + moreReviews.length >= testimonials.length) {
      setAllReviewsShown(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleStarChange = (stars) => {
    setNewReview({ ...newReview, stars });
  };

  const handleSubmitReview = () => {
    setReviews([newReview, ...reviews]);
    setNewReview({ name: "", stars: 0, review: "" });
    setSubmitMessage("Thanks for the review. We will verify it.");
    setTimeout(() => setSubmitMessage(""), 3000);
  };

  return (
    <div className="container font-raleway mx-auto px-4">
      <div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Reviews</h2>
          {reviews.map((testimonial, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} fill="#E5BA1F" strokeWidth={0} size={18} />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i} fill="#111" strokeWidth={0} size={18} />
                ))}
              </div>
              <p className="text-lg">{testimonial.review}</p>
              <p className="text-sm text-gray-600">- {testimonial.name}</p>
            </div>
          ))}
          {!allReviewsShown && (
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="rounded-xl w-full"
              onClick={handleViewMore}
            >
              View More
            </Button>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Submit a Review</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-gray-300 rounded-md shadow-sm"
              value={newReview.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Rating</label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarChange(star)}
                >
                  <Star
                    fill={star <= newReview.stars ? "#E5BA1F" : "#111"}
                    strokeWidth={0}
                    size={18}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="review">
              Review
            </label>
            <textarea
              id="review"
              name="review"
              className="w-full border-gray-300 rounded-md shadow-sm"
              rows="4"
              value={newReview.review}
              onChange={handleInputChange}
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="rounded-xl w-full"
            onClick={handleSubmitReview}
          >
            Submit Review
          </Button>
          {submitMessage && (
            <p className="text-green-600 text-center mt-4">{submitMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
