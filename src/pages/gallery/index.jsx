/* eslint-disable react/prop-types */
import { ExpandingClickablePhoto } from "../../components/gallerycomponents/ExpandingClickablePhoto";
import { LoadableImage } from "../../components/gallerycomponents/LoadableImage";
import "./style.css";
import React from "react";
function InternalNavBar({ state, setstate, data }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          cursor: "pointer",
        }}
        onClick={() => {
          setstate({
            currentscreen: data[state["currentscreen"]].back,
          });
        }}
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
        <div
          style={{
            width: "10px",
          }}
        ></div>
        <div className="text-white font-medium text-lg sm:text-xl lg:text-2xl hover:underline">
          BACK
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <h1 className="headertext font-normal italic text-white text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          {data[state["currentscreen"]].title}
        </h1>
        <h4 className="text-white font-medium text-lg sm:text-xl lg:text-2xl">
          CHARACTER BUILDING MENTORING UMN 2024
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "end",
          justifyContent: "end",
          width: "100%",
        }}
        onClick={() => {
          setstate({
            currentscreen: data[state["currentscreen"]].next,
          });
        }}
      >
        <div className="text-white font-medium text-lg sm:text-xl lg:text-2xl hover:underline">
          NEXT
        </div>
        <div
          style={{
            width: "10px",
          }}
        ></div>
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
}

function ScrollablePhotoSet({ localstate, setstate, data }) {
  //console.log(localstate);
  let currentdata = data[localstate.currentscreen];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "calc(100vw - min(100 * 0.25, 100px))",
        height: "fit-content",
      }}
    >
      <div
        style={{
          width: "calc((1/16) * 100vw + 24px)",
          aspectRatio: "1/1",
          borderRadius: "120px",
          backgroundColor: "#18E6B1",
          padding: "calc(1/125 * (100vh + 100vw))",
        }}
        onClick={() => {
          setstate({
            currentimage:
              (localstate.currentimage - 1 + currentdata.images.length) %
              currentdata.images.length,
          });
        }}
        className="cursor-pointer"
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
          width: `
          calc(100vw - ((((1/16) * 100vw + 24px) * 2) + ((1/125 * (100vh + 100vw) * 4))))
          `,
          height: "calc(max(11/54 * 100vw,0px))",
          backgroundColor: "transparent",
          gap: "calc(1/150 * (100vh + 100vw))",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          marginLeft: "calc(1/125 * (100vh + 100vw))",
          marginRight: "calc(1/125 * (100vh + 100vw))",
          overflowX: "scroll",
          scrollbarWidth: "thin",
        }}
      >
        {currentdata.images.map((image, index) => {
          return (
            <div
              key={index}
              style={{
                height: "100%",
                borderRadius: "8px",
                overflow: "hidden",
                aspectRatio: "1 / 1",
                width: "100%",
                minWidth: "calc(max(11/54 * 100vw,0px))",
              }}
              onClick={() => {
                setstate({
                  currentimage: index,
                });
              }}
              className={`border-4 ${
                localstate.currentimage == index
                  ? "border-white"
                  : "border-transparent"
              } transition-all duration-200 ease-in-out hover:border-white cursor-pointer`}
            >
              <LoadableImage src={image} centercrop={true} />
            </div>
          );
        })}
      </div>
      <div
        style={{
          width: "calc((1/16) * 100vw + 24px)",
          aspectRatio: "1/1",
          borderRadius: "120px",
          backgroundColor: "#18E6B1",
          padding: "calc(1/125 * (100vh + 100vw))",
        }}
        onClick={() => {
          setstate({
            currentimage:
              (localstate.currentimage + 1) % currentdata.images.length,
          });
        }}
        className="cursor-pointer"
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
  );
}

function PillButtonGenerator({ localstate, setstate, data }) {
  let currentscreen = data[localstate.currentscreen];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "calc(min(1/54 * 100vw, 20px))",
      }}
    >
      {currentscreen.images.map((image, index) => {
        return (
          <div
            key={index}
            style={{
              width:
                localstate.currentimage == index
                  ? "calc(min(8/135 * 100vw, 64px))"
                  : "calc(min(4/135 * 100vw, 32px))",
              height: "16px",
              borderRadius: "calc(8px + min(1/135 * 100vw))",
              backgroundColor: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              setstate({
                currentimage: index,
              });
            }}
          ></div>
        );
      })}
    </div>
  );
}

