import { AdjustmentsIcon } from "@heroicons/react/solid";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import FilterContext from "../context/FilterContext";
import { filters } from "../helpers/data";

const FilterBar = () => {
  const { filterValue, setFilterValue } = useContext(FilterContext);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setScroll(window.pageYOffset > 20));
    }
  }, []);

  return (
    <div className={`sticky top-[68px] bg-white z-20 ${scroll ? "shadow" : ""}`}>
      <div className="max-w-[90%] lg:max-w-[90%] mx-auto">
        <div className="flex gap-6 items-center">
          <div className="overflow-hidden w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex gap-12 overflow-x-auto hide-scrollbar pt-2"
            >
              {filters.map(({ name, icon }, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-1 items-center min-w-fit w-full py-4 cursor-pointer border-b  hover:border-[#717171] hover:text-black transition-colors duration-300 ${
                    filterValue == name ? "text-black border-b-2 border-[#717171]" : "text-[#717171] border-white"
                  }`}
                  onClick={() => setFilterValue(name)}
                >
                  <div className="w-6 min-w-[24px] min-h-[24px]">
                    <img src={icon} alt={name} className="w-full" />
                  </div>
                  <p className="min-w-fit text-sm text-inherit">{name}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <button className="flex gap-2 items-center px-4 py-3 rounded-lg text-sm border border-[#e1e1e1] shadow-sm shadow-[#e1e1e1] h-fit">
            <AdjustmentsIcon className="w-4 rotate-90" /> Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
