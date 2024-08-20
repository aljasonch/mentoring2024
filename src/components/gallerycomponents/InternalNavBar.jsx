import React, { useCallback } from "react";

const InternalNavBar = React.memo(({ state, setstate, data }) => {
  const handleBackClick = useCallback(() => {
    if (data[state.currentscreen] && data[state.currentscreen].back) {
      setstate({
        currentscreen: data[state.currentscreen].back,
      });
    } else {
      console.error("Invalid state or data");
    }
  }, [state, data, setstate]);

  const handleNextClick = useCallback(() => {
    setstate({
      currentscreen: data[state.currentscreen]?.next,
    });
  }, [state, data, setstate]);

  return (
    <>
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={handleBackClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
          <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
        </svg>
        <div className="ml-2 text-white font-medium text-lg sm:text-xl lg:text-2xl hover:underline hidden md:block">
          BACK
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <h1 className="spyagencyBoldItal font-normal italic xs:text-xl xss:text-lg text-white text-center text-3xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-7xl">
          {data[state.currentscreen]?.title}
        </h1>
        <h4 className="text-white font-medium text-lg xss:text-sm xs:text-md xs:mx-10 xss:mx-4 sm:text-lg lg:text-xl mt-1">
          MENTORING UMN 2024
        </h4>
      </div>
      <div
        className="flex flex-row items-center cursor-pointer content-end justify-end"
        onClick={handleNextClick}
      >
        <div className="mr-2 text-white font-medium text-lg sm:text-xl lg:text-2xl hover:underline hidden md:block">
          NEXT
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
          <path d="M6.51 20.1L8.29 21.87 18.16 12l-9.88-9.9-1.77 1.77L14.63 12 6.51 20.1z" />
        </svg>
      </div>
    </>
  );
});

export default InternalNavBar;