const data = {
  main: {},
  tutorial: {
    back: "main",
    screenname: "tutorial",
    next: "stage1",
    title: "Tutorial Stage",
    widecover:
      "https://www.googleapis.com/drive/v3/files/1YXzVyCT5ntFM6fuq3J_OQJXs7u7CVV4U?alt=media&key=AIzaSyBKvY1LGnLLeJVfwQ2EvbjSfGC8CUyKiYA",
    images: [
      "https://www.googleapis.com/drive/v3/files/1Yf5qyLzC5j_4AK8_8jfTi1xsEi1Blk33?alt=media&key=AIzaSyBKvY1LGnLLeJVfwQ2EvbjSfGC8CUyKiYA",
      "https://www.googleapis.com/drive/v3/files/1Ykxlc6-qHGZYK67lqJ_iWqyOeAWlkt0h?alt=media&key=AIzaSyBKvY1LGnLLeJVfwQ2EvbjSfGC8CUyKiYA",
      "https://www.googleapis.com/drive/v3/files/1YzyBFo5ifGvgVyP5iQEIl-HVzuZAcTKv?alt=media&key=AIzaSyBKvY1LGnLLeJVfwQ2EvbjSfGC8CUyKiYA",
      "https://www.googleapis.com/drive/v3/files/1YzyBFo5ifGvgVyP5iQEIl-HVzuZAcTKv?alt=media&key=AIzaSyBKvY1LGnLLeJVfwQ2EvbjSfGC8CUyKiYA",
      "https://www.googleapis.com/drive/v3/files/1YzyBFo5ifGvgVyP5iQEIl-HVzuZAcTKv?alt=media&key=AIzaSyBKvY1LGnLLeJVfwQ2EvbjSfGC8CUyKiYA",
      "https://www.googleapis.com/drive/v3/files/1YzyBFo5ifGvgVyP5iQEIl-HVzuZAcTKv?alt=media&key=AIzaSyBKvY1LGnLLeJVfwQ2EvbjSfGC8CUyKiYA",
    ],
  },
  stage1: {
    back: "tutorial",
    screenname: "stage1",
    next: "stage2",
    title: "Stage 1",
    widecover: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  stage2: {
    back: "stage1",
    screenname: "stage2",
    next: "stage3",
    title: "Stage 2",
    widecover: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  stage3: {
    back: "stage2",
    screenname: "stage3",
    next: "main",
    title: "Stage 3",
    widecover: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
};

export function Gallery() {
  let [localstate, _setstate] = React.useState({
    selected: "tutorial",
    currentscreen: "main",
    currentimage: 0,
  });
  let setState = (newstate) => {
    _setstate({ ...localstate, ...newstate });
  };
  return (
    <div className="surround background-mentoring py-40">
      {localstate.currentscreen === "main" ? (
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
          <div className="canvas">
            <div className="gallerybox">
              <ExpandingClickablePhoto
                data={data.tutorial}
                setstate={setState}
                centercrop={true}
              />
            </div>
            <div className="gallerybox">
              <ExpandingClickablePhoto
                data={data.stage1}
                setstate={setState}
                centercrop={true}
              />
            </div>
            <div className="gallerybox">
              <ExpandingClickablePhoto
                data={data.stage2}
                setstate={setState}
                centercrop={true}
              />
            </div>
            <div className="gallerybox">
              <ExpandingClickablePhoto
                data={data.stage3}
                setstate={setState}
                centercrop={true}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              width: "calc(100vw - min(100vw*(17/216),85px))",
              overflow: "clip",
            }}
          >
            <InternalNavBar
              state={localstate}
              setstate={setState}
              data={data}
            />
          </div>
          <div
            style={{
              border: "4px solid #e8eaed",
              borderRadius: "8px",
              width: "calc(100vw - min((100vw * 50/609) * 0.8, 100px))",
              marginTop: "28px",
              height: "calc(100vh - 320px)",
              marginBottom: "58px",
            }}
          >
            <LoadableImage
              src={
                data[localstate.currentscreen].images[localstate.currentimage]
              }
              centercrop={true}
            />
          </div>
          <ScrollablePhotoSet
            localstate={localstate}
            setstate={setState}
            data={data}
            />
            <div style={{
              height: "20px"

            }}>

            </div>
          <PillButtonGenerator
            localstate={localstate}
            setstate={setState}
            data={data}
          />
        </>
      )}
    </div>
  );
}
