import LeftSide from "@/components/Profile/LeftSide";
import RightSide from "@/components/Profile/RightSide";
import React from "react";

const Profile = () => {
  return (
    <div className="mt-32 flex flex-col lg:flex-row gap-4 w-full min-h-screen">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Profile;