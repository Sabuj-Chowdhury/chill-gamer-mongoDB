import { useContext } from "react";
import Swal from "sweetalert2";
import { authContext } from "../Provider/AuthProvider";

// Spinner component for loading
const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

const AddReview = () => {
  const { user, loading } = useContext(authContext);
  const genres = ["Action", "RPG", "Adventure", "Strategy", "Sports"];

  if (loading) {
    return <Spinner />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gameCoverURL = e.target.gameCoverURL.value;
    const gameTitle = e.target.gameTitle.value;
    const reviewDescription = e.target.reviewDescription.value;
    const rating = parseInt(e.target.rating.value, 10);
    const publishingYear = e.target.publishingYear.value;
    const genre = e.target.genre.value;

    if (rating < 1 || rating > 10) {
      Swal.fire({
        icon: "error",
        title: "Invalid Rating",
        text: "Rating must be between 1 and 10.",
      });
      return;
    }

    const reviewData = {
      gameCoverURL,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genre,
      userEmail: user?.email || "Not signed in",
      userName: user?.displayName || "Guest",
    };

    console.log("Review Submitted:", reviewData);

    Swal.fire({
      icon: "success",
      title: "Review Submitted Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-black flex items-center justify-center transition duration-300 ease-in-out">
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8 w-full max-w-lg transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-100 shadow-md">
          🎮 Submit Your Game Review
        </h2>

        <form onSubmit={handleSubmit}>
          {/* User Email */}
          <div className="mb-4">
            <input
              type="email"
              name="userEmail"
              value={user?.email || "Not signed in"}
              readOnly
              className="w-full px-4 py-2 bg-gray-700 text-gray-400 rounded-lg focus:outline-none shadow focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* User Name */}
          <div className="mb-4">
            <input
              type="text"
              name="userName"
              value={user?.displayName || "No name"}
              readOnly
              className="w-full px-4 py-2 bg-gray-700 text-gray-400 rounded-lg focus:outline-none shadow focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Game Cover URL */}
          <div className="mb-4">
            <input
              type="url"
              name="gameCoverURL"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
              placeholder="Enter Game Cover URL"
              required
            />
          </div>

          {/* Game Title */}
          <div className="mb-4">
            <input
              type="text"
              name="gameTitle"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
              placeholder="Enter Game Title"
              required
            />
          </div>

          {/* Review Description */}
          <div className="mb-4">
            <textarea
              name="reviewDescription"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
              placeholder="Write your review"
              required
            />
          </div>

          {/* Rating */}
          <div className="mb-4">
            <input
              type="number"
              name="rating"
              min="1"
              max="10"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
              placeholder="Rate the game (1-10)"
              required
            />
          </div>

          {/* Publishing Year */}
          <div className="mb-4">
            <input
              type="number"
              name="publishingYear"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
              placeholder="Enter the publishing year"
              required
            />
          </div>

          {/* Genre Dropdown */}
          <div className="mb-4">
            <select
              name="genre"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
              required
            >
              <option value="">Select Genre</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Review 🏆
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
