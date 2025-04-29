import React from "react";

const MainContent = ({ children }) => {
  return (
    <div className=" p-6 bg-stone-200 rounded-lg border-t h-full w-full text-black">
      {children}
    </div>
  );
};

export default MainContent;
