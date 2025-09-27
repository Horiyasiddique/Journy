import React, { useContext } from "react";
import useAuth from "@/hooks/useAuth";
import Button from "../Button";
import themeContext from "@/context/themeContext";

const LeftSide = () => {
  const { user } = useAuth();
  const {currentTheme} = useContext(themeContext);
  return (
    <div className={`${currentTheme.card} w-1/4 h-screen`}>
      {/* profile pic */}
      <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center text-indigo-600 text-3xl font-bold">
        {user?.name?.charAt(0).toUpperCase() || "?"}
      </div>
      {/* user data and logout button */}
      <div>
        <h1>{user?.name}</h1>
        <h2>{user?.email}</h2>
        <Button text={"LogOut"} onClick={() => {}}/>
      </div>
    </div>
  );
};

export default LeftSide;
