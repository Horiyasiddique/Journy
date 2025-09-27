import themeContext from "@/context/themeContext";
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";

const RightSide = () => {
    const {currentTheme} = useContext(themeContext)
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
      name: "Greek Vide in Summer",
      destination: "Greece",
    },
  ];
  return (
    <div className={`${currentTheme.card} w-3/4`}>
      {/* my favorites part */}
      <div>
        <h1>
          My Favorites <FaHeart />
        </h1>
        {/* favorites card container */}
        <div>
          {favorites.map((elem, index) => {
            return (
              //  favorite card
              <div key={index}>
                <img src={elem.image} alt={elem.name} />
                <h2>{elem.name}</h2>
              </div>
            );
          })}
        </div>
      </div>

      {/* user own plan part */}
      <div>
        <h1>
          My Plans <FaPlaneDeparture />
        </h1>
        {/* user plans card container */}
        <div>
          <div>
            {userPlans.map((elem, index) => {
              return (
                <div key={index}>
                  <img src={elem.image} alt={elem.name} />
                  <h2>{elem.name}</h2>
                  <h4>{elem.destination}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
