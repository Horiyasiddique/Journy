import themeContext from "@/context/themeContext";
import React, { useContext } from "react";
import Navigator from "../Navigator";

const HomeCta = () => {
  const { currentTheme } = useContext(themeContext);
  return (
    <section className="px-6 md:px-0">
      <div
        className={`${currentTheme.card} w-full md:w-11/12 lg:w-3/4 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 rounded-xl lg:rounded-2xl flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-6 transition-all duration-300 ease-linear mx-auto`}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center px-2">
          Don&apos;t Miss Your Next Adventure!
        </h1>
        <p className="text-center font-normal w-full sm:w-4/5 lg:w-96 text-sm sm:text-base lg:text-lg px-2 sm:px-0">
          Every day you wait, someone else is exploring your dream destination.
          Book your journey today and make memories that last forever!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Navigator text={"Start Exploring"} path={"/destinations"} />
          <Navigator text={"Plan my Trip"} path={"/planner"} />
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
