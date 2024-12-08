import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TopRatedGames = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:5000/top-rated-games");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched games:", data); // Debugging output
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-6 py-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Top Rated Games
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game._id}
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4"
          >
            <img
              src={game.gameCoverURL}
              alt={game.gameTitle}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-bold text-gray-100 mt-4">
              {game.gameTitle}
            </h2>
            <p className="text-gray-400 mt-2">Genre: {game.genre}</p>
            <p className="text-gray-400">Rating: {game.rating}/10</p>
            <button
              className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
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
