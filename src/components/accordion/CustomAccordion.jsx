import { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";
import "./CustomAccordion.css";

const AccordionContext = createContext();

export default function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export const AccordionItem = ({
  children,
  value,
  onChange,
  trigger,
  ...props
}) => {
  const { selected, setSelected } = useContext(AccordionContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li className="background-custom-accordion rounded-lg xss:min-h-24 grid items-center" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center py-5 px-6 uppercase text-start text-white font-bold sm:text-base md:text-lg lg:text-xl xss:text-sm "
      >
        {trigger}
        <div className="bg-[#18E6B1] text-black rounded-full flex items-center justify-center min-w-8 min-h-8 md:w-10 md:h-10 ml-2">
          <ChevronDown
            width={28}
            className={`transition-transform ${open ? "rotate-180" : ""} w-5 md:w-10 m-0 p-0`}
          />
        </div>
      </header>
      {open ? <div className="mx-6 border-t border-white"></div> : null}
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div
          className="px-6 py-5 text-white xss:text-xs font-medium text-justify sm:text-sm md:text-base lg:text-lg"
          ref={ref}
        >
          {children}
        </div>
      </div>
    </li>
  );
};
