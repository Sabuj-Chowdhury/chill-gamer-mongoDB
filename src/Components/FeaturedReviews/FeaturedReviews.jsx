import Marquee from "react-fast-marquee";
import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_url}/all-reviews`).then((res) => {
      setReviews(res.data);
      setLoading(false);
    });
  }, []);
  //   console.log(reviews);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="my-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-amber-400">
        Featured Reviews
      </h2>
      <Marquee>
        <div className="flex gap-5">
          {reviews &&
            reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 shadow-lg rounded-lg   bg-gray-800 text-white"
              >
                <h3 className="text-lg font-semibold">{review.gameTitle}</h3>
                <p className="text-sm my-4">{review.reviewDescription}</p>
                <p className="text-yellow-300">Rating: {review.rating} / 10</p>
                <p className="text-sm text-gray-400">- {review.userEmail}</p>
              </div>
            ))}
        </div>
      </Marquee>
    </div>
  );
};

export default FeaturedReviews;
