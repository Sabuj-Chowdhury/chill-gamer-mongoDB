import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import toast from "react-hot-toast";
import { authContext } from "../../Provider/AuthProvider";

const GameDetails = () => {
  const { id } = useParams();
  const [reviewDetails, setReviewDetails] = useState(null);
  const [error, setError] = useState("");

  const { user } = useContext(authContext);

  useEffect(() => {
    const fetchReviewDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/reviews/${id}`);
        const data = await response.json();

        if (response.ok) {
          setReviewDetails(data);
        } else {
          setError(data.error || "Error fetching data.");
        }
      } catch (error) {
        console.error("Error fetching review details:", error);
        setError("Failed to fetch review details.");
      }
    };

    fetchReviewDetails();
  }, [id]);

  const handleAddToWatchList = async () => {
    if (!user) {
      toast.error("Please login to add to your watchlist.");
      return;
    }

    const payload = {
      reviewId: reviewDetails._id,
      gameTitle: reviewDetails.gameTitle,
      userEmail: user.email,
      userName: user.name,
    };

    try {
      const response = await fetch("http://localhost:5000/watchlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Added to watchlist!");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error("Error adding to watchlist:", error);
      toast.error("Failed to add to watchlist.");
    }
  };

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  if (!reviewDetails) {
    return (
      <div className="text-gray-600 text-center mt-6 font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 md:p-12">
      {/* Main Game Info Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex md:space-x-6 p-4">
        {/* Game Cover Image */}
        <div className="w-full md:w-1/3">
          <img
            src={reviewDetails.gameCoverURL}
            alt={reviewDetails.gameTitle}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Game Info Details */}
        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            {reviewDetails.gameTitle}
          </h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            {reviewDetails.reviewDescription}
          </p>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-semibold">Genre:</span>{" "}
              {reviewDetails.genre}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Rating:</span>{" "}
              {reviewDetails.rating}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Year:</span>{" "}
              {reviewDetails.publishingYear}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Reviewer:</span>{" "}
              {reviewDetails.userName}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Email:</span>{" "}
              {reviewDetails.userEmail}
            </p>
          </div>
          {/* Button to add to watchlist */}
          <div className="mt-6">
            <button
              onClick={handleAddToWatchList}
              className={`px-6 py-3 w-full md:w-auto bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105 ${
                user ? "hover:bg-blue-600" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!user}
            >
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
