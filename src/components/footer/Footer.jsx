import themeContext from "@/context/themeContext";
import React, { useContext } from "react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Navigator from "../Navigator";

const Footer = () => {
  const { currentTheme } = useContext(themeContext);

  return (
    <footer
      className={`${currentTheme.background} ${currentTheme.text} pt-12 pb-6`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* logO */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-4">
              <h1 className="text-3xl md:text-4xl font-light tracking-widest mb-1">
                JOURNY
              </h1>
              <div className="w-14 md:w-16 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full mb-4"></div>
            </div>
            <p className="mb-4 leading-relaxed">
              Discover the world with Journy - your trusted partner for
              unforgettable travel experiences and curated adventures.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram].map((Icon, index) => (
                <Link
                  key={index}
                  to="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
                >
                  <Icon className="text-lg" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Destination", path: "/destinations" },
                { name: "Plan a Trip", path: "/planner" },
                { name: "Community", path: "/community" },
              ].map((elem, index) => (
                <li key={index}>
                  <Link
                    to={elem.path}
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    {elem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              {[
                "Bali, Indonesia",
                "Paris",
                "Maldives",
                "Switzerland",
                "Sawat, Pakistan",
              ].map((destination) => (
                <li key={destination}>
                  <Link
                    to="#"
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-amber-400" />
                <span>+92-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-400" />
                <span>hello@journy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-amber-400" />
                <span>123 Travel St, Adventure City</span>
              </div>
            </div>

            {/* Newsletter Subscription (aise hii add kia hy ye UI k liye!)*/}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 ">Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="placeholder:text-slate-500 px-3 py-2 border border-slate-500 rounded-lg  focus:outline-none focus:border-amber-400 flex-1"
                />
                <Navigator text={"Subscribe"}/>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-500 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © 2024 Journy. All rights reserved.
            </p>

            <p className="text-sm">Crafted with ❤️ and ☕ by Hooriya, Fara & Basel</p>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <Link
                    key={link}
                    to="#"
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
