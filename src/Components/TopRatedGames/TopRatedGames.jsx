import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TopRatedGames = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_url}/top-rated-games`
        );
        const data = await response.json();

        if (data && Array.isArray(data) && data.length) {
          setGames(data);
        }
      } catch (error) {
        toast.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="min-h-screen p-6 py-6 text-gray-100">
      <h1 className="text-4xl font-bold text-center text-amber-400 mb-8">
        Top Rated Games
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game._id}
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
            style={{ height: "350px", width: "100%" }}
          >
            <img
              src={game.gameCoverURL}
              alt={game.gameTitle}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-bold text-gray-100 mt-4 truncate">
              {game.gameTitle}
            </h2>
            <p className="text-gray-400 mt-2 truncate">Genre: {game.genre}</p>
            <p className="text-gray-400">Rating: {game.rating}/10</p>
            <button
              className="mt-4 py-2 px-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition-colors"
              onClick={() => navigate(`/details/${game._id}`)}
            >
              Explore Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedGames;
