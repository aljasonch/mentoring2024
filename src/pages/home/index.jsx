import React, { useState, useEffect } from "react";
import "./style.css";
import Logo_Caring from "../../assets/CARING.webp";
import Logo_Credible from "../../assets/CREDIBLE.webp";
import Logo_Competent from "../../assets/COMPETENT.webp";
import Logo_Competitive from "../../assets/COMPETITIVE.webp";
import Logo_Customer_Delight from "../../assets/CUSTOMER.webp";
import { Carousel } from "../../components/carousel/Carousel";
import { slidesCarousel } from "../../components/carousel/carouselData.json";
import Timeline from "../../components/timeline/Timeline";
import Hero from "../../components/hero/Hero";
import Countdown from "../../components/countdown/Countdown";
import Zachery from "../../components/zachery/Zachery";
import CountdownSection from "../../components/countdownSection/CountdownSection";

export default function Home() {
  const logos = [
    Logo_Caring,
    Logo_Credible,
    Logo_Competent,
    Logo_Competitive,
    Logo_Customer_Delight,
  ];

  

  return (
    <>
      <div className="home">
        <Zachery />
        <CountdownSection />
      </div>
      <Timeline />
      <Hero />
      <Carousel data={slidesCarousel} logos={logos} />
    </>
  );
}
