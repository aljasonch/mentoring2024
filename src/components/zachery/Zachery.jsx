import { Link } from "react-router-dom";
import GreenLine from "../../assets/7.webp";
import Asset_6 from "../../assets/15.webp";
import Chat from "../../assets/bubblechat.webp";
import ChatMobile from "../../assets/bubblechatMobile.webp";
import ZacherySpeak from "../../assets/zacheryspeak.webp";

const Zachery = () => {
  return (
    <div className="relative h-screen top-36 sm:top-[300px] lg:top-36 xl:top-[170px]">
      <img
        src={GreenLine}
        className="absolute top-8 sm:hidden block w-6 left-0"
      />
      <img
        src={GreenLine}
        className="absolute top-8 sm:hidden block w-6 right-0 scale-x-[-1]"
      />
      <img
        src={ZacherySpeak}
        alt="Zachery Speak"
        className="absolute center-mobile xss:top-72 xs:top-80 sm:left-4 md:left-4 lg:left-8 sm:top-0 md:-top-4 lg:-top-8 sm:w-[40%] xss:w-[50%] shadow-object"
      />
      <div className="absolute sm:right-0 md:right-12 lg:right-24 xl:right-36 sm:w-[60%] md:w-[55%] lg:w-[50%] xl:w-[45%] w-full flex justify-center sm:justify-end">
        <div className="flex justify-center items-center">
          <img
            src={Chat}
            className="sm:block hidden lg:w-full md:w-[90%] sm:w-[85%] h-auto"
          />
          <img src={ChatMobile} className="block sm:hidden h-auto w-[65%] " />
          <div className="absolute inset-0 flex flex-col justify-center items-center xss:-top-8 xs:-top-10 sm:top-0 text-center sm:ml-8 md:ml-9 lg:ml-12 xl:ml-20 text-white xss:max-w-[50%] xss:mx-auto sm:max-w-[100%]">
            <h1 className="spyagencyRegular xss:text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl">
              Welcome To
            </h1>
            <h1 className="spyagencyGradient font-normal xss:text-2xl xs:text-3xl xs:leading-[20px] xss:leading-[18px] sm:text-2xl md:text-3xl lg:text-5xl lg:leading-[36px] xl:text-7xl xl:leading-[56px] md:leading-[24px] sm:leading-[20px] italic">
              Mentoring
              <br /> 2024
            </h1>
            <p className="xs:text-[11px] xss:text-[10px] xss:leading-[10px] xs:leading-[12px] sm:text-[10px] md:text-[10px] sm:leading-[12px] md:leading-[14px] lg:text-sm xl:text-lg sm:max-w-[75%] md:max-w-[60%] lg:max-w-[80%] xss:mt-6 sm:mt-2 md:mt-2 lg:mt-6 xl:mt-8">
              Selamat datang di website Mentoring UMN 2024! <br />
              Kenalin, Aku{" "}
              <span className="font-bold italic">Zachery&#x1F44B;</span>, dan
              aku akan menjadi pemandu kamu dalam menemukan kelompokmu.
              <p className="mt-6 sm:mt-5 md:mt-6 lg:mt-10 font-bold italic">
                Yuk, temukan kelompokmu sekarang dengan menekan tombol di bawah
                ini!
              </p>
            </p>
            <Link
              to="/groups"
              className="bg-white xss:w-24 xs:w-28 xss:h-7 xs:h-8 sm:w-32 sm:h-8 lg:w-48 lg:h-10 text-sm lg:text-lg rounded-3xl font-semibold shadow-lg text-[#2B2476] mt-4 flex items-center justify-center hover:text-white hover:bg-transparent hover:border-white hover:border-2"
            >
              Let&apos;s Go!
            </Link>
          </div>
        </div>
      </div>
      <img
        src={Asset_6}
        className="absolute hidden sm:block scale-x-[-1] z-10 w-72 sm:w-7/12 sm:-top-10 md:-top-14 lg:top-4 left-0 lg:w-1/2"
        alt="3"
      />
      <img
        src={Asset_6}
        className="absolute 2xl:hidden hidden sm:block z-10 w-72 sm:w-7/12 sm:-bottom-80 md:-bottom-[27rem] lg:-bottom-[30rem] xl:-bottom-[40rem] right-0 lg:w-1/2"
        alt="3"
      />
    </div>
  );
};

export default Zachery;