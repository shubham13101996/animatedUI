"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[17px] leading-[30.24px] text-white">
        Emotions
      </h2>
      <h2 className="font-extrabold text-[17px] leading-[30.24px] text-white">
        Manifesto
      </h2>
      <h2 className="font-extrabold text-[17px] leading-[30.24px] text-white">
        Self-awareness Test
      </h2>
      <h2 className="font-extrabold text-[17px] leading-[30.24px] text-white">
        Work With Us
      </h2>

      <button className="bg-white font-extrabold text-[15px] w-[150px] h-[40px] object-contain rounded-[50px]">Download app</button>
    </div>
  </motion.nav>
);

export default Navbar;
