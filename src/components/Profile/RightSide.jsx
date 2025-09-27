import themeContext from "@/context/themeContext";
import React, { useContext } from "react";
import { FaHeart, FaPlaneDeparture } from "react-icons/fa";

const RightSide = () => {
  const { currentTheme } = useContext(themeContext);

  const favorites = [
    {
      image:
        "https://i.pinimg.com/1200x/a1/31/78/a131781cd8465dbdb941ad0b94219945.jpg",
      name: "Banff National Park",
    },
    {
      image:
        "https://i.pinimg.com/736x/55/a7/5b/55a75b609a7dee711010b683b34cebad.jpg",
      name: "Kyoto",
    },
  ];

  const userPlans = [
    {
      image:
        "https://i.pinimg.com/736x/97/16/e0/9716e0d621847ed645641891eeba67aa.jpg",
      name: "Enjoy cuisines on seaside",
      destination: "Maldives",
    },
    {
      image:
        "https://i.pinimg.com/736x/5e/cb/11/5ecb1153d05344b5745bea7753acef8e.jpg",
      name: "Greek Vibe in Summer",
      destination: "Greece",
    },
  ];

  return (
    <div className={`${currentTheme.card} w-full lg:w-3/4 p-6 space-y-8 rounded-2xl`}>
      {/* My Favorites */}
      <div>
        <h1 className="flex items-center gap-2 text-lg font-semibold mb-4">
          My Favorites <FaHeart className="text-red-500" />
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((elem, index) => (
            <div key={index} className="rounded-lg overflow-hidden border">
              <img
                src={elem.image}
                alt={elem.name}
                className="w-full h-32 object-cover"
              />
              <h2 className="p-2 text-sm font-medium">{elem.name}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* My Plans */}
      <div>
        <h1 className="flex items-center gap-2 text-lg font-semibold mb-4">
          My Plans <FaPlaneDeparture className="text-blue-500" />
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userPlans.map((elem, index) => (
            <div key={index} className="rounded-lg overflow-hidden border">
              <img
                src={elem.image}
                alt={elem.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <h2 className="text-sm font-medium">{elem.name}</h2>
                <h4 className="text-xs opacity-70">{elem.destination}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
