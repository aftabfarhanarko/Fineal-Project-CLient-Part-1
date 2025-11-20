import React from "react";

const Loding = () => {
  return (
    <div>
     <div className="flex items-center justify-center py-6">
      <div className="text-lg font-semibold text-gray-700 flex gap-1">
        <span>Loading</span>
        <span className="animate-bounce">.</span>
        <span className="animate-bounce delay-150">.</span>
        <span className="animate-bounce delay-300">.</span>
      </div>
    </div>
    </div>
  );
};

export default Loding;
