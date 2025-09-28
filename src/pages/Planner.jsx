import Form from "@/components/planner/Form";
import HeroSection from "@/components/HeroSection";
import React from "react";

const Planner = () => {
  const images = [
    {
      src: "https://i.pinimg.com/736x/0b/d7/d8/0bd7d80e5b2b31d45b49d3f614861531.jpg",
      alt: "Beach view",
      className: "rounded-xl object-cover w-full h-48 md:h-60 lg:col-span-2",
    },
    {
      src: "https://i.pinimg.com/1200x/4d/e0/11/4de011316192df27ed6f2c4a3183393c.jpg",
      alt: "Mountain escape",
      className: "rounded-xl object-cover w-full h-56",
    },
    {
      src: "https://i.pinimg.com/736x/7b/e5/97/7be597dbc4bb75e58a48f2538f2536f7.jpg",
      alt: "City lights",
      className: "rounded-xl object-cover w-full h-72 row-span-2 ",
    },
    {
      src: "https://i.pinimg.com/736x/f4/ab/ba/f4abba1cffff3065096bb79d35002dfd.jpg",
      alt: "Nature retreat",
      className: "rounded-xl object-cover w-full h-52",
    },
  ];

  return (
    <div className="mt-36 flex flex-col justify-center items-center">
      {/* Hero Section */}
      <HeroSection
        image="https://i.pinimg.com/736x/08/7a/25/087a251393203951b94d3563d7e2c1b8.jpg"
        heading="Plan Your Perfect Trip"
      />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 items-start">
        {/* Text + Images */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Your Next Adventure Awaits
          </h1>
          <p className="text-lg md:text-xl font-light">
            Customize every detail of your getaway – from destinations to dates,
            so your trip feels truly yours.
          </p>

          {/* Images part */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={`${img.className} hover:scale-105 transition-all duration-300 ease-linear`}
              />
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 w-full">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Planner;
