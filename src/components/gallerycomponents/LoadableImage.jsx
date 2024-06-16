import React, { useState, useEffect, useCallback } from "react";
import LazyLoad from "react-lazyload";
import skeletonimage from "../../assets/SkeletonLoaderBkg.png";

export function LoadableImage({ src, centercrop }) {
  const [loaded, setLoaded] = useState(false);
  const [cachedUrl, setCachedUrl] = useState(null);

  useEffect(() => {
    if (cachedUrl !== src) {
      setLoaded(false);
      setCachedUrl(src);
    }
  }, [src, cachedUrl]);

  const handleImageLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`flex justify-center items-center overflow-hidden ${centercrop ? 'object-cover' : ''} w-full h-full`}>
      <LazyLoad offset={200} once>
        <img
          src={src}
          className={`w-full h-full object-cover ${loaded ? 'block' : 'hidden'} z-0`}
          onLoad={handleImageLoad}
          alt=""
        />
      </LazyLoad>
      {!loaded && (
        <img
          src={skeletonimage}
          className={`animate-pulse ${centercrop ? 'object-cover' : ''} w-7/12 overflow-hidden`}
          alt="Loading"
        />
      )}
    </div>
  );
}

export default React.memo(LoadableImage);
