import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ExpandingClickablePhoto } from "../../components/gallerycomponents/ExpandingClickablePhoto";
import { LoadableImage } from "../../components/gallerycomponents/LoadableImage";
import InternalNavBar from "../../components/gallerycomponents/InternalNavBar";
import ScrollablePhotoSet from "../../components/gallerycomponents/ScrollablePhotoSet";
import PillButtonGenerator from "../../components/gallerycomponents/PillButtonGenerator";
import "./style.css";
import { getData } from './data.js';

export function Gallery() {
  const [data, setData] = useState(null);
  const [localstate, _setstate] = useState({
    selected: "tutorial",
    currentscreen: "main",
    currentimage: 0,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [initialPathCheck, setInitialPathCheck] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!initialPathCheck && location.pathname.endsWith("collection")) {
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
        navigate("/gallery/collection");
      }
    },
    [navigate]
  );

  const currentData = useMemo(
    () => data ? data[localstate.currentscreen] : null,
    [data, localstate.currentscreen]
  );

  if (!data) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="background-mentoring py-40">
      {location.pathname.endsWith("collection") && currentData?.images ? (
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
            <div className="flex flex-col items-center justify-center 2xl:w-[60rem] xl:w-[48rem] lg:w-[36rem] md:w-[28rem] w-[18rem]">
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
          <div className="px-4 sm:px-0 max-w-4xl mx-auto text-center">
            <h1 className="spyagencyBoldItal font-normal text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              GALLERY
            </h1>
            <p className="text-white font-medium text-lg sm:text-xl lg:text-2xl mt-1">
              CHARACTER BUILDING MENTORING UMN 2024
            </p>
            <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl xss:mt-8 md:mt-16">
              SELECT YOUR EVENT
            </p>
          </div>
          <div className="w-full flex justify-center mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xss:gap-0 md:gap-4 lg:gap-6">
              {["tutorial", "stage1", "stage2", "stage3", "manifest"].map(
                (key, index, array) => (
                  <div
                    key={key}
                    className={`overflow-hidden border-white md:border-8 xss:border-4 rounded-3xl xss:w-[19.5rem] xss:h-[8.438rem] sm:w-[30rem] md:w-[20rem] md:h-[12rem] lg:w-[24rem] lg:h-[14rem] xl:w-[32rem] xl:h-[18.5rem] 2xl:w-[41rem] 2xl:h-[23.5rem] sm:h-[14rem] md:mt-2 xss:mt-4 ${
                      index === array.length - 1 && array.length % 2 !== 0
                        ? "md:col-span-2 md:justify-self-center"
                        : ""
                    }`}
                  >
                    <ExpandingClickablePhoto
                      data={data[key]}
                      setstate={setState}
                      centercrop={true}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(Gallery);
