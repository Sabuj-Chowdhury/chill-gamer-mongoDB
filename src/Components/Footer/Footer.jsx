import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { DiGithubAlt } from "react-icons/di";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-5">
        {/* Logo and Description */}
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Chill Gamer</h1>
          <p className="text-gray-400 text-lg">
            Explore and share your favorite games. A place where gaming
            enthusiasts unite!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-amber-400">
          <a
            href="https://www.facebook.com/sc2706r/"
            className="text-3xl  hover:text-emerald-400"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://github.com/Sabuj-Chowdhury"
            className="text-3xl hover:text-emerald-400"
          >
            <DiGithubAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/sabuj-chowdhury-8524a1b4/"
            className="text-3xl hover:text-emerald-400"
          >
            <AiFillLinkedin />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Chill Gamer. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
