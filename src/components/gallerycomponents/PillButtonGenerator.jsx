import React from "react";

const PillButtonGenerator = React.memo(({ localstate, setstate, data }) => {
  const currentscreen = data[localstate.currentscreen];
  return currentscreen?.images ? (
    <div className="flex flex-row justify-center items-center mt-2 w-full gap-4 sm:gap-6 md:gap-8">
      {currentscreen.images.map((image, index) => (
        <div
          key={index}
          onClick={() => setstate({ currentimage: index })}
          className={`cursor-pointer transition-all duration-200 ease-in-out hover:bg-white ${
            localstate.currentimage === index ? "bg-white" : "bg-gray-400"
          } ${
            localstate.currentimage === index
              ? "w-4 h-2 sm:w-6 sm:h-3 md:w-8 md:h-4 rounded-[8px]"
              : "w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full"
          }`}
        ></div>
      ))}
    </div>
  ) : null;
});

export default PillButtonGenerator;
