import React from "react";

const TaskButton = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-30 py-1 px-1 rounded-lg mt-3 bg-black text-white font-semibold cursor-pointer hover:bg-black/20 hover:text-black hover:border transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default TaskButton;
