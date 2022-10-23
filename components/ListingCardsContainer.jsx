import React, { useContext } from "react";
import FilterContext from "../context/FilterContext";
import { listings } from "../helpers/data";
import ListingCard from "./ListingCard";

const ListingCardsContainer = () => {
  const { filterValue } = useContext(FilterContext);
  const filteredListings = listings?.filter((item) => item.category === filterValue);

  return (
    <div className="max-w-[90%] mx-auto mt-8 mb-20">
      <div className="grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center">
        {filteredListings.map((data) => (
          <ListingCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default ListingCardsContainer;
