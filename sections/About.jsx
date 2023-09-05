"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Ahead App" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">EQ beats IQ</span> | |
        People with high emotional intelligence (EQ) live more fulfilled lives.{" "}
        <span className="font-extrabold text-white">
          They tend to be happier and have their relationships.
        </span>{" "}
      </motion.p>

      <motion.p
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        They are more{" "}
        <span className="font-extrabold text-white">Successful</span> in their
        <span className="font-extrabold text-white"> pursuits</span> and make
        for{" "}
        <span className="font-extrabold text-white">inspiring leaders.</span>{" "}
        According to the{" "}
        <span className="font-extrabold text-white">science</span>, they earn
        <span className="font-extrabold text-white">
          {" "}
          $29k 
        </span> a year. Let's{" "}
        <span className="font-extrabold text-white"> explore </span> the madness
        by scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
