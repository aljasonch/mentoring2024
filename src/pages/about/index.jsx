import React from "react";
import "./style.css";
import LightningLeft from "../../assets/Lightning_Left.webp";
import LightningRight from "../../assets/Lightning_Right.webp";
import theme from "../../assets/theme.webp";
import themeMobile from "../../assets/theme_mobile.webp";
import tagline from "../../assets/tagline.webp";
import taglineMobile from "../../assets/tagline_mobile.webp";
import zachery from "../../assets/zachery.webp";
import ZacheryMobile from "../../assets/ZacheryMobile.webp";
import Asset_1 from "../../assets/10.webp";
import Asset_2 from "../../assets/11.webp";
import Asset_3 from "../../assets/12.webp";
import Asset_4 from "../../assets/13.webp";
import Asset_5 from "../../assets/14.webp";
import Asset_6 from "../../assets/15.webp";
import Asset_7 from "../../assets/16.webp";
import Asset_8 from "../../assets/17.webp";
import Asset_9 from "../../assets/18.webp";
import Asset_10 from "../../assets/19.webp";
import spirit from "../../assets/spirit.webp";
import spiritMobile from "../../assets/spiritMobile.webp";
import bintang from "../../assets/bintang.webp";
import bintangMobile from "../../assets/bintangMobile.webp";
import pintu from "../../assets/pintu.webp";
import pintuMobile from "../../assets/pintuMobile.webp";

