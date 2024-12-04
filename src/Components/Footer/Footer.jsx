import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-5">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-5 md:mb-0">
            <h1 className="text-2xl font-bold mb-2">Chill Gamer</h1>
            <p className="text-gray-400">
              Explore and share your favorite games. A place where gaming
              enthusiasts unite!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <h2 className="font-semibold text-lg">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-emerald-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-3 md:items-end">
            <h2 className="font-semibold text-lg">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#facebook" className="text-2xl hover:text-emerald-400">
                <AiFillFacebook />
              </a>
              <a href="#twitter" className="text-2xl hover:text-emerald-400">
                <AiFillTwitterSquare />
              </a>
              <a href="#instagram" className="text-2xl hover:text-emerald-400">
                <AiFillInstagram />
              </a>
            </div>
          </div>
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
