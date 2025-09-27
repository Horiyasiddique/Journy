import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Input from "@/components/Input";
import DestinationCard from "@/components/DestinationCard";

const Destinations = () => {
  const destinations = [
    {
      image:
        "https://i.pinimg.com/736x/18/ae/4b/18ae4bd7f47957ebdd5cc03eb0fc22bf.jpg",
      name: "Maldives",
      description: "Tropical paradise with crystal-clear waters",
      category: "beach",
    },
    {
      image:
        "https://i.pinimg.com/736x/38/33/5b/38335b8d98ebdb517dca32afe4663a3e.jpg",
      name: "Dubai",
      description: "City of luxury, shopping and skyscrapers",
      category: "food",
    },
    {
      image:
        "https://i.pinimg.com/1200x/e0/31/a9/e031a96ec6e6ab68a940e24c14ca96e3.jpg",
      name: "Bali",
      description: "Beautiful beaches and cultural temples",
      category: "beach",
    },
    {
      image:
        "https://i.pinimg.com/1200x/d9/5c/e6/d95ce6e5807d616d7cb7691316cb616e.jpg",
      name: "Switzerland",
      description: "Snowy mountains and scenic lakes",
      category: "mountain",
    },
    {
      image:
        "https://i.pinimg.com/736x/b8/2e/33/b82e332473712b0f1b56b5b331970d5b.jpg",
      name: "Paris",
      description: "The city of love and iconic Eiffel Tower",
      category: "food",
    },
    {
      image:
        "https://i.pinimg.com/1200x/a9/d1/7c/a9d17c025d5a391d550ea3b66af6c4af.jpg",
      name: "Sawat",
      description: "Peaceful valleys and rivers",
      category: "mountain",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // filtering logic
  const filteredDestinations = destinations.filter((d) => {
    const matchCategory =
      selectedCategory === "all" || d.category === selectedCategory;
    const matchSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const categories = ["all", "beach", "mountain", "food"];

  return (
    <div className="mt-32">
      {/* hero section */}
      <HeroSection
        heading={"Explore Destinations"}
        image={
          "https://i.pinimg.com/736x/e5/9f/8e/e59f8ef8afcb614bde688709511a6234.jpg"
        }
      />

      {/* search + filter section */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        {/* search bar */}
        <Input
          type="text"
          placeholder={"Search destinations by name"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* category filter buttons */}
        <div className="flex flex-wrap gap-4">
          {categories.map((elem) => (
            <button
              key={elem}
              onClick={() => setSelectedCategory(elem)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === elem
                  ? "shadow-md scale-105 bg-gradient-to-r from-amber-300 to-rose-300 text-white"
                  : "hover:shadow"
              }`}
            >
              {elem.charAt(0).toUpperCase() + elem.slice(1)}
            </button>
          ))}
        </div>

        {/* destination cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((d, index) => (
            <DestinationCard
              key={index}
              image={d.image}
              destination={d.name}
              category={d.category}
            ></DestinationCard>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <p className="text-center text-sm italic mt-6">
            No destinations match your search or filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Destinations;
