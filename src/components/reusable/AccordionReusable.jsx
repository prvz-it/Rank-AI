import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const AccordionReusable = ({ id, title, text }) => {
  const [view, setView] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(view ? contentRef.current.scrollHeight : 0);
    }
  }, [view]);

  return (
    <div className="py-3 sm:px-3 md:py-5 border-b border-[#cccccc]">
      <button
        onClick={() => setView(!view)}
        className="flex items-center justify-between w-full overflow-hidden"
      >
        <div>
          <span className="font-Questrial font-normal text-base sm:text-2xl lg:text-3xl leading-6 tracking-[-1%] text-[#8B7D4C]">
            {id}
          </span>
          <span className="ml-1 sm:ml-4 font-Questrial font-normal text-base sm:text-2xl lg:text-3xl leading-6 lg:leading-8 tracking-[-1%]">
            {title}
          </span>
        </div>
        <div className="cursor-pointer">
          {view ? <FaPlus /> : <FaMinus />}
        </div>
      </button>
      <div
        ref={contentRef}
        style={{ height: `${contentHeight}px` }}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          view ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mt-1 sm:mt-2 w-xs sm:w-xl md:w-2xl lg:w-4xl xl:w-6xl ml-6 sm:ml-10 lg:ml-12 font-Poppins font-normal text-sm md:text-base xl:text-lg leading-5.5 lg:leading-6 xl:leading-7 tracking-[-2%] text-[#636363]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default AccordionReusable;
