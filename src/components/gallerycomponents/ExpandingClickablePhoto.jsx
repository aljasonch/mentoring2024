import React, { useCallback, useState } from "react";
import { LoadableImage } from "./LoadableImage";

export function ExpandingClickablePhoto({ data, setstate, centercrop }) {
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => {
    setstate({
      currentscreen: data.screenname,
    });
  }, [data, setstate]);

  return (
    <div className="w-full h-full relative" onClick={() => setOpen(true)}>
      <div className="overflow-hidden absolute left-0 right-0 ml-auto mr-auto top-0 bottom-0 mt-auto mb-auto flex justify-center items-center">
        <LoadableImage src={data.widecover} centercrop={centercrop} />
      </div>
      <div className="spyagencyRegular text-white xl:text-2xl z-10 lg:text-xl md:text-lg absolute bottom-0 left-0 pointer-events-none p-4 md:pb-16 xss:pb-14">
        {data.title}
      </div>
      <div
        className="absolute bottom-0 p-4 z-0 bg-opacity-50 left-0 w-full h-full transition-opacity duration-500 ease-in-out xl:opacity-0 xl:hover:opacity-100 xss:opacity-100 bg-[#2C1FBB] xss:bg-opacity-50 cursor-pointer"
        onClick={handleClick}
      >
        <div className="spyagencyGradient polygon absolute bottom-0">
          <div className="bg-white xss:py-1 py-2 xss:text-md md:text-lg lg:text-xl xl:text-2xl xss:px-6 xss:pr-2 md:pl-4 md:pr-8 xl:pr-10">
            Open Gallery
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ExpandingClickablePhoto);
