import { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { databases } from "@/api/appwrite";
import useAuth from "@/hooks/useAuth";
import HeroSection from "@/components/HeroSection";
import DestinationCard from "@/components/DestinationCard";

const Destinations = () => {
  const [search, setSearch] = useState("");
  const [destinations, setDestinations] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      const destinations = await databases.listDocuments({
        databaseId: "68d44b0c002eb2b207f9",
        collectionId: "destinations",
        queries: [],
      });
      if (destinations) {
        setDestinations(destinations.documents);
      }
    })();
  }, []);

  const filteredDestinations = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-32">
      {/* Hero section */}
      <HeroSection
        heading={"Explore Destinations"}
        image={
          "https://i.pinimg.com/736x/e5/9f/8e/e59f8ef8afcb614bde688709511a6234.jpg"
        }
      />

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
        {filteredDestinations.map((dest, index) => (
          <DestinationCard
            key={index}
            id={dest.$id}
            name={dest.name}
            image={dest.image}
            category={dest.category}
            budget={dest.budget}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
