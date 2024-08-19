import searchicon from "../../assets/searchicon.svg";
export default function SearchSubSection() {
  return (
    <>
      <div className="w-[90%] bg-white h-12 sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] rounded-[24px] flex flex-row items-center justify-start overflow-hidden">
        <div className="w-6"></div>
        <img src={searchicon} className="w-6 h-6" />
        <input
          type="text"
          placeholder="Search"
          className="w-full h-12 bg-transparent outline-none border-transparent"
        />
      </div>
      <div className="h-4"></div>
      <div className="text-white text-lg w-[90%] sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] flex flex-row justify-start items-center">
        Showing x out of y
      </div>
      <div className="h-4"></div>
      <div className="w-[90%] sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] bg-white">
        21313
      </div>
    </>
  );
}
