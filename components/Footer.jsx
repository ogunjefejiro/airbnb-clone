import React, { useEffect, useState } from "react";
import Link from "next/link";
import { copyrightLinks, mobileFooterLinks } from "../helpers/data";
import FooterModal from "./FooterModal";
import { ChevronUpIcon, GlobeAltIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useScrollDirection } from "../hooks";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  const scrollingUp = useScrollDirection() == "up";
  const router = useRouter();
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="hidden md:block">
        <div className="fixed left-0 right-0 bottom-0 z-30 bg-white border-t border-[#e1e1e1] shadow-sm shadow-[#e1e1e1] py-4">
          <div className="max-w-[90%] mx-auto flex justify-between text-sm">
            <div className="flex gap-3 text-paragraph">
              <p>&copy; {year} Airbnb, Inc.</p>
              {copyrightLinks.map(({ path, title }) => (
                <Link href={path} key={title}>
                  <a className="hover:underline">{title}</a>
                </Link>
              ))}
            </div>

            <div className="flex gap-5">
              <div className="flex gap-2">
                <GlobeAltIcon className="w-5" />
                <p>English (US)</p>
              </div>
              <div className="flex gap-2">
                $<p>USD</p>
              </div>
              <div className="flex gap-2">
                <Link href="#">
                  <a className="hover:underline">Support & resources</a>
                </Link>
                <ChevronUpIcon className="w-5 cursor-pointer" onClick={() => setShowFooter(true)} />
              </div>
            </div>
          </div>
        </div>

        {showFooter && (
          <div
            className="fixed left-0 right-0 top-0 bottom-0 h-screen bg-black bg-opacity-40 z-50 flex flex-col justify-end"
            onClick={() => setShowFooter(false)}
          >
            <FooterModal showFooter={showFooter} setShowFooter={setShowFooter} />
          </div>
        )}
      </footer>

      {/* mobile footer */}
      {scrollingUp && (
        <motion.footer className="md:hidden">
          <div className="fixed left-0 right-0 bottom-0 flex justify-center bg-white border-t border-[#e1e1e1] shadow-sm shadow-[#e1e1e1]">
            <div className="max-w-[90%] mx-auto flex gap-12 items-center">
              {mobileFooterLinks.map(({ path, title, icon }, i) => (
                <Link href={path} key={path + i}>
                  <a
                    className={`flex flex-col items-center py-3 ${
                      path == router.pathname ? "text-primary" : "text-paragraph"
                    }`}
                  >
                    {icon}
                    <span className="text-xs">{title}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </motion.footer>
      )}
    </>
  );
};

export default Footer;
