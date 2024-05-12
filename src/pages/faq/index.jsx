import React from "react";
import BlackDots from "../../assets/BlackDots.png";
import Accordion, {
  AccordionItem,
} from "../../components/accordion/CustomAccordion";

function Faq() {
  return (
    <div className="background-mentoring py-40">
      <div className="fixed top-0 left-0 z-0">
        <img src={BlackDots} alt={BlackDots} className="w-72 h-auto" />
      </div>
      <div className="px-4 sm:px-0 max-w-4xl mx-auto">
        <h1 className="font-normal-spyagency font-normal italic text-white text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <h4 className="text-white font-medium text-lg sm:text-xl lg:text-2xl mt-1">
          CHARACTER BUILDING MENTORING UMN 2024
        </h4>
      </div>
      <div className="px-4 sm:px-0 py-10 space-y-6">
        <Accordion className="sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
          <AccordionItem value="1" trigger="HEADLINE">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            quaerat quasi natus repellat maiores, optio vitae expedita commodi
            id, sit atque, reprehenderit error numquam earum fuga! Voluptates ex
            architecto perferendis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque quaerat quasi natus repellat maiores, optio
            vitae expedita commodi id, sit atque, reprehenderit error numquam
            earum fuga! Voluptates ex architecto perferendis?
          </AccordionItem>
        </Accordion>
        <Accordion className="sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
          <AccordionItem value="1" trigger="HEADLINE">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            quaerat quasi natus repellat maiores, optio vitae expedita commodi
            id, sit atque, reprehenderit error numquam earum fuga! Voluptates ex
            architecto perferendis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque quaerat quasi natus repellat maiores, optio
            vitae expedita commodi id, sit atque, reprehenderit error numquam
            earum fuga! Voluptates ex architecto perferendis?
          </AccordionItem>
        </Accordion>
        <Accordion className="sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
          <AccordionItem value="1" trigger="HEADLINE">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            quaerat quasi natus repellat maiores, optio vitae expedita commodi
            id, sit atque, reprehenderit error numquam earum fuga! Voluptates ex
            architecto perferendis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque quaerat quasi natus repellat maiores, optio
            vitae expedita commodi id, sit atque, reprehenderit error numquam
            earum fuga! Voluptates ex architecto perferendis?
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
