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
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const destinations = await databases.listDocuments({
          databaseId: "68d44b0c002eb2b207f9",
          collectionId: "destinations",
          queries: [],
        });

        if (destinations) {
          setDestinations(destinations.documents);

          const allCategories = destinations.documents.flatMap((elem) => {
            if (Array.isArray(elem.category)) {
              return elem.category.map((c) => c.toLowerCase().trim());
            }
            return [String(elem.category).toLowerCase().trim()];
          });

          const uniqueCategories = ["all", ...new Set(allCategories)];
          setCategories(uniqueCategories);
        }
      } catch (err) {
        console.error("Error fetching destinations:", err);
      const destinations = await databases.listDocuments({
        databaseId: import.meta.env.VITE_APPWRITE_DB_ID,
        collectionId: import.meta.env.VITE_APPWRITE_DESTINATIONS_COLLECTION_ID,
        queries: [],
      });
      if (destinations) {
        setDestinations(destinations.documents);
      }
  }})();
  }, []);

  // filter logic
  const filteredDestinations = destinations.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase());

    // normalize category
    const destCategory = Array.isArray(d.category)
      ? d.category.map((c) => c.toLowerCase().trim())
      : [String(d.category).toLowerCase().trim()];

    const matchesCategory =
      selectedCategory === "all" || destCategory.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8">
      {/* Hero section */}
      <HeroSection
        heading="Explore Destinations"
        image="https://i.pinimg.com/736x/e5/9f/8e/e59f8ef8afcb614bde688709511a6234.jpg"
      />

      {/* Search + Filters */}
      <div className="max-w-3xl mx-auto mt-10">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((elem, index) => (
            <Button
              key={index}
              text={elem}
              onClick={() => setSelectedCategory(elem)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCategory === elem
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-transparent border-gray-400 text-gray-600 hover:bg-gray-100"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {filteredDestinations.map((dest) => (
          <DestinationCard
            key={dest.$id}
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
