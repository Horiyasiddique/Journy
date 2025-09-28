import { useContext } from "react";
import {
  FaMoneyBillWave,
  FaShieldAlt,
  FaHeadset,
  FaMapMarkerAlt,
} from "react-icons/fa";
import themeContext from "../../context/themeContext";

const WhyTravelWithUs = () => {
  const { currentTheme } = useContext(themeContext);
  const features = [
    {
      icon: FaMoneyBillWave,
      title: "Unbeatable Value",
      description:
        "Price match guarantee with no hidden fees. Exclusive member discounts and flexible payment plans.",
    },
    {
      icon: FaShieldAlt,
      title: "Travel Confidently",
      description:
        "Fully insured with 24/7 emergency support. Verified partners and comprehensive safety measures.",
    },
    {
      icon: FaHeadset,
      title: "Always Here For You",
      description:
        "Round-the-clock multilingual support. Instant assistance via chat, phone, or email.",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Curated Experiences",
      description:
        "Handpicked destinations and authentic local experiences beyond typical tourist routes.",
    },
  ];
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Travel With Us
        </h2>

        <div className="px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((elem, index) => {
            return (
              <div
                key={index}
                className={`${currentTheme.card} group py-4 px-8 rounded-xl flex flex-col justify-center items-center gap-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className="text-4xl text-amber-400">{<elem.icon />}</div>
                <h1 className="text-center font-bold text-xl">{elem.title}</h1>
                <p className="text-center text-sm font-normal leading-relaxed">
                  {elem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTravelWithUs;
