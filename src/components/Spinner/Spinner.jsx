import React from "react";

const Spinner = () => {
  return (
    <div className="overflow-hidden">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-accent border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Spinner;
