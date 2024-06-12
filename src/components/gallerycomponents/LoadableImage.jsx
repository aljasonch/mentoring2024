import React from "react";
import LazyLoad from "react-lazyload";
import skeletonimage from "../../assets/SkeletonLoaderBkg.png";

export function LoadableImage({ src, centercrop }) {
  const [loaded, setLoaded] = React.useState(false);
  const [cachedUrl, setCachedUrl] = React.useState(null);

  React.useEffect(() => {
    if (cachedUrl !== src) {
      setLoaded(false);
      setCachedUrl(src);
    }
  }, [src, cachedUrl]);

  return (
    <div className={`flex justify-center items-center overflow-hidden ${centercrop ? 'object-cover' : ''} w-full h-full`}>
      <LazyLoad offset={100} once>
        <img
          src={src}
          className={`w-full h-full object-cover ${loaded ? 'block' : 'hidden'} z-0`}
          onLoad={() => setLoaded(true)}
        />
      </LazyLoad>
      {!loaded && (
        <img
          src={skeletonimage}
          className={`animate-pulse ${centercrop ? 'object-cover' : ''} w-1/2 aspect-w-1 aspect-h-1 overflow-hidden`}
        />
      )}
    </div>
  );
}
