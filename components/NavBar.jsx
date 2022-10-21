import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GlobeAltIcon, MenuAlt3Icon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const router = useRouter();
  const pageLink = router.pathname;

  useEffect(() => {
    setPageReady(true);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-[#222222] border-b border-[#eaeaea] sticky top-0 bg-white z-30"
    >
      <div className="relative hidden md:block">
        <div className="flex justify-between items-center py-3 md:py-4 max-w-[90%] lg:max-w-[90%] mx-auto text-black">
          <Link href="/">
            <a>
              <img src="/Airbnb.png" alt="Airbnb Logo" className="max-h-8 hidden lg:block" />
              <img src="/icons/airbnb-icon.svg" alt="Airbnb Logo" className="max-h-9 lg:hidden" />
            </a>
          </Link>

          <div className="flex items-center border border-[#e1e1e1] shadow-md shadow-[#e1e1e1] rounded-full p-2 text-sm font-light absolute md:-translate-x-[20%] md:left-[20%] lg:-translate-x-[50%] lg:left-[50%]">
            <p className="px-4 cursor-pointer">Anywhere</p>
            <p className="px-4 border-x border-[#e1e1e1] cursor-pointer">Any Week</p>
            <div className="flex items-center">
              <p className="px-4 text-[#717171] cursor-pointer">Add guests</p>
              <span className="w-8 h-8 bg-primary rounded-full flex justify-center items-center cursor-pointer">
                <SearchIcon className="w-[18px] text-white" />
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <p className="px-4 py-2 hover:bg-[#f5f5f5] rounded-full cursor-pointer text-sm">Become a Host</p>
            <span className="p-3 hover:bg-[#f5f5f5] rounded-full cursor-pointer">
              <GlobeAltIcon className="w-5" />
            </span>
            <div className="flex items-center border border-[#e1e1e1] shadow-sm shadow-[#e1e1e1] rounded-full ml-2 px-1 text-sm font-light">
              <span className="px-2 cursor-pointer">
                <MenuIcon className="w-5" />
              </span>
              <UserCircleIcon className="w-9 text-[#717171] cursor-pointer" />
            </div>
          </div>

          {/* mobile menu start */}
          {/* <MenuAlt3Icon className="lg:hidden w-9 text-primary cursor-pointer" onClick={() => setMenuOpen(true)} />
        {menuOpen && (
          <div
            className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] z-[99999]"
            onClick={() => setMenuOpen(false)}
          >
            <AnimatePresence>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                className="fixed top-0 left-0 bg-primary h-screen overflow-y-scroll"
                onClick={(e) => e.stopPropagation()}
              >
                <MobileNavbar setMenuOpen={setMenuOpen} pageLink={pageLink} />
              </motion.div>
            </AnimatePresence>
          </div>
        )} */}
          {/* mobile menu end */}
        </div>
      </div>
    </motion.header>
  );
};

export default NavBar;
