import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases } from "@/api/appwrite";
import Loader from "@/components/Loader";
import themeContext from "@/context/themeContext";

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const { currentTheme } = useContext(themeContext);
  useEffect(() => {
    (async () => {
      try {
        const res = await databases.getDocument(
          "68d44b0c002eb2b207f9",
          "destinations",
          id
        );
        setDestination(res);
      } catch (err) {
        console.error("Error fetching destination", err);
      }
    })();
  }, [id]);

  if (!destination) return <Loader />;

  return (
    <div
      className={`${currentTheme.background} ${currentTheme.text} max-w-4xl mx-auto mt-32 p-6`}
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-[400px] object-cover rounded-xl shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-6">{destination.name}</h1>
      <p className="mt-2 italic">Category: {destination.category}</p>
      <p className="mt-2 italic">Budget: {destination.budget}</p>
      <p className="mt-4 text-lg">{destination.description}</p>
    </div>
  );
};

export default DestinationDetail;
