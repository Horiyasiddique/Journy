import Card from "../Card";
const FeaturedSection = () => {
  const experiences = [
    {
      imageUrl:
        "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg",
      category: "Adventure Seekers",
      experiences: [
        "Mountain Trekking Expeditions",
        "Scuba Diving Adventures",
        "Wild Safari Tours",
        "Extreme Sports Packages",
      ],
      ctaLink: "/adventure",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      category: "Relaxation & Wellness",
      experiences: [
        "Luxury Spa Retreats",
        "Beachside Yoga Sessions",
        "Meditation Getaways",
        "Hot Spring Resorts",
      ],
      ctaLink: "/wellness",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
      category: "Cultural Immersion",
      experiences: [
        "Ancient Temple Tours",
        "Local Festival Experiences",
        "Traditional Craft Workshops",
        "Historical City Walks",
      ],
      ctaLink: "/culture",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
      category: "Food & Wine Tours",
      experiences: [
        "Local Culinary Classes",
        "Vineyard Wine Tasting",
        "Street Food Adventures",
        "Gourmet Dining Experiences",
      ],
      ctaLink: "/food-tours",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Find Your Travel Style
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              imageUrl={exp.imageUrl}
              category={exp.category}
              experiences={exp.experiences}
              ctaLink={exp.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
