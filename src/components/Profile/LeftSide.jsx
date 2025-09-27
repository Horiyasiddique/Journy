import React, { useContext } from "react";
import useAuth from "@/hooks/useAuth";
import Button from "../Button";
import themeContext from "@/context/themeContext";

const LeftSide = () => {
  const { user } = useAuth();
  const { currentTheme } = useContext(themeContext);

  return (
    <div
      className={`${currentTheme.card} w-full lg:w-1/4 p-6 flex flex-col items-center gap-6 rounded-2xl `}
    >
      {/* profile pic */}
      <div className="bg-rose-100 w-36 h-36 rounded-full flex items-center justify-center text-amber-600 text-6xl font-bold">
        {user?.name?.charAt(0).toUpperCase() || "?"}
      </div>

      {/* user data */}
      <div className="text-center space-y-1">
        <h1 className="font-semibold text-4xl">{user?.name}</h1>
        <h2 className="text-lg opacity-70 ">{user?.email}</h2>
      </div>

      {/* logout button */}
      <Button text={"Log Out"} onClick={() => {}} />
    </div>
  );
};

export default LeftSide;
