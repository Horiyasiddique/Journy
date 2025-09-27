import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import ThemeToggleButton from "../ThemeToggleButton";
import { Link, NavLink } from "react-router";
import Navigator from "../Navigator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useContext } from "react";
import themeContext from "@/context/themeContext";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destination", path: "/destinations" },
    { name: "Plan a Trip", path: "/planner" },
    { name: "Community", path: "/community" },
  ];

  const { user } = useAuth();

  const { currentTheme } = useContext(themeContext);
  return (
    <header className="max-w-screen py-6 px-6 md:px-14 fixed top-0 left-0 right-0 backdrop-blur-lg border-b border-slate-700/40 z-50">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-light tracking-widest mb-1">
            JOURNY
          </h1>
          <div className="w-14 md:w-16 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"></div>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex ml-12 lg:ml-24 items-center gap-8 lg:gap-12 rounded-full px-6 lg:px-8 py-3 shadow-sm border border-slate-200/40">
          {navItems.map((elem, index) => (
            <NavLink
              key={index}
              to={elem.path}
              className={({ isActive }) =>
                `relative group transition-colors duration-300 ${
                  isActive ? "border-b-[2px] border-amber-500" : "border-0"
                }`
              }
            >
              {elem.name}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          ))}
        </nav>

        {/* Social Media  */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4 text-xl">
            <FaSquareInstagram className="text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
            <IoLogoFacebook className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
            <FaTwitterSquare className="text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
          </div>
          {/* theme toggling functionality button */}
          <ThemeToggleButton />

          {user ? (
            <Link to="/profile" className={`${currentTheme.card} w-12 h-12 rounded-full flex items-center justify-center text-amber-500 text-3xl font-bold`}>
              {user.name.charAt(0).toUpperCase()}
            </Link>
          ) : (
            <Navigator text={"Sign Up / Login"} path={"/auth/signup"} />
          )}
        </div>

        {/* Mobile navbar */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <FaBars className="text-2xl cursor-pointer" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className={`w-64 px-8 py-4 ${currentTheme.background} ${currentTheme.text}`}
            >
              <div className="mt-6 flex flex-col gap-6">
                {navItems.map((elem, index) => (
                  <Link
                    key={index}
                    to={elem.path}
                    className="relative group transition-colors duration-300"
                  >
                    {elem.name}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}

                <div className="flex gap-4 text-xl pt-4 border-t">
                  <FaSquareInstagram className="cursor-pointer hover:text-rose-500" />
                  <IoLogoFacebook className="cursor-pointer hover:text-blue-600" />
                  <FaTwitterSquare className="cursor-pointer hover:text-sky-500" />
                </div>

                <ThemeToggleButton />
                <Navigator text={"Sign Up / Login"} path={"/auth/signup"} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="absolute bottom-2 left-6 md:left-14">
        <p className="text-sm italic tracking-widest font-light">
          The shortest path to new experiences
        </p>
      </div>
    </header>
  );
};

export default Header;
