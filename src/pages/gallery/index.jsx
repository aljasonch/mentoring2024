import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ExpandingClickablePhoto } from "../../components/gallerycomponents/ExpandingClickablePhoto";
import { LoadableImage } from "../../components/gallerycomponents/LoadableImage";
import "./style.css";
import data from "./data";


const InternalNavBar = React.memo(({ state, setstate, data }) => {
  const handleBackClick = useCallback(() => {
    if (data[state.currentscreen] && data[state.currentscreen].back) {
      setstate({
        currentscreen: data[state.currentscreen].back,
      });
    } else {
      console.error("Invalid state or data");
    }
  }, [state, data, setstate]);

  const handleNextClick = useCallback(() => {
    setstate({
      currentscreen: data[state.currentscreen]?.next,
    });
  }, [state, data, setstate]);

  return (
    <>
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={handleBackClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
          <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
        </svg>
        <div className="ml-2 text-white font-medium text-lg sm:text-xl lg:text-2xl hover:underline">
          BACK
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <h1 className="headertext font-normal italic text-white text-center text-3xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-7xl">
          {data[state.currentscreen]?.title}
        </h1>
        <h4 className="text-white font-medium text-lg sm:text-lg lg:text-xl mt-1">
          CHARACTER BUILDING MENTORING UMN 2024
        </h4>
      </div>
      <div
        className="flex flex-row items-center cursor-pointer content-end justify-end"
        onClick={handleNextClick}
      >
        <div className="mr-2 text-white font-medium text-lg sm:text-xl lg:text-2xl hover:underline">
          NEXT
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#e8eaed"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
          </g>
        </svg>
      </div>
    </>
  );
});

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
        style={{
          width: "var(--buttonsize)",
          aspectRatio: "1/1",
          borderRadius: "120px",
          backgroundColor: "#18E6B1",
          padding: "calc(max(12/3227 * (100vh + 100vw),12px))",
        }}
        onClick={handlePrevClick}
        className="cursor-pointer mr-4"
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
          height:"100%",
          gap: "calc(1/150 * (100vh + 100vw))",
          scrollbarWidth: "none",
        }}
        className="overflow-x-scroll flex flex-row justify-start md:mr-5 md:ml-5 lg:mr-10 lg:ml-10 xl:mr-20 xl:ml-20 scrollbar-thumb-white scrollbar-track-white hover:scrollbar-thumb-gray-300 hover:scrollbar-track-gray-300 w-full bg-transparent"
      >
        {currentdata.images.map((image, index) => (
          <div
            key={index}
            id={index === localstate.currentimage ? "currentimage" : ""}
            style={{
              borderRadius: "8px",
              minWidth: "calc(max(139/1440 * 100vw,64px))",
            }}
            onClick={() => setstate({ currentimage: index })}
            className={`border-4 ${
              localstate.currentimage === index
                ? "border-white"
                : "border-transparent"
            } transition-all duration-200 ease-in-out hover:border-white cursor-pointer w-full h-full overflow-hidden`}
          >
            <LoadableImage src={image} centercrop={true} />
          </div>
        ))}
      </div>
      <div
        style={{
          width: "var(--buttonsize)",
          aspectRatio: "1/1",
          borderRadius: "120px",
          backgroundColor: "#18E6B1",
          padding: "calc(max(12/3227 * (100vh + 100vw),12px))",
        }}
        onClick={handleNextClick}
        className="cursor-pointer ml-4"
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

const PillButtonGenerator = React.memo(({ localstate, setstate, data }) => {
  const currentscreen = data[localstate.currentscreen];
  return currentscreen?.images ? (
    <div
      style={{ gap: "calc(min(1/54 * 100vw, 20px))" }}
      className="flex flex-row justify-center items-center w-full"
    >
      {currentscreen.images.map((image, index) => (
        <div
          key={index}
          style={{
            width:
              localstate.currentimage === index ? "calc(32px)" : "calc(16px)",
            height: "16px",
            borderRadius: localstate.currentimage === index ? "8px" : "16px",
          }}
          onClick={() => setstate({ currentimage: index })}
          className={`cursor-pointer ${
            localstate.currentimage === index ? "bg-white" : "bg-gray-400"
          } transition-all duration-200 ease-in-out hover:bg-white`}
        ></div>
      ))}
    </div>
  ) : null;
});

