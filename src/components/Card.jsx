import { useContext } from "react";
import { Link } from "react-router";
import themeContext from "../context/themeContext";

const Card = ({ imageUrl, category, experiences, ctaLink }) => {
  const { currentTheme } = useContext(themeContext);
  return (
    <div
      className={`${currentTheme.card} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={category}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <h3 className="absolute bottom-4 left-4 text-2xl text-white font-bold z-10">
          {category}
        </h3>
      </div>

      <div className=" p-6">
        <ul className="space-y-3 mb-6">
          {experiences.map((experience, index) => (
            <li key={index} className="flex items-center ">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
              {experience}
            </li>
          ))}
        </ul>

        <Link
          to={ctaLink}
          className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Discover More
        </Link>
      </div>
    </div>
  );
};

export default Card;
