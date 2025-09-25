import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import ThemeToggleButton from "../ThemeToggleButton";
import { Link } from "react-router";
import Navigator from "../Navigator";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destination", path: "/destinations" },
    { name: "Plan a Trip", path: "/planner" },
    { name: "Community", path: "/community" },
  ];
  return (
    <header className="w-full py-8 px-14 fixed top-0 left-0 right-0  backdrop-blur-xl border-b border-slate-700/40 z-50">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl font-light tracking-widest mb-1">JOURNY</h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"></div>
        </div>

        <nav className="ml-24 flex items-center gap-12 rounded-full px-8 py-4 shadow-sm border border-slate-200/40">
          {navItems.map((elem, index) => {
            return (
              <Link
                key={index}
                to={elem.path}
                className="relative group transition-colors duration-300"
              >
                {elem.name}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-xl">
            <FaSquareInstagram className="text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
            <IoLogoFacebook className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
            <FaTwitterSquare className="text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
          </div>

          <ThemeToggleButton />

          <Navigator text={"Sign Up"} path={"/auth/signup"} />
        </div>
      </div>

      <div className="absolute bottom-3">
        <p className="text-sm italic tracking-widest font-light">
          The shortest path to new experiences
        </p>
      </div>
    </header>
  );
};

export default Header;
