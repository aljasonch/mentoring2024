/* eslint-disable react/prop-types */
export function ExpandingClickablePhoto({ data }) {
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
          console.log("clicked");
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
                      backgroundColor: "white",
            padding: "16px",
          }}
          className="opengallerytext"
        >
          Open Gallery
        </div>
      </div>
    </div>
  );
}
