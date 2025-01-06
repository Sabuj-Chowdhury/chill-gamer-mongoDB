import { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useContext(authContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});

  useEffect(() => {
    const fetchUserReviews = async () => {
      if (user?.email) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_url}/my-reviews/${user.email}`
          );
          const data = await response.json();
          setReviews(data);
        } catch (error) {
          toast.error(error);
        }
      }
      setLoading(false);
    };

    fetchUserReviews();
  }, [user?.email]);

  const handleDelete = async (id) => {
    const { value: confirmDelete } = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    });

    if (confirmDelete) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_url}/reviews/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          toast.success("Review deleted successfully");
          setReviews(reviews.filter((review) => review._id !== id));
        } else {
          toast.error("Failed to delete review");
        }
      } catch (error) {
        toast.error("Something went wrong.");
      }
    }
  };

  const handleOpenModal = (review) => {
    setIsModalOpen(true);
    setSelectedReview(review);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReview({});
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_url}/reviews/${selectedReview._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reviewDescription: selectedReview.reviewDescription,
            rating: parseInt(selectedReview.rating),
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Review updated successfully");
        setReviews(
          reviews.map((rev) => (rev._id === result._id ? result : rev))
        );
        handleCloseModal();
      } else {
        toast.error("Failed to update review");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  if (loading)
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">My Reviews</h1>
      {user ? (
        <>
          <table className="table-auto w-full bg-white shadow-md rounded-md">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2">Game Title</th>
                <th className="px-4 py-2">Review Description</th>
                <th className="px-4 py-2">Genre</th>
                <th className="px-4 py-2">Rating</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <tr key={review._id} className="text-center">
                    <td className="border px-4 py-2">{review.gameTitle}</td>
                    <td className="border px-4 py-2 text-sm text-gray-700">
                      {review.reviewDescription}
                    </td>
                    <td className="border px-4 py-2">{review.genre}</td>
                    <td className="border px-4 py-2">{review.rating}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleOpenModal(review)}
                        className="px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="ml-2 px-2 py-1 bg-red-500 text-white hover:bg-red-600 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-gray-500 px-4 py-2 text-center"
                  >
                    No reviews found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Modal for Editing Review */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-bold mb-2">Update Your Review</h2>
                <label className="block mb-2">Review Description:</label>
                <input
                  type="text"
                  className="border px-3 py-2 w-full mb-4"
                  value={selectedReview.reviewDescription}
                  onChange={(e) =>
                    setSelectedReview({
                      ...selectedReview,
                      reviewDescription: e.target.value,
                    })
                  }
                />
                <label className="block mb-2">Rating:</label>
                <input
                  type="number"
                  className="border px-3 py-2 w-full mb-4"
                  value={selectedReview.rating}
                  onChange={(e) =>
                    setSelectedReview({
                      ...selectedReview,
                      rating: e.target.value,
                    })
                  }
                />
                <div className="flex justify-between">
                  <button
                    onClick={handleCloseModal}
                    className="px-3 py-1 bg-gray-500 text-white hover:bg-gray-600 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-red-500">Please log in to view your reviews.</div>
      )}
    </div>
  );
};

export default MyReviews;
