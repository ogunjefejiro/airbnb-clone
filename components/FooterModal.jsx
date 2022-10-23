import React from "react";
import Link from "next/link";
import { footerLinks } from "../helpers/data";
import { XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const FooterModal = ({ showFooter, setShowFooter }) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: showFooter ? "auto" : 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-t-xl bg-white relative"
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className="absolute top-5 left-5 p-2 hover:bg-[#f5f5f5] rounded-full cursor-pointer"
        onClick={() => setShowFooter(false)}
      >
        <XIcon className="w-4" />
      </span>
      <div className="max-w-[90%] lg:max-w-[90%] mx-auto py-10 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:flex gap-6 lg:gap-12 justify-between">
        {footerLinks?.map(({ heading, subMenus }, i) => (
          <div className="w-full flex flex-col gap-2 md:gap-4" key={heading + i}>
            <h3 className="text-base">{heading}</h3>
            {subMenus.map(({ title, path }, i) => (
              <Link href={path} key={title + i}>
                <a className="cursor-pointer text-sm font-circle hover:underline">{title}</a>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FooterModal;
