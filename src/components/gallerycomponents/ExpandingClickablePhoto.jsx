/* eslint-disable react/prop-types */
export function ExpandingClickablePhoto({ data, setstate }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("${data.widecover}")`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          padding: "16px",
          paddingBottom: "52px",
          zIndex: "10",
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
          setstate({
            currentscreen: data.screenname
          })
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
