import { LoadableImage } from "./LoadableImage";

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
        className="tutorialtext absolute bottom-0 left-0 pointer-events-none p-4 pb-13"
      >
        {data.title}
      </div>
      <div

        className="absolute bottom-0 p-4 bg-purple-500 bg-opacity-50 left-0 w-full h-full transition-opacity duration-500 tutorialtext ease-in-out opacity-0 hover:opacity-100 cursor-pointer"
        onClick={() => {
          //console.log(data)
          setstate({
            currentscreen: data.screenname,
          });
        }}
      >
        <div
          style={{
            clipPath: "polygon(0 0, 83% 0, 100% 100%, 0% 100%)",
          }}
          className="opengallerytext pt-2 absolute bottom-0 left-0 pb-0"
        >
          <div

            className="w-full h-full bg-white p-4 pl-2.5 pt-2.5 pb-2 pr-12"
          >
            Open Gallery
          </div>
        </div>
      </div>
    </div>
  );
}
