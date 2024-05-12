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
      className="sizeglobals"
    >
      <div
        style={{
          width: "var(--buttonsize)",
          aspectRatio: "1/1",
          borderRadius: "120px",
          backgroundColor: "#18E6B1",
          padding: "calc(max(12/3227 * (100vh + 100vw),12px))",
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
          width: `var(--carouselsize)`,
          height: "calc(max(139/1440 * 100vw,0px))",
          backgroundColor: "transparent",
          gap: "calc(1/150 * (100vh + 100vw))",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          marginLeft: "var(--carouselmargin)",
          marginRight: "var(--carouselmargin)",
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
                minWidth: "calc(max(139/1440 * 100vw,0px))",
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
          width: "var(--buttonsize)",
          aspectRatio: "1/1",
          borderRadius: "120px",
          backgroundColor: "#18E6B1",
          padding: "calc(max(12/3227 * (100vh + 100vw),12px))",
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
      "https://www.googleapis.com/drive/v3/files/1cW5Fb82ncRNNkep9WGwv32qsPWXNvxZH?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
    images: [
      "https://www.googleapis.com/drive/v3/files/1cUfF_-T6ct1LrH_VGPJjq3GLS3whekU3?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1cSV6RjwR2ETkg69MrVpKb76BdVGvFgW8?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1cRrXIB6vD8tAV00M75DiJ6TL87iphw2F?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1cGIOHBmo2a4PKARHEC9mZHKNFtQgrNfl?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1cFFix4KnRP0YPXYie9rh7rTiCIEqVPPS?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
    ],
  },
  stage1: {
    back: "tutorial",
    screenname: "stage1",
    next: "stage2",
    title: "Stage 1",
    widecover:
      "https://www.googleapis.com/drive/v3/files/1c2OfWoypxJap1CtRpmEsdQN45PoMxjNY?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
    images: [
      "https://www.googleapis.com/drive/v3/files/1bv_tpHnPYdj4Y-8ihBx1-e_4_akj7Loa?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1boxEWf00Omfq4nJnviq7jt2MziDLlrU2?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1bmMxo8qIErNZqbxUMR_0YBixrhWWnJ42?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1bkS4PufHdQuURmx--u0Ye-BWJUXnpeGA?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1bkQYCpBTDQfEfx93oQtHrAmGq1LEgMdn?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
    ],
  },
  stage2: {
    back: "stage1",
    screenname: "stage2",
    next: "stage3",
    title: "Stage 2",
    widecover:
      "https://www.googleapis.com/drive/v3/files/1bfOGjcNZoRdCwoinUy3H3X1_bX_oBepK?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
    images: [
      "https://www.googleapis.com/drive/v3/files/1bdgd01kASKflyYvETrxHFOJ6M-dyMyFy?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1bZikR2nmzIXVdtIIW9dAScsXRuyplqNr?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1bVYezlM_XwUuwpFWhudplj7hQOO-7Mid?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1bFzVlNDr0Kkzof7NeRKtpAT_LH0ujJZy?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
      "https://www.googleapis.com/drive/v3/files/1b8L6ArrNlJ-8V_JMy4VQ9KEYkiqhbKVf?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
    ],
  },
  stage3: {
    back: "stage2",
    screenname: "stage3",
    next: "main",
    title: "Stage 3",
    widecover:
      "https://www.googleapis.com/drive/v3/files/1b2EhAA-WN4rEyBvgZC8ymHf_oCWmiEk8?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
    images: [
      "https://www.googleapis.com/drive/v3/files/1b1UuHCrMg8zXZP6oy0LqbhtOInvKphVn?alt=media&key=AIzaSyAP_hmqJXJQVV4tO-wBPpTclXMPP7Zxfpk",
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
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "calc(100% - var(--width))",
                }}
              ></div>
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
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "calc(100% - var(--width))",
                }}
              ></div>
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
              borderRadius: "24px",
              width: "calc(895/1440 * 100vw)",
              marginTop: "28px",
              height: "460px",
                marginBottom: "58px",
              overflow: "hidden",
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
          <div
            style={{
              height: "20px",
            }}
          ></div>
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
