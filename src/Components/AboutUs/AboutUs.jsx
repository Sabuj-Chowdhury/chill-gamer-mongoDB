import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-yellow-400">
            About Chill Gamer
          </h1>
          <p className="text-lg  mt-4">
            Your ultimate destination for sharing and exploring honest game
            reviews.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-yellow-300">Who We Are</h2>
            <p>
              At <span className="text-yellow-400 font-bold">Chill Gamer</span>,
              we are passionate gamers dedicated to creating a community where
              players can share their authentic experiences with games. Whether
              you're looking for recommendations, detailed reviews, or just a
              place to connect with fellow enthusiasts, Chill Gamer is the
              perfect spot.
            </p>

            <h2 className="text-2xl font-bold text-yellow-300">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-2 ">
              <li>
                A platform to discover honest reviews about the latest and
                classic games.
              </li>
              <li>
                The ability to share your own thoughts and experiences with the
                gaming community.
              </li>
              <li>
                Smart filters to sort and explore games by genre, rating, and
                popularity.
              </li>
              <li>A friendly and inclusive space for gamers of all kinds.</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1682124520375-043c5a16acd9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Chill Gamer Community"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-yellow-300 mb-6">
            Our Mission
          </h2>
          <p className="text-center ">
            At Chill Gamer, we aim to empower the gaming community by providing
            a space where voices are heard, opinions are valued, and gamers can
            make informed choices. We believe in the power of shared experiences
            to inspire and enhance the joy of gaming.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link to={"/all-reviews"}>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Join Our Community
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
