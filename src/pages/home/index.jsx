import "./style.css";
import Transition1 from "../../assets/Transition_1.png";
import Transition2 from "../../assets/Transition_2.png";
import Bintik_3 from "../../assets/Bintik_3.png";
import Purple_Line from "../../assets/Purple_Line.png";
import Pink_Line from "../../assets/Pink_Line.png";
import Green_Line from "../../assets/Green_Line.png";
import Logo from "../../assets/Logo.png";
import Foto_1 from "../../assets/Foto_1.png";
import Logo_5C from "../../assets/Logo_5C.png";
import Logo_Caring from "../../assets/Logo_Caring.png";
import Logo_Credible from "../../assets/Logo_Credible.png";
import Logo_Competent from "../../assets/Logo_Competent.png";
import Logo_Competitive from "../../assets/Logo_Competitive.png";
import Logo_Customer_Delight from "../../assets/Logo_Customer_Delight.png";
import { Carousel } from "../../components/carousel/Carousel";
import { slides } from "../../components/carousel/carouselData.json";

function Home() {
  const logos = [
    Logo_Caring,
    Logo_Credible,
    Logo_Competent,
    Logo_Competitive,
    Logo_Customer_Delight,
  ];

  return (
    <div className="background-mentoring py-32 md:py-40">
      <div className="pb-20 md:pb-28">
        <div className="relative">
          <img src={Transition1} className="w-full absolute top-0" />
        </div>
        <div className="text-white my-10 mx-auto pt-44 md:pt-[300px] lg:pt-80 xl:pt-[530px]">
          <img src={Logo} className="w-[81px] mx-auto" alt="Logo Mentoring" />
          <p className="font-spyagencycond text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            APA iTU
          </p>
          <p className="font-spyagencybolditalic text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Mentoring?
          </p>
          <div
            className="mx-auto my-12 md:my-16 w-72 md:w-[500px] lg:w-[600px] xl:w-[800px] border-8 rounded-3xl md:rounded-[30px] lg:rounded-[40px] inline-block"
            style={{ boxShadow: "0px 4px 60px 0px #F5FDFF4D" }}
          >
            <img
              src={Foto_1}
              className="mx-auto rounded-2xl md:rounded-3xl lg:rounded-[36px]"
            />
          </div>
          <p className="text-xs sm:text-base lg:text-lg xl:text-xl font-medium px-14 md:px-24 xl:px-72 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="pb-6 xl:pb-24">
        <div className="relative">
          <img src={Transition2} className="w-full top-10 absolute z-10" />
          <img src={Purple_Line} className="right-0 top-0 absolute" />
          <img src={Bintik_3} className="mt-24 w-2/6 absolute" />
          <img src={Pink_Line} className="right-0 top-0 pt-60 w-6 md:w-8 xl:w-10 absolute" />
        </div>
        <div className="pt-40 md:pt-48 lg:pt-64 xl:pt-[400px]">
            <img
                src={Logo_5C}
                className="w-[76px] h-[81px] mx-auto"
                alt="Logo 5C"
            />
            <div className="text-white my-10">
                <p className="font-spyagencycond text-2xl md:text-4xl lg:text-5xl text-center">
                NILAI-NILAI
                </p>
                <p className="font-spyagencybolditalic text-5xl lg:text-9xl text-center">
                5C
                </p>
                <p className="text-xs sm:text-base lg:text-lg xl:text-xl font-medium px-12 md:px-40 xl:px-72 mx-auto mt-10 md:my-12 mb-24 lg:mb-16 xl:mb-20">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                </p>
            </div>
            <div className="md:pb-16">
                <img src={Green_Line} className="absolute w-6 md:w-8 xl:w-10" />
            </div>
            <Carousel data={slides} logos={logos} />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
