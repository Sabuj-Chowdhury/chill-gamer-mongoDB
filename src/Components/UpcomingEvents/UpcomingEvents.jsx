import { FaCalendarAlt } from "react-icons/fa";

// Sample event data
const events = [
  {
    id: 1,
    title: "Game Night Tournament",
    date: "2024-12-15",
    description: "Compete in the Game Night Tournament to win prizes!",
  },
  {
    id: 2,
    title: "Community Stream Meetup",
    date: "2024-12-20",
    description: "Join other streamers for a fun live-stream session.",
  },
  {
    id: 3,
    title: "Developer AMA Session",
    date: "2024-12-25",
    description: "Meet the developers behind the most popular games.",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="py-8  text-amber-400">
      <h2 className="text-center text-4xl text-amber-400 font-bold mb-4">
        Upcoming Events
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="mb-4 p-4 bg-gray-700 border border-gray-600 rounded-lg shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="text-blue-400 mr-3" />
              <div className="text-lg font-semibold">{event.title}</div>
            </div>
            <div className="text-sm text-gray-400 mb-2">Date: {event.date}</div>
            <p className="text-gray-300">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
