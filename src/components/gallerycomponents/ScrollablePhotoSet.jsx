import React, { useEffect, useCallback } from "react";
import { LoadableImage } from "../../components/gallerycomponents/LoadableImage";

const ScrollablePhotoSet = React.memo(({ localstate, setstate, data }) => {
  const currentdata = data[localstate.currentscreen];

  useEffect(() => {
    if (currentdata?.images) {
      const element = document.getElementById("currentimage");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentdata]);

  const handlePrevClick = useCallback(() => {
    setstate({
      currentimage:
        (localstate.currentimage - 1 + currentdata.images.length) %
        currentdata.images.length,
    });
  }, [localstate, currentdata, setstate]);

  const handleNextClick = useCallback(() => {
    setstate({
      currentimage: (localstate.currentimage + 1) % currentdata.images.length,
    });
  }, [localstate, currentdata, setstate]);

  return currentdata?.images ? (
    <div
      style={{ width: "calc(100vw - min(100 * 0.25, 100px))" }}
      className="sizeglobals h-fit flex-row mb-5 justify-between justify-items-center flex items-center"
    >
      <div
        onClick={handlePrevClick}
        className="cursor-pointer xss:w-12 xss:p-2 mr-4 xl:w-16 aspect-square rounded-full bg-[#18E6B1]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          viewBox="0 0 24 24"
          width="100%"
          fill="#00000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
          <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
        </svg>
      </div>
      <div
        style={{
          height: "100%",
          gap: "calc(1/150 * (100vh + 100vw))",
          scrollbarWidth: "none",
        }}
        className="overflow-x-scroll flex flex-row justify-start md:mr-5 md:ml-5 lg:mr-10 lg:ml-10 xl:mr-20 xl:ml-20 w-full bg-transparent"
      >
        {currentdata.images.map((image, index) => (
          <div
            key={index}
            id={index === localstate.currentimage ? "currentimage" : ""}
            onClick={() => setstate({ currentimage: index })}
            className={`border-4 ${
              localstate.currentimage === index
                ? "border-white"
                : "border-transparent"
            } min-w-24 sm:min-w-[88px] md:min-w-24 lg:min-w-28 xl:min-w-48 xl:max-w-48 2xl:min-w-56 2xl:max-w-56 transition-all duration-200 ease-in-out hover:border-white cursor-pointer w-full h-full rounded-xl overflow-hidden`}
          >
            <LoadableImage src={image} centercrop={true} />
          </div>
        ))}
      </div>
      <div
        onClick={handleNextClick}
        className="cursor-pointer xss:w-12 xss:p-2 xl:w-16 ml-4 aspect-square rounded-full bg-[#18E6B1]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="100%"
          viewBox="0 0 24 24"
          width="100%"
          fill="#00000"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
          </g>
        </svg>
      </div>
    </div>
  ) : null;
});

export default ScrollablePhotoSet;
