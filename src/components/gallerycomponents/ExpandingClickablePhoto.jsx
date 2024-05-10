import { LoadableImage } from "./LoadableImage";

/* eslint-disable react/prop-types */
export function ExpandingClickablePhoto({ data, setstate }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          position: "absolute",
          left: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
          top: "0",
          bottom: "0",
          marginTop: "auto",
          marginBottom: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ><LoadableImage src={data.widecover}/></div>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          padding: "16px",
          paddingBottom: "52px",
          pointerEvents: "none",
        }}
        className="tutorialtext"
      >
        {data.title}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          padding: "16px",
          backgroundColor: "#5D52DD",
          width: "100%",
          height: "100%",
        }}
        className="transition-opacity duration-500 tutorialtext ease-in-out opacity-0 hover:opacity-100"
        onClick={() => {
          //console.log(data)
          setstate({
            currentscreen: data.screenname,
          });
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            paddingTop: "8px",
            paddingBottom: "0px",
            clipPath: "polygon(0 0, 83% 0, 100% 100%, 0% 100%)",
          }}
          className="opengallerytext"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",

              padding: "16px",
              paddingLeft: "10px",
              paddingTop: "10px",
              paddingBottom: "8px",
              paddingRight: "48px",
            }}
          >
            Open Gallery
          </div>
        </div>
      </div>
    </div>
  );
}
