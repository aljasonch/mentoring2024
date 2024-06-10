import { LoadableImage } from "./LoadableImage";

/* eslint-disable react/prop-types */
export function ExpandingClickablePhoto({ data, setstate, centercrop }) {
  return (
    <div
      className="w-full h-full relative"
    >
      <div
        className="overflow-hidden absolute left-0 right-0 ml-auto mr-auto top-0 bottom-0 mt-auto mb-auto flex justify-center items-center"
      >
        <LoadableImage src={data.widecover} centercrop={centercrop} />
      </div>
      <div
        style={{
          padding: "16px",
          paddingBottom: "52px",
        }}
        className="tutorialtext absolute bottom-0 left-0 pointer-events-none"
      >
        {data.title}
      </div>
      <div
        style={{
          padding: "16px",
          backgroundColor: "rgba(127, 17, 224, 0.5)",
        }}
        className="absolute bottom-0 left-0 w-full h-full transition-opacity duration-500 tutorialtext ease-in-out opacity-0 hover:opacity-100 cursor-pointer"
        onClick={() => {
          //console.log(data)
          setstate({
            currentscreen: data.screenname,
          });
        }}
      >
        <div
          style={{
            paddingTop: "8px",
            clipPath: "polygon(0 0, 83% 0, 100% 100%, 0% 100%)",
          }}
          className="opengallerytext absolute bottom-0 left-0 pb-0"
        >
          <div
            style={{
              padding: "16px",
              paddingLeft: "10px",
              paddingTop: "10px",
              paddingBottom: "8px",
              paddingRight: "48px",
            }}
            className="w-full h-full bg-white"
          >
            Open Gallery
          </div>
        </div>
      </div>
    </div>
  );
}
