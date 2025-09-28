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
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      category: "Beaches",
      experiences: [
        "White sand beaches",
        "Crystal clear water",
        "Fresh sea food",
        "Ocean sun sets",
      ],
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
      category: "City",
      experiences: [
        "Local markets",
        "Landmark tours",
        "street food",
        "Night life",
      ],
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
      category: "Mountains",
      experiences: [
        "Paranomic Views",
        "Nature hiking",
        "Cozy Cabins",
        "Adventure trecking",
      ],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Find Your Travel Style
        </h2>
        <div className="px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              imageUrl={exp.imageUrl}
              category={exp.category}
              experiences={exp.experiences}
              ctaLink={"/destinations"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
