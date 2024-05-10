import React from "react";

export function LoadableImage({ src, centercrop }) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div
      style={{
        ...(centercrop
          ? {
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }
          : {
              width: "100%",
              height: "100%",
            }),
        overflow: "hidden",
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={src}
        style={{
          display: loaded ? "block" : "none",
          ...(centercrop
            ? {
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }
            : {
                width: "100%",
                height: "100%",
              }),
          overflow: "hidden",
          zIndex: "0",
        }}
        onLoad={() => setLoaded(true)}
        loading="eager"
      />
      {!loaded && <div>Loading...</div>}
    </div>
  );
}