export function Gallery() {
  const [localstate, _setstate] = useState({
    selected: "tutorial",
    currentscreen: "main",
    currentimage: 0,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [initialPathCheck, setInitialPathCheck] = useState(false);

  useEffect(() => {
    if (!initialPathCheck && location.pathname.endsWith("photoset")) {
      _setstate((prevState) => ({
        ...prevState,
        currentscreen: "tutorial",
      }));
      setInitialPathCheck(true);
    }
  }, [location, initialPathCheck]);

  const setState = useCallback(
    (newstate) => {
      _setstate((prevState) => ({ ...prevState, ...newstate }));
      if (newstate.currentscreen === "main") {
        navigate("/gallery");
      } else {
        navigate("/gallery/photoset");
      }
    },
    [navigate]
  );

  const currentData = data[localstate.currentscreen];

  return (
    <div className="surround background-mentoring py-40">
      {location.pathname.endsWith("photoset") && currentData?.images ? (
        <div className="w-full flex justify-center flex-col">
          <div
            className="flex flex-row justify-between items-center mx-auto overflow-clip"
            style={{ width: "calc(100vw - min(100vw*(17/216),85px))" }}
          >
            <InternalNavBar
              state={localstate}
              setstate={setState}
              data={data}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-items-center">
            <div
              className="
              flex flex-col items-center justify-center
              2xl:w-[1100px] 2xl:h-[687px]
              xl:w-[900px] xl:h-[562px]
              lg:w-[700px] lg:h-[437px]
              md:w-[500px] md:h-[312px]
              w-[300px] h-[300px]
              "
            >
              <div className="border-4 border-[#e8eaed] rounded-3xl mt-7 mb-16 overflow-hidden">
                <LoadableImage
                  src={currentData.images[localstate.currentimage]}
                  centercrop={true}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <ScrollablePhotoSet
            localstate={localstate}
            setstate={setState}
            data={data}
          />
          <PillButtonGenerator
            localstate={localstate}
            setstate={setState}
            data={data}
          />
        </div>
      ) : (
        <>
          <div className="px-4 sm:px-0 max-w-4xl mx-auto">
            <h1 className="font-normal-spyagency font-normal italic text-white text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              GALLERY
            </h1>
            <h4 className="text-white font-medium text-lg sm:text-xl lg:text-2xl mt-1">
              CHARACTER BUILDING MENTORING UMN 2024
            </h4>
            <div className="h-20"></div>
            <h4 className="text-white font-medium text-lg sm:text-xl lg:text-2xl mt-1 boldcaption">
              SELECT YOUR EVENT
            </h4>
          </div>
          <div className="w-full flex flex-row justify-center">
            <div className="canvas grid grid-cols-2 gap-4 sm:max-w-full pad m-4 md:max-w-6xl w-full">
              <div className="w-full flex h-full flex-row">
                <div className="gallerybox">
                  <ExpandingClickablePhoto
                    data={data.tutorial}
                    setstate={setState}
                    centercrop={true}
                  />
                </div>
              </div>
              <div className="gallerybox">
                <ExpandingClickablePhoto
                  data={data.stage1}
                  setstate={setState}
                  centercrop={true}
                />
              </div>
              <div className="w-full flex h-full flex-row">
                <div className="gallerybox">
                  <ExpandingClickablePhoto
                    data={data.stage2}
                    setstate={setState}
                    centercrop={true}
                  />
                </div>
              </div>
              <div className="gallerybox">
                <ExpandingClickablePhoto
                  data={data.stage3}
                  setstate={setState}
                  centercrop={true}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
