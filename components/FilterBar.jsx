import { AdjustmentsIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FilterContext from "../context/FilterContext";
import { filters } from "../helpers/data";
import useMediaQuery from "../hooks/useMediaQuery";

const FilterBar = () => {
  const { filterValue, setFilterValue } = useContext(FilterContext);
  const [scroll, setScroll] = useState(false);
  const [scrollXOffset, setScrollXOffset] = useState();
  const [width, setWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const slider = useRef(null);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const prevBtn = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 300;
    setScrollXOffset(slider.current.scrollLeft - 300);
    setWidth(slider.current.offsetWidth + slider.current.scrollLeft);
  };
  const nextBtn = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 300;
    setScrollXOffset(slider.current.scrollLeft + 300);
    // console.log(slider.current.offsetWidth + slider.current.scrollLeft, slider.current.scrollWidth);
    setWidth(slider.current.offsetWidth + slider.current.scrollLeft);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setScroll(window.pageYOffset > 20));
    }
    setWidth(slider.current.offsetWidth + slider.current.scrollLeft);
    setScrollWidth(slider.current.scrollWidth);
  }, []);

  return (
    <div className={`sticky top-[68px] bg-white z-20 ${scroll || isMobile ? "shadow" : "shadow-none"}`}>
      <div className="w-full px-3 md:px-0 md:max-w-[90%] mx-auto">
        <div className="flex gap-4 items-center">
          <div className="overflow-hidden w-full relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              ref={slider}
              className="flex gap-8 md:gap-12 overflow-x-auto scroll-smooth hide-scrollbar pt-2 md:pr-12"
            >
              {filters.map(({ name, icon }, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-1 items-center min-w-fit w-full py-2 md:py-4 cursor-pointer border-b  hover:border-[#717171] hover:text-black active:scale-95 transition-all duration-300 ${
                    filterValue == name ? "text-black border-b-2 border-[#717171]" : "text-[#717171] border-white"
                  }`}
                  onClick={() => setFilterValue(name)}
                >
                  <div className="w-6 min-w-[24px] min-h-[24px]">
                    <img src={icon} alt={name} className="w-full" />
                  </div>
                  <p className="min-w-fit text-xs text-inherit">{name}</p>
                </div>
              ))}
            </motion.div>

            {/* slider controls */}

            {scrollXOffset > 0 && (
              <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-12 h-auto items-center justify-center bg-[#ffffffc1]">
                <div
                  className="w-6 h-6 flex justify-center items-center rounded-full bg-white shadow shadow-black text-black cursor-pointer select-none active:scale-90 transition-all duration-200"
                  onClick={prevBtn}
                >
                  <ChevronLeftIcon className="w-5" />
                </div>
              </div>
            )}

            {width <= scrollWidth && (
              <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-12 h-auto items-center justify-center bg-[#ffffffc1]">
                <div
                  className="w-6 h-6 flex justify-center items-center rounded-full bg-white shadow shadow-black text-black cursor-pointer select-none active:scale-90 transition-all duration-200"
                  onClick={nextBtn}
                >
                  <ChevronRightIcon className="w-5" />
                </div>
              </div>
            )}
          </div>

          <button className="hidden md:flex gap-2 items-center px-4 py-3 rounded-lg text-xs border border-[#e1e1e1] shadow-sm shadow-[#e1e1e1] h-fit">
            <AdjustmentsIcon className="w-4 rotate-90" /> Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
