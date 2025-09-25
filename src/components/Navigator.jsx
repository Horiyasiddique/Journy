import { Link } from "react-router";

const Navigator = ({ text, path, className }) => {
 
  return (
    <Link
      to={path}
      className={`${className} px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-amber-300 to-rose-300 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
    >
      {text}
    </Link>
  );
};

export default Navigator;