function About() {
  return (
    <>
      <div className="home">
        <div className="relative">
          <img
            src={LightningLeft}
            className="absolute top-0 left-0 w-24 h-auto xss:w-12 xss:top-28 md:w-24 md:top-44"
            alt="Lightning Left"
          />
          <img
            src={LightningRight}
            className="absolute top-0 right-0 w-44 h-auto z-10 xss:w-16 xss:top-12 md:w-28 md:top-16"
            alt="Lightning Right"
          />
          <div className="text-white xss:pt-32 xs:pt-40 md:pt-52 lg:pt-44 md:pb-15 text-3xl sm:text-5xl md:text-6xl lg:text-7xl spyagencyBoldItal">
            ABOUT US
          </div>
          <h4 className="text-white font-medium text-lg sm:text-xl lg:text-2xl mt-1">
            MENTORING UMN 2024
          </h4>
        </div>
        <div className="w-9/12 md:w-[36.25rem] lg:hidden relative z-10 mx-auto mt-16">
          <div className="relative">
            <img
              src={themeMobile}
              className="border-4 sm:border-8 border-white rounded-3xl"
              alt="Theme"
            />
          </div>
          <div className="spyagencyHalftone  z-0 polygonTheme absolute bottom-0">
            <div className="bg-white xss:py-1 py-2 sm:py-2 text-[#832AD0] text-xl sm:text-4xl sm:pl-24 sm:pr-12 pl-16 pr-6 rounded-br-2xl">
              THEME
            </div>
          </div>
        </div>
        <div className="lg:justify-center lg:flex lg:mt-16">
          <div className="mx-auto w-9/12 xl:ml-36 lg:ml-24 lg:w-[400px] xl:w-[600px]">
            <div className="spyagencyBoldItal xss:text-xl lg:text-4xl xl:text-6xl xs:text-2xl sm:text-4xl text-start text-white mt-8">
              REVEAL YOUR CAPABiLiTY WiTHiN A PURPOSEFUL QUEST
            </div>
            <p className=" text-justify text-white xss:text-xs xs:text-sm lg:text-sm xl:text-lg sm:text-lg mt-6 ">
              Mahasiswa yang baru masuk ke dunia perkuliahan pasti merasakan
              beberapa perbedaan aspek dalam kehidupan barunya pada masa
              perkuliahan. Melalui Mentoring UMN 2024 kata{" "}
              <span className="font-bold italic">"Reveal Your Capability"</span>{" "}
              mencakup bagaimana mentee dapat mengungkapkan kapabilitas mereka
              pada dunia perkuliahan.{" "}
              <span className="font-bold italic">“Purposeful Quest”</span>{" "}
              mengajak mentee untuk menjelajahi hidup dengan tujuan yang
              bermakna. Seperti berpetualang mencari arti dan tujuan hidup yang
              memberikan makna dalam setiap pertemuan yang mereka alami.
            </p>
          </div>
          <img
            src={theme}
            className="hidden lg:block lg:w-[480px] xl:w-[600px] object-contain lg:mr-12"
          ></img>
        </div>
        <div className="mt-12">
          <div className=" relative">
            <img
              src={Asset_1}
              className="w-7/12 z-20 relative lg:w-1/3"
              alt="1"
            />
            <img
              src={Asset_2}
              className="absolute z-10 w-9/12 top-12 sm:top-24 left-0 lg:w-3/5"
              alt="2"
            />
            <img
              src={Asset_3}
              className="absolute z-20 w-6/12 top-8 sm:top-16 right-0 lg:w-2/5"
              alt="3"
            />
          </div>
        </div>
      </div>
      <div className="home py-6">
        <div className="w-9/12 md:w-[36.25rem] lg:hidden relative z-10 mx-auto mt-16">
          <div className="relative">
            <img
              src={taglineMobile}
              className="border-4 sm:border-8 border-white rounded-3xl"
              alt="Theme"
            />
            {/* <div className=" border-4 sm:border-8 rounded-3xl absolute inset-0 bg-[#5D52DD] opacity-50 "></div> */}
          </div>
          <div className="spyagencyHalftone  z-0 polygonTheme absolute bottom-0">
            <div className="bg-white xss:py-1 py-2 sm:py-2 text-[#832AD0] text-xl sm:text-4xl sm:pl-24 sm:pr-12 pl-12 pr-4 rounded-br-2xl">
              TAGLINE
            </div>
          </div>
        </div>
        <div className="w-9/12 mx-auto lg:w-full lg:flex lg:justify-between">
          <img
            src={tagline}
            className="hidden lg:block lg:w-[480px] xl:w-[600px] object-contain lg:ml-12 xl:ml-24 bg-transparent"
          ></img>
          <div className="mx-auto lg:mr-24 lg:w-[400px] xl:w-[600px]">
            <div className="spyagencyBoldItal xss:text-xl xs:text-2xl lg:text-4xl xl:text-6xl sm:text-4xl text-end text-white mt-8">
              <p>REVEAL,</p>
            </div>
            <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mb-2 lg:text-sm xl:text-lg">
              Mentee dan panitia Mentoring UMN 2024 diharapkan dapat
              mengungkapkan kapabilitas dalam diri mereka selama di dunia
              perkuliahan melalui proses Character Building Mentoring UMN 2024.
            </p>
            <div className="spyagencyBoldItal xss:text-xl lg:text-4xl xl:text-6xl xs:text-2xl sm:text-4xl text-end text-white">
              <p>REFiNE,</p>
            </div>
            <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mb-2 lg:text-sm xl:text-lg">
              Mentee dan panitia Mentoring UMN 2024 dapat melakukan pembentukan
              diri dengan mengembangkan kapabilitas dalam diri mereka selama
              perkuliahan melalui Mentoring UMN 2024.
            </p>
            <div className="spyagencyBoldItal xss:text-xl lg:text-4xl xl:text-6xl xs:text-2xl sm:text-4xl text-end text-white">
              <p>RADiATE</p>
            </div>
            <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mb-2 lg:text-sm xl:text-lg">
              Mentee dan panitia Mentoring UMN 2024 dapat memancarkan
              kapabilitas mereka menjadi lebih bersinar dengan mengandalkan
              kemampuan yang mereka miliki agar dapat berdampak bagi orang
              sekitar.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="relative">
          <img
            src={Asset_4}
            className="w-7/12 z-20 relative lg:w-2/5"
            alt="1"
          />
          <img
            src={Asset_5}
            className="absolute z-10 w-8 top-12 sm:top-24 -left-4 lg:w-12 lg:top-28"
            alt="2"
          />
          <img
            src={Asset_6}
            className="absolute z-10 w-72 sm:w-7/12 top-6 sm:top-10 right-0 lg:w-1/2"
            alt="3"
          />
          <img
            src={Asset_7}
            className="absolute z-10 w-36 -top-16 sm:w-48 sm:-top-16 right-0 lg:w-1/5 lg:-top-40 "
            alt="3"
          />
        </div>
        <div className="background-mentoring">
          <div className="spyagencyBoldItal xss:text-xl xs:text-2xl sm:text-4xl lg:text-4xl xl:text-6xl text-center text-white mt-8">
            <h1>
              THE MEANING <br />
              BEHIND OUR LOGO
            </h1>
          </div>
          <div className=" py-6 lg:flex lg:justify-between">
            <div className="w-9/12 md:w-[36.25rem] lg:hidden relative z-10 mx-auto mt-16">
              <div className="relative">
                <img
                  src={bintangMobile}
                  className="border-4 relative z-10 sm:border-8  border-white rounded-3xl"
                  alt="Theme"
                />
                <div className=" border-4 sm:border-8 rounded-3xl z-0 absolute inset-0 bg-[#283673] opacity-100 "></div>
              </div>
              <div className="spyagencyHalftone  z-0 polygonTheme absolute bottom-0">
                <div className="bg-white xss:py-1 py-2 sm:py-2 text-[#832AD0] text-xl sm:text-4xl sm:pl-24 sm:pr-12 pl-12 pr-4 rounded-br-2xl">
                  LOGO
                </div>
              </div>
            </div>
            <div className="mx-auto w-9/12 xl:ml-36 lg:ml-24 lg:w-[400px] xl:w-[600px] lg:my-auto ">
              <div className="spyagencyBoldItal xss:text-xl lg:text-4xl xl:text-6xl xs:text-2xl sm:text-4xl text-start text-white mt-8">
                BINTANG
              </div>
              <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mt-6 lg:text-sm xl:text-lg ">
                Bintang yang terbang keluar dari pintu menggambarkan mentee
                dengan sayap para mentor di kiri dan kanannya. Mentor membantu
                para mentee dalam mengungkapkan hingga menunjukkan
                kapabilitasnya kepada dunia melalui kegiatan Mentoring UMN 2024.
              </p>
            </div>
            <img
              src={bintang}
              className="hidden lg:block lg:w-[480px] xl:w-[600px] object-contain lg:mr-12"
            ></img>
          </div>
          <div className=" py-6 lg:flex lg:justify-between">
            <div className="w-9/12 md:w-[36.25rem] lg:hidden relative z-10 mx-auto mt-16">
              <div className="relative">
                <img
                  src={pintuMobile}
                  className="border-4 relative z-10 sm:border-8  border-white rounded-3xl"
                  alt="Theme"
                />
                <div className=" border-4 sm:border-8 rounded-3xl z-0 absolute inset-0 bg-[#283673] opacity-100 "></div>
              </div>
              <div className="spyagencyHalftone  z-0 polygonTheme absolute bottom-0">
                <div className="bg-white xss:py-1 py-2 sm:py-2 text-[#832AD0] text-xl sm:text-4xl sm:pl-24 sm:pr-12 pl-12 pr-4 rounded-br-2xl">
                  LOGO
                </div>
              </div>
            </div>
            <img
              src={pintu}
              className="hidden lg:block lg:w-[480px] xl:w-[600px] object-contain lg:ml-12 xl:ml-24"
            ></img>
            <div className="mx-auto w-9/12 lg:mr-24 lg:w-[400px] xl:w-[600px] lg:my-auto">
              <div className="spyagencyBoldItal xss:text-xl lg:text-4xl xl:text-6xl xs:text-2xl sm:text-4xl text-end text-white mt-8">
                PINTU
              </div>
              <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mt-6 lg:text-sm xl:text-lg ">
                Pintu sebagai jalan bintang keluar melambangkan masa depan
                mentee yang telah berhasil mengembangkan kapabilitasnya melalui
                Mentoring UMN 2024.
              </p>
            </div>
          </div>
          <div className=" py-6 lg:flex lg:justify-between">
            <div className="w-9/12 md:w-[36.25rem] lg:hidden relative z-10 mx-auto mt-16">
              <div className="relative">
                <img
                  src={spiritMobile}
                  className="border-4 relative z-10 sm:border-8  border-white rounded-3xl"
                  alt="Theme"
                />
                <div className=" border-4 sm:border-8 rounded-3xl z-0 absolute inset-0 bg-[#283673] opacity-100 "></div>
              </div>
              <div className="spyagencyHalftone  z-0 polygonTheme absolute bottom-0">
                <div className="bg-white xss:py-1 py-2 sm:py-2 text-[#832AD0] text-xl sm:text-4xl sm:pl-24 sm:pr-12 pl-12 pr-4 rounded-br-2xl">
                  LOGO
                </div>
              </div>
            </div>
            <div className="mx-auto w-9/12 xl:ml-36 lg:ml-24 lg:w-[400px] xl:w-[600px] lg:my-auto ">
              <div className="spyagencyBoldItal xss:text-xl lg:text-4xl xl:text-6xl xs:text-2xl sm:text-4xl text-start text-white mt-8">
                SPIRIT
              </div>
              <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mt-6 lg:text-sm xl:text-lg ">
                Kelima spirit yang melingkari minerva menggambarkan bentuk
                semangat yang berapi-api yang dihasilkan mentee dalam menerapkan
                5C di perjalanannya membentuk dan memancarkan kapabilitas selama
                perkuliahan melalui Mentoring UMN 2024.
              </p>
            </div>
            <img
              src={spirit}
              className="hidden lg:block lg:w-[480px] xl:w-[600px] object-contain lg:mr-12"
            ></img>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="relative">
          <img
            src={Asset_8}
            className="w-7/12 z-20 relative lg:bottom-4"
            alt="1"
          />
          <img
            src={Asset_9}
            className="absolute z-20 w-7/12 top-12 sm:top-24 left-0 lg:w-2/5"
            alt="2"
          />
          <img
            src={Asset_10}
            className="absolute z-20 w-56 sm:-top-10 sm:w-7/12 -top-6 right-0 lg:w-2/5"
            alt="3"
          />
        </div>
        <div className="home py-6">
          <div className="lg:w-full lg:flex lg:justify-between">
            <img
              src={zachery}
              className="hidden lg:block lg:w-[480px] xl:w-[600px] object-contain lg:ml-12 xl:ml-24"
            ></img>
            <div className="w-9/12 md:w-[36.25rem] lg:hidden relative z-10 mx-auto mt-16">
              <div className="relative">
                <img
                  src={ZacheryMobile}
                  className="border-4 relative z-10 sm:border-8 border-white rounded-3xl"
                  alt="Theme"
                />
                <div className=" border-4 sm:border-8 rounded-3xl z-0 absolute inset-0 bg-[#38467E] opacity-100 "></div>
              </div>
              <div className="spyagencyHalftone  z-0 polygonTheme absolute bottom-0">
                <div className="bg-white xss:py-1 py-2 sm:py-2 text-[#832AD0] text-xl sm:text-4xl sm:pl-24 sm:pr-12 pl-12 pr-4 rounded-br-2xl">
                  ZACHERY
                </div>
              </div>
            </div>
            <div className="mx-auto w-9/12 lg:mr-24 lg:w-[400px] xl:w-[600px] lg:my-auto">
              <div className="spyagencyBoldItal xss:text-xl xs:text-2xl sm:text-4xl lg:text-4xl xl:text-6xl text-end text-white mt-8">
                <p>MEET ZACHERY</p>
              </div>
              <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mt-6 lg:text-sm xl:text-lg">
                <span className="font-bold italic">
                  ZACHERY (Burung Hantu) : Zachery (Latin)
                </span>{" "}
                merupakan bentuk perwujudan dari logo Mentoring UMN 2021 yang
                menggambarkan sifat{" "}
                <span className="font-bold italic">
                  kejujuran, kecerdasan, dan keyakinan yang tinggi.{" "}
                </span>
                Zachery akan menemani mentee mengarungi perjalanan panjang yang
                tak terlupakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
