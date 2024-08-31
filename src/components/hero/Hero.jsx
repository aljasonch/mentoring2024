import Petir_1 from "../../assets/1.webp";
import Petir_2 from "../../assets/2.webp";
import Transition1 from "../../assets/3.webp";
import Logo from "../../assets/Logo.webp";
import Mentoring from "../../assets/Mentoring.jpg";

const Hero = () => {
  return (
    <div className="relative background-transition mt-20">
      <img src={Transition1} className="relative z-20" alt="Transition 1" />
      <img
        src={Petir_1}
        className="absolute xl:w-1/6 w-1/4 xss:top-10 xl:top-40 sm:top-20 lg:top-24 left-0 z-10"
        alt="Petir 1"
      />
      <img
        src={Petir_2}
        className="absolute xl:w-1/4 w-1/6 xss:top-10 xl:top-72 sm:top-20 lg:top-24 right-0 z-10"
        alt="Petir 2"
      />
      <div className="relative py-20 lg:py-36 home">
        <div className="text-white my-10 mx-auto">
          <img src={Logo} className="w-[81px] mx-auto" alt="Logo Mentoring" />
          <p className="spyagencyCond text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            APA iTU
          </p>
          <p className="spyagencyBoldItal text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Mentoring?
          </p>
          <div className="mx-auto my-12 md:my-16 w-72 md:w-[500px] lg:w-[600px] xl:w-[700px] shadow-2xl">
            <img
              src={Mentoring}
              className=" border-8 rounded-3xl md:rounded-3xl lg:rounded-[36px]"
              alt="Mentoring"
            />
          </div>
          <p className="xss:text-sm xs:text-base sm:text-base lg:text-lg xl:text-xl font-medium px-14 md:px-24 xl:px-72 mx-auto">
            Mentoring UMN adalah kegiatan tahunan yang wajib diikuti oleh Mentee
            dengan tujuan menyeluruh, memperkenalkan secara mendalam nilai-nilai
            5C UMN. Mentoring UMN juga memiliki maskot bernama ZACHERY!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
