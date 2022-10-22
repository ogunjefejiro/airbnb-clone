import { MapIcon } from "@heroicons/react/solid";
import { useScrollDirection } from "../hooks";
import { FilterBar, Footer, ListingCardsContainer, Meta, Navbar } from "../components";

const Home = () => {
  const scrollingUp = useScrollDirection() == "up";

  return (
    <>
      <Meta />
      <Navbar />
      <FilterBar />
      <ListingCardsContainer />
      <Footer />
      <button
        className={`bg-black text-white fixed ${
          scrollingUp ? "bottom-20" : "bottom-5 md:bottom-20"
        }  z-30 -translate-x-[50%] left-[50%] flex gap-2 items-center px-4 md:px-6 py-3 rounded-full text-sm shadow-sm active:scale-95 transition-all duration-200`}
      >
        <span className="hidden md:block">Show map</span>
        <span className="block md:hidden">Map</span>
        <MapIcon className="w-4" />
      </button>
    </>
  );
};

export default Home;
