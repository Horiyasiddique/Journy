import LeftSide from "@/components/Profile/LeftSide";
import RightSide from "@/components/Profile/RightSide";
import React from "react";

const Profile = () => {
  return (
    <div className="mt-32 px-6 md:px-0 flex flex-col justify-center items-center lg:flex-row gap-4 w-full min-h-screen">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Profile;