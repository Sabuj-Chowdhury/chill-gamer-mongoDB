import { useContext, useEffect, useState } from "react";
import { authContext } from "../Provider/AuthProvider";

const GameWatchList = () => {
  const { user, loading } = useContext(authContext);
  const [watchlist, setWatchlist] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      const fetchWatchlist = async () => {
        try {
          const url = `http://localhost:5000/my-watchlist/${user.email}`;

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
          }

          const data = await response.json();

          setWatchlist(data);
        } catch (error) {
          setError("Failed to fetch watchlist.");
        }
      };

      fetchWatchlist();
    }
  }, [user]);

  if (loading)
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  if (!user) return <div>Please log in to view your watchlist.</div>;

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold mb-5">My Watchlist</h1>
      {error && <p className="text-red-500">{error}</p>}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Game Title</th>
            <th className="border border-gray-200 px-4 py-2">Genre</th>
            <th className="border border-gray-200 px-4 py-2">Rating</th>
            <th className="border border-gray-200 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((item, index) => (
            <tr key={item._id} className="text-center">
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{item.gameTitle}</td>
              <td className="border border-gray-300 p-2">{item.rating}</td>{" "}
              {/* This will dynamically show ratings */}
              <td className="border border-gray-300 p-2">
                {item.dateAdded
                  ? new Date(item.dateAdded).toISOString().split("T")[0]
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {watchlist.length === 0 && (
        <p className="text-gray-500 text-center mt-5">
          No games in your watchlist.
        </p>
      )}
    </div>
  );
};

export default GameWatchList;
