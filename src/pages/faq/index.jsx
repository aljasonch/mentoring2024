import React from "react";
import BlackDots from "../../assets/Blackdots_4.webp";
import Accordion, {
  AccordionItem,
} from "../../components/accordion/CustomAccordion";
import data from "./data.js";

function Faq() {
  return (
    <div className="home pb-40 bg-fixed">
      <div className="fixed top-0 left-0 z-0 ">
        <img src={BlackDots} alt={BlackDots} className="w-72 xss:w-64 h-auto" />
      </div>
      <div className="px-4 sm:px-0 max-w-4xl relative z-10 mx-auto xss:pt-32 xs:pt-40 md:pt-52 md:pb-15 ">
        <h1 className="spyagencyRegular font-normal italic text-white text-center text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <h4 className="text-white font-medium text-lg sm:text-xl lg:text-2xl mt-1">
          MENTORING UMN 2024
        </h4>
      </div>
      <div className="px-6 py-10 space-y-6">
        {data.map((item, index) => {
          return (
            <Accordion className="sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
              <AccordionItem key={index} value="1" trigger={item.header}>
                {item.content}
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
