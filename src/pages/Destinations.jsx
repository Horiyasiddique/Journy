import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";


const destinationsData = [
  {
    id: 1,
    name: "Bali, Indonesia",
    category: "Beach",
    budget: "$800",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: 2,
    name: "Swiss Alps",
    category: "Mountain",
    budget: "$1200",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=80",
  },
  {
    id: 3,
    name: "Paris, France",
    category: "City",
    budget: "$1000",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  },
];

const Destinations = () => {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinationsData.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto space-y-8">
      {/* Heading */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Explore Destinations</h1>
        <p className="text-sm opacity-70">
          Find your next adventure by budget, category or name
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-4 max-w-lg mx-auto">
        <Input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button text="Search" />
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDestinations.map((dest) => (
          <div
            key={dest.id}
            className="rounded-2xl overflow-hidden shadow-lg group relative hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{dest.name}</h2>
              <p className="text-sm opacity-70">{dest.category}</p>
              <p className="font-medium">{dest.budget}</p>
              <Button text="Explore" className="mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
