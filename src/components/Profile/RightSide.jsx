import { databases } from "@/api/appwrite";
import themeContext from "@/context/themeContext";
import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaPlaneDeparture } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
import { account } from "../../api/appwrite";
import { Query } from "appwrite"

const RightSide = () => {
  const { currentTheme } = useContext(themeContext);
  const { user } = useAuth()

  const [userId, setUserId] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [userPlans, setUserPlans] = useState([]);

  // const favorites1 = [
  //   {
  //     image:
  //       "https://i.pinimg.com/1200x/a1/31/78/a131781cd8465dbdb941ad0b94219945.jpg",
  //     name: "Banff National Park",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/736x/55/a7/5b/55a75b609a7dee711010b683b34cebad.jpg",
  //     name: "Kyoto",
  //   },
  // ];

  // const userPlans1 = [
  //   {
  //     image:
  //       "https://i.pinimg.com/736x/97/16/e0/9716e0d621847ed645641891eeba67aa.jpg",
  //     name: "Enjoy cuisines on seaside",
  //     destination: "Maldives",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/736x/5e/cb/11/5ecb1153d05344b5745bea7753acef8e.jpg",
  //     name: "Greek Vibe in Summer",
  //     destination: "Greece",
  //   },
  // ];

  // Step 1: Get the current signed-in user
  useEffect(() => {
    (async () => {
      try {
        const currentUser = await account.get();
        setUserId(currentUser.$id);
      } catch (err) {
        console.error("No user logged in:", err);
      }
    })();
  }, []);

  useEffect(() => {
    if (!userId) return;

    (async () => {
      try {
        const response = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DB_ID,
          import.meta.env.VITE_APPWRITE_FAVORITES_COLLECTION_ID,
          [Query.equal("userId", userId)]
        );

        setFavorites(response.documents);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    })();
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    (async () => {
      try {
        const tripsRes = await databases.listDocuments({
          databaseId: import.meta.env.VITE_APPWRITE_DB_ID,
          collectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
          queries: [Query.equal("userId", userId)],
        }
        );


        const destinationsRes = await databases.listDocuments({
          databaseId: import.meta.env.VITE_APPWRITE_DB_ID,
          collectionId: import.meta.env.VITE_APPWRITE_DESTINATIONS_COLLECTION_ID,
          queries: [],
        }
        );


        const merged = tripsRes.documents.map(trip => {
          const dest = destinationsRes.documents.find(
            d => d.$id === trip.destinationId
          );
          return {
            ...trip,
            destinationName: dest?.name || "Unknown"
          };
        });
        if (merged) {
          console.log("merge", merged)
        }

        setUserPlans(merged);
        console.log(userPlans)

      } catch (error) {
        console.error("Error fetching Plans:", error);

      }
    })();
  }, [userId]);


  return (
    <div
      className={`${currentTheme.card} w-full lg:w-3/4 p-6 space-y-8 rounded-2xl`}
    >
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
                alt={elem.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <h2 className="text-sm font-medium">{elem.title}</h2>
                <h4 className="text-xs opacity-70">{elem.destinationName}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
