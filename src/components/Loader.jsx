import React from "react";

const Loader = () => {
  return (
    <div class="mt-32 bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
      <div class="w-20 h-20 bg-white/30 rounded-full animate-pulse-slow mb-4"></div>
      <h3 class="text-white font-semibold text-lg">Loading</h3>
    </div>
  );
};

export default Loader;
