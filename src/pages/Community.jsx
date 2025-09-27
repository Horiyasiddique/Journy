import React from "react";
import HeroSection from "@/components/HeroSection";
import CommunityCard from "@/components/CommunityCard";

const Community = () => {
  const trips = [
    {
      id: 1,
      title: "Exploring Bali Beaches",
      image:
        "https://i.pinimg.com/1200x/e0/31/a9/e031a96ec6e6ab68a940e24c14ca96e3.jpg",
      description: "An unforgettable journey through Bali's sandy shores.",
      duration: "15 days",
      destination: "Bali, Indonesia",
    },
    {
      id: 2,
      title: "Hiking in Switzerland",
      image:
        "https://i.pinimg.com/1200x/d9/5c/e6/d95ce6e5807d616d7cb7691316cb616e.jpg",
      description: "Snowy peaks, fresh air, and breathtaking mountain views.",
      duration: "1 week",
      destination: "Switzerland",
    },
  ];

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
