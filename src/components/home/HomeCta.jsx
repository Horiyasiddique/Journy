import themeContext from "@/context/themeContext";
import React, { useContext } from "react";
import Navigator from "../Navigator";

const HomeCta = () => {
  const { currentTheme } = useContext(themeContext);
  return (
    <div
      className={`${currentTheme.card} w-3/4 py-16 px-4 rounded-2xl flex flex-col justify-center items-center gap-6 transition-all duration-300 ease-linear`}
    >
      <h1 className="text-4xl font-bold">Don&apos;t Miss Your Next Adventure!</h1>
      <p className="text-center font-normal w-96 ">
        Every day you wait, someone else is exploring your dream destination.
        Book your journey today and make memories that last forever!
      </p>
      <div className="flex justify-center items-center gap-6">
        <Navigator text={"Start Exploring"} path={"/destinations"} />
        <Navigator text={"Plan my Trip"} path={"/planner"} />
      </div>
    </div>
  );
};

export default HomeCta;
