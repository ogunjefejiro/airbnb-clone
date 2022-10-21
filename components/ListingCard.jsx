import React, { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import { formatMoney } from "../helpers/utils";
import ListingSkelenton from "./ListingSkelenton";

const ListingCard = ({ data: { images, name, location, hostName, availableDate, price, rating, id } }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);

  const imagesLoaded = () => {
    counter.current += 1;
    if (counter.current >= images.length) {
      setLoading(false);
    }
  };
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative">
      {loading && <ListingSkelenton />}

      <div className={`${loading ? "invisible" : "visible"}`}>
        <AnimatePresence key={id} mode="wait" initial={true}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="cursor-pointer"
          >
            {/* image */}
            <div className="w-full h-[200px] md:h-[275px] relative overflow-hidden flex rounded-xl">
              {images.map((img, i) => (
                <img
                  loading="lazy"
                  onLoad={imagesLoaded}
                  key={i}
                  src={img}
                  alt={img}
                  className="object-cover min-w-full w-full h-full transition-all duration-500 select-none"
                  style={{ transform: `translate(-${currentIndex * 100}%)` }}
                />
              ))}

              {/* like button */}
              <span className="absolute top-3 right-3" onClick={() => setLiked(!liked)}>
                <HeartIcon
                  className={`w-8 active:scale-90 transition-all duration-300 ${liked ? "text-primary" : "text-black"}`}
                />
              </span>

              {/* slider controls */}
              {hover && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  {currentIndex > 0 && (
                    <div
                      className="absolute left-3 -translate-y-[50%] top-[50%] w-6 h-6 flex justify-center items-center rounded-full bg-[#e9e9e9] hover:bg-white shadow shadow-black text-black cursor-pointer select-none active:scale-90 transition-all duration-200"
                      onClick={prevImage}
                    >
                      <ChevronLeftIcon className="w-[16px]" />
                    </div>
                  )}
                  {currentIndex < images.length - 1 && (
                    <div
                      className="absolute right-3 -translate-y-[50%] top-[50%] w-6 h-6 flex justify-center items-center rounded-full bg-[#e9e9e9] hover:bg-white shadow shadow-black text-black cursor-pointer select-none active:scale-90 transition-all duration-200"
                      onClick={nextImage}
                    >
                      <ChevronRightIcon className="w-[16px]" />
                    </div>
                  )}
                </motion.div>
              )}

              {/* slider dots */}
              {images.length > 1 && (
                <div className="absolute -translate-x-[50%] left-[50%] bottom-2 flex gap-2">
                  {images.map((img, i) => (
                    <span
                      key={i}
                      className={`w-[6px] h-[6px] rounded-full transition-all duration-500 select-none shadow ${
                        currentIndex === i ? "bg-white " : "bg-paragraph"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* content */}
            <div className="text-paragraph text-sm font-light mt-2">
              <div className="flex justify-between items-center text-black text-base">
                <p className="capitalize">{location}</p>
                <div className="flex items-center">
                  <StarIcon className="w-4 text-black" /> <p className="text-paragraph"> {rating}</p>
                </div>
              </div>
              <p className="text-black capitalize">{name}</p>
              <p className="">{`Hosted by ${hostName}`}</p>
              <p className="text-paragraph font-light">{availableDate}</p>
              <p className="text-base text-black mt-1">
                {formatMoney(price)} <span className="text-sm font-light">night</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ListingCard;
