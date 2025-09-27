import Navigator from "../Navigator";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[url(https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg)] bg-cover bg-center bg-no-repeat rounded-none md:rounded-2xl">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-6 leading-snug md:leading-tight">
            Plan your next trip with ease ✈️
          </h1>

          <p className="text-base sm:text-lg text-white/80 text-center mb-8 font-light">
            Discover amazing destinations and create unforgettable memories
          </p>

          <div className="relative group mb-8">
            <div className="flex items-center bg-white/10 border border-white/30 rounded-full pl-4 sm:pl-6 pr-4 py-3 sm:py-4 transition-all duration-300 group-hover:border-amber-300/70 group-focus-within:border-amber-300 group-focus-within:bg-white/20">
              <FaSearch className="text-white/70 mr-2 sm:mr-3 text-base sm:text-lg transition-colors duration-300 group-focus-within:text-amber-300" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="bg-transparent border-none outline-none w-full placeholder-white/60 text-white text-base sm:text-lg font-light"
              />
            </div>
          </div>

          <div className="text-center">
            <Navigator path={"/destinations"} text={"Explore Destinations"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
