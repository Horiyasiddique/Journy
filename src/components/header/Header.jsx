import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import ThemeToggleButton from "../ThemeToggleButton";
import { Link } from "react-router";
import Navigator from "../Navigator";


const Header = () => {
  return (
    <header className="w-full py-8 px-14 fixed top-0 left-0 right-0  backdrop-blur-xl border-b border-slate-700/40 z-50">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl font-light tracking-widest mb-1">JOURNY</h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"></div>
        </div>

        <nav className="ml-24 flex items-center gap-12 rounded-full px-8 py-4 shadow-sm border border-slate-200/40">
          <Link
            to="/"
            className="relative group transition-colors duration-300"
          >
            Home
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            to="/about"
            className="relative group transition-colors duration-300"
          >
            About
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            to="/destination"
            className="relative group transition-colors duration-300"
          >
            Destination
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            to="/planner"
            className="relative group transition-colors duration-300"
          >
            Plan a trip
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            to="/community"
            className="relative group transition-colors duration-300"
          >
            Community
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-xl">
            <FaSquareInstagram className="text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
            <IoLogoFacebook className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
            <FaTwitterSquare className="text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
          </div>

          <ThemeToggleButton />

          <Navigator text={"Sign Up"} path={"/signup"} />
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

// import { FaSquareInstagram } from "react-icons/fa6";
// import { IoLogoFacebook } from "react-icons/io";
// import { FaTwitterSquare, FaBars, FaTimes } from "react-icons/fa";
// import ThemeToggleButton from "../ThemeToggleButton";
// import { Link } from "react-router";
// import Navigator from "../Navigator";
// import { useState } from "react";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <>
//       <header className="w-full py-4 px-6 md:py-6 md:px-10 lg:py-8 lg:px-14 fixed top-0 left-0 right-0 backdrop-blur-xl border-b border-slate-700/40 z-50">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex flex-col z-60">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-widest mb-1">
//               JOURNY
//             </h1>
//             <div className="w-12 lg:w-16 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"></div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden xl:flex items-center gap-8 2xl:gap-12 rounded-full px-6 lg:px-8 py-3 lg:py-4 shadow-sm border border-slate-200/40 ml-4 lg:ml-24">
//             <Link
//               to="/"
//               className="relative group transition-colors duration-300 text-sm lg:text-base"
//             >
//               Home
//               <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//             </Link>

//             <Link
//               to="/about"
//               className="relative group transition-colors duration-300 text-sm lg:text-base"
//             >
//               About
//               <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//             </Link>

//             <Link
//               to="/destination"
//               className="relative group transition-colors duration-300 text-sm lg:text-base"
//             >
//               Destination
//               <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//             </Link>

//             <Link
//               to="/planner"
//               className="relative group transition-colors duration-300 text-sm lg:text-base"
//             >
//               Plan a trip
//               <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//             </Link>

//             <Link
//               to="/community"
//               className="relative group transition-colors duration-300 text-sm lg:text-base"
//             >
//               Community
//               <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </nav>

//           {/* Desktop Right Section */}
//           <div className="hidden lg:flex items-center gap-4 xl:gap-6">
//             {/* Social Icons - Hidden on mobile, visible on lg+ */}
//             <div className="hidden xl:flex gap-4 text-xl">
//               <FaSquareInstagram className="text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
//               <IoLogoFacebook className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
//               <FaTwitterSquare className="text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-0.5" />
//             </div>

//             <ThemeToggleButton />

//             <Navigator
//               text={"Sign Up"}
//               path={"/signup"}
//               className="px-4 py-2 text-sm lg:px-6 lg:py-2 lg:text-base"
//             />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-2xl z-60 p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Tagline - Hidden on mobile */}
//         <div className="absolute bottom-2 left-4 hidden md:block">
//           <p className="text-xs md:text-sm italic tracking-widest font-light">
//             The shortest path to new experiences
//           </p>
//         </div>
//       </header>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`
//         lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300
//         ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
//       `}
//         onClick={() => setIsMobileMenuOpen(false)}
//       ></div>

//       {/* Mobile Menu Sidebar */}
//       <div
//         className={`
//         lg:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-slate-900 shadow-2xl z-50
//         transform transition-transform duration-300 ease-in-out
//         ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
//       `}
//       >
//         <div className="p-6 h-full flex flex-col">
//           {/* Close Button */}
//           <div className="flex justify-end mb-8">
//             <button
//               className="text-2xl p-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaTimes />
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           <nav className="flex-1 space-y-6">
//             <Link
//               to="/"
//               className="block text-lg font-medium py-3 border-b border-slate-200 dark:border-slate-700"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block text-lg font-medium py-3 border-b border-slate-200 dark:border-slate-700"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               to="/destination"
//               className="block text-lg font-medium py-3 border-b border-slate-200 dark:border-slate-700"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Destination
//             </Link>
//             <Link
//               to="/planner"
//               className="block text-lg font-medium py-3 border-b border-slate-200 dark:border-slate-700"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Plan a trip
//             </Link>
//             <Link
//               to="/community"
//               className="block text-lg font-medium py-3 border-b border-slate-200 dark:border-slate-700"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Community
//             </Link>
//           </nav>

//           {/* Mobile Social Icons */}
//           <div className="flex gap-6 text-2xl justify-center py-8 border-t border-slate-200 dark:border-slate-700">
//             <FaSquareInstagram className="text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 transition-colors duration-300 cursor-pointer" />
//             <IoLogoFacebook className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
//             <FaTwitterSquare className="text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300 cursor-pointer" />
//           </div>

//           {/* Mobile Theme Toggle and Sign Up */}
//           <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
//             <ThemeToggleButton />
//             <Navigator
//               text={"Sign Up"}
//               path={"/signup"}
//               className="px-4 py-2 text-sm"
//               onClick={() => setIsMobileMenuOpen(false)}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
