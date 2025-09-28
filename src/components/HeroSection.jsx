import React from "react";

const HeroSection = ({ image, heading }) => {
  return (
    <section
      className="relative w-[90vw] h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center bg-center bg-cover rounded-2xl"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="rounded-2xl absolute inset-0 bg-black/40"></div>

      <h1 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 leading-snug drop-shadow-lg">
        {heading}
      </h1>
    </section>
  );
};

export default HeroSection;
