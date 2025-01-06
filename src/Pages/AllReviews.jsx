import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";
import toast from "react-hot-toast";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("rating-asc");
  const [filterGenre, setFilterGenre] = useState("All");

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_url}/all-reviews`);
        const data = await response.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching reviews:", error);
      }
    };

    fetchAllReviews();
  }, []);

  const genres = Array.from(
    new Set(reviews.map((review) => review.genre))
  ).filter((genre) => genre);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortOption) {
      case "rating-asc":
        return a.rating - b.rating;
      case "rating-desc":
        return b.rating - a.rating;
      case "year-asc":
        return a.year - b.year;
      case "year-desc":
        return b.year - a.year;
      default:
        return 0;
    }
  });

  const handleFilterChange = (e) => {
    setFilterGenre(e.target.value);
  };

  const filteredReviews = sortedReviews.filter((review) => {
    if (filterGenre === "All") return true;
    return review.genre === filterGenre;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mb-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-amber-500 mb-6">
        All Reviews
      </h1>

      {/* Controls: Sort & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <button
            data-tip="Sort Options"
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded"
          >
            Sort
          </button>
          <Tooltip place="bottom" type="light" effect="solid" />
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="bg-white text-gray-700 px-3 py-1 rounded border border-gray-300"
          >
            <option value="rating-asc">Rating: Low to High</option>
            <option value="rating-desc">Rating: High to Low</option>
            <option value="year-asc">Year: Old to New</option>
            <option value="year-desc">Year: New to Old</option>
          </select>
        </div>

        {/* Filter Dropdown */}
        <div className="flex items-center gap-2">
          <button
            data-tip="Filter Options"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Filter
          </button>
          <Tooltip place="bottom" type="light" effect="solid" />
          <select
            value={filterGenre}
            onChange={handleFilterChange}
            className="bg-white text-gray-700 px-3 py-1 rounded border border-gray-300"
          >
            <option value="All">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <Fade key={review._id} duration={500}>
            <div
              className="bg-white border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
              style={{ height: "350px", width: "100%" }}
            >
              <img
                src={review.gameCoverURL}
                alt={review.gameTitle}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {review.gameTitle}
              </h2>
              <p className="text-sm text-gray-600 mt-1 truncate">
                {review.reviewDescription}
              </p>
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700">
                  Genre: {review.genre}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Rating: {review.rating}
                </p>
              </div>
              <Link to={`/details/${review._id}`}>
                <button className="mt-4 py-2 px-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition-colors">
                  Explore Details
                </button>
              </Link>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
