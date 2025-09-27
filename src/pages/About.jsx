import React, { useContext } from "react";
import HeroSection from "@/components/HeroSection";
import themeContext from "@/context/themeContext";

const About = () => {
  const { currentTheme } = useContext(themeContext);
  const team = [
    {
      name: "Hooriya",
      role: "Frontend Developer",
      img: "https://i.pinimg.com/736x/13/eb/9c/13eb9c64299bf35c0091d75a23d1d192.jpg", // replace with real img
      desc: "Bringing designs to life with React, Tailwind, and smooth user experiences.",
    },
    {
      name: "Fara",
      role: "Backend Developer",
      img: "https://i.pinimg.com/736x/9b/47/6d/9b476d7eae809a0363d51e0b842ce6ad.jpg",
      desc: "Crafting powerful APIs, managing databases, and ensuring app security.",
    },
    {
      name: "Basel",
      role: "Backend Developer",
      img: "https://i.pinimg.com/736x/fd/5e/b1/fd5eb1221a001528b86f1436229c2413.jpg",
      desc: "Crafting powerful APIs, managing databases, and ensuring app security.",
    },
  ];

  const missionAndVision = [
    {
      heading: "Our Mission",
      text: "To empower travelers by providing a platform that combines trip planning, inspiration, and a supportive community. We want every user to plan trips effortlessly and create memories that last forever.",
    },
    {
      heading: "Our Vision",
      text: "To become the go-to digital travel companion for explorers across the globe — blending technology, creativity, and community spirit.",
    },
  ];

  return (
    <div className="mt-36">
      {/* Hero Section */}
      <HeroSection
        image={
          "https://i.pinimg.com/1200x/67/0e/36/670e362752ba66793c3283a70903a2cc.jpg"
        }
        heading="About Us"
      />

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Story
        </h2>
        <p className="text-lg leading-relaxed text-center">
          We are <span className="font-semibold">Hooriya, Fara, and Basel</span>{" "}
          — three passionate creators who came together with a single vision:
          making travel planning simple, personalized, and inspiring.
        </p>
        <p className="text-lg leading-relaxed text-center">
          Our journey started with endless group chats, travel bucket lists, and
          the desire to share hidden gems with the world. Today, our platform is
          built to connect travelers with meaningful experiences, while keeping
          the joy of exploration alive.
        </p>
      </section>

      {/* Mission / Vision Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-12">
        {missionAndVision.map((elem, index) => {
          return (
            <div
              key={index}
              className={`space-y-6 ${currentTheme.card} px-6 py-3 rounded-2xl transition-all duration-300 ease-linear`}
            >
              <h2 className="text-2xl md:text-3xl font-bold">{elem.heading}</h2>
              <p className="text-lg leading-relaxed">{elem.text}</p>
            </div>
          );
        })}
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full shadow-md"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="font-light italic">{member.role}</p>
              <p className="text-sm leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
