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
        <div className="captiontext hover:underline">BACK</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <div className="headertext">{data[state["currentscreen"]].title}</div>
        <div className="captiontext">CHARACTER BUILDING MENTORING UMN 2024</div>
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
        <div className="captiontext hover:underline">NEXT</div>
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
        width: "calc(100vw - 180px)",
        height: "fit-content",
      }}
    >
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "120px",
          backgroundColor: "#18E6B1",
          padding: "24px",
        }}
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
          width: "calc(100% - 200px)",
          height: "220px",
          backgroundColor: "transparent",
          gap: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          padding: "24px",
          marginLeft: "10px",
          marginRight: "10px",
          overflowY: "hidden",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          scrollbarGutter: "stable",
          scrollbarColor: "#e8eaed rgba(0, 0, 0, 0)",
          scrollbarWidth: "thin",
        }}
      >
        {currentdata.images.map((image,index) => {
          return (
            <div
              key={index}
              style={{
                border: "4px solid #e8eaed",
                borderRadius: "8px",
                aspectRatio: "1/1",
                height: "100%",

              }}
            >
              <LoadableImage src={image} />
            </div>
          );
        })};

      </div>
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "120px",
          backgroundColor: "#18E6B1",
          padding: "24px",
        }}
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

const data = {
  main: {},
  tutorial: {
    back: "main",
    screenname: "tutorial",
    next: "stage1",

    title: "Tutorial Stage",
    widecover: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
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
  }
  return (
    <div className="surround">
      {localstate.currentscreen === "main" ? (
        <>
          <div>
            <div className="headertext">Gallery</div>
            <div className="captiontext">
              CHARACTER BUILDING MENTORING UMN 2024
            </div>
            <div className="boldcaption">SELECT YOUR EVENT</div>
          </div>
          <div className="canvas">
            <div className="gallerybox">
              <ExpandingClickablePhoto data={data.tutorial} setstate={setState} />
            </div>
            <div className="gallerybox">
              <ExpandingClickablePhoto data={data.stage1} setstate={setState}/>
            </div>
            <div className="gallerybox">
              <ExpandingClickablePhoto data={data.stage2} setstate={setState}/>
            </div>
            <div className="gallerybox">
              <ExpandingClickablePhoto data={data.stage3} setstate={setState}/>
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
              width: "calc(100vw - 85px)",
              overflow: "clip",
            }}
          >
              <InternalNavBar state={localstate} setstate={setState} data={data} />
          </div>
          <div
            style={{
              border: "4px solid #e8eaed",
              borderRadius: "8px",
                width: "calc(100vw - 420px)",
                marginTop: "28px",
                height: "calc(100vh - 320px)",
                marginBottom: "58px",
            }}
            >
            <LoadableImage src={data[localstate.currentscreen].widecover} />
            </div>
            <ScrollablePhotoSet localstate={localstate} setstate={setState} data={data}/>
        </>
      )}
    </div>
  );
}
