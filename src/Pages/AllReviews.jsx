import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/all-reviews");
        const data = await response.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchAllReviews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={review.gameCoverURL}
              alt={review.gameTitle}
              className="w-full h-48 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{review.gameTitle}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {review.reviewDescription}
            </p>
            <div className="mt-2">
              <p className="text-sm font-medium">Genre: {review.genre}</p>
              <p className="text-sm font-medium">Rating: {review.rating}</p>
            </div>
            <Link
              to={`/details/${review._id}`}
              className="mt-2 block bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600"
            >
              Explore Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
