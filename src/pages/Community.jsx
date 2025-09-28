import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import CommunityCard from "@/components/CommunityCard";
import { databases } from "@/api/appwrite";
import Loader from "@/components/Loader";

const Community = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const trips = await databases.listDocuments({
          databaseId: import.meta.env.VITE_APPWRITE_DB_ID,
          collectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
          queries: [],
        });
        if (trips) {
          setTrips(trips.documents);
        }
      } catch (error) {
        console.error("Error fetching trips:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="mt-32">
      {/* Hero Section */}
      <HeroSection
        heading="Community Trips"
        image="https://i.pinimg.com/736x/96/a1/d7/96a1d73876ab964991f1d0944817cf01.jpg"
      />

      {/* Trips Section */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 mt-12">
        {trips.map((trip, index) => (
          <CommunityCard
            key={index}
            id={trip.$id}
            image={trip.image}
            title={trip.title}
            destination={trip.destination}
            description={trip.description}
            duration={trip.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
