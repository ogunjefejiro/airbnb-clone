import { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState("Islands");

  return (
    <FilterContext.Provider
      value={{
        filterValue,
        setFilterValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
