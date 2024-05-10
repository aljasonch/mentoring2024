import React from "react";

export function LoadableImage({ src }) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
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
          width: "100%",
          height: "100%",
            overflow: "hidden",
          zIndex: "0",
        }}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && <div>Loading...</div>}
    </div>
  );
}
