import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-transparent">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Inner Ring */}
        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-rose-400 border-b-transparent rounded-full animate-spin-slow"></div>

        {/* Center Glow */}
        <div className="absolute inset-4 bg-gradient-to-r from-amber-500 to-rose-400 rounded-full blur-md opacity-60"></div>
      </div>

      {/* Text */}
      <div className="ml-6 text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-rose-400 bg-clip-text text-transparent animate-pulse">
          Loading...
        </h3>
        <p className="text-gray-600 mt-2">
          Please wait, fetching awesome trips ✈️
        </p>
      </div>
    </div>
  );
};

export default Loader;
