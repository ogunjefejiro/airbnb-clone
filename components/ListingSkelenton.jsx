import React from "react";
import Skeleton from "react-loading-skeleton";

const ListingSkelenton = () => {
  return (
    <div className="absolute w-full">
      <div className="">
        <Skeleton height={275} borderRadius={12} />
      </div>
      <div className="flex justify-between w-full mt-2">
        <Skeleton height={20} width={125} />
        <Skeleton height={20} width={50} />
      </div>
      <Skeleton height={20} width={175} />
      <Skeleton height={20} width={125} />
      <Skeleton height={20} width={75} />
      <Skeleton height={20} width={100} />
    </div>
  );
};

export default ListingSkelenton;
