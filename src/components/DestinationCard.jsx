import React, { useContext } from "react";
import Button from "./Button";
import themeContext from "@/context/themeContext";
import Navigator from "./Navigator";

const DestinationCard = ({ id, image, name, category, budget }) => {
  const { currentTheme } = useContext(themeContext);

  const {user}=useAuth()

  async function addToFavorites(){
    const favorites=await databases.createDocument(
      "68d44b0c002eb2b207f9",
      "favorites",
      ID.unique(),
      {
        userId : user.$id,
        destinationId : $id
      }
    )
    if(favorites){
      console.log("Favorites",favorites)
    }
  }

  return (
    <div
      className={`${currentTheme.card} overflow-hidden flex flex-col rounded-2xl border border-slate-500/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 p-5 flex-grow">
        <h3 className="text-xl font-semibold tracking-wide">{name}</h3>

        <span className="text-xs italic opacity-80">Category: {category}</span>
        <span className="text-xs italic opacity-80">Budget: {budget}</span>
        <div className="mt-auto pt-3 flex justify-between items-center">
          <Button text={"Add to Favorites ❤"} />
          <Navigator path={`/destinations/${id}`} text={"Explore"} />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
