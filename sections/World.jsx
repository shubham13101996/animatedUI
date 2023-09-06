"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| let your friends,family,co-workers rate your social skill"
        textStyles="text-center"
      />
      <TitleText
        title={<>Ever wondererd what others think of you?</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-80 left-60 w-[40px] h-[40px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/p3.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute  top-5 right-80 w-[40px] h-[40px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/p5.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute bottom-80 right-80 w-[40px] h-[40px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/p4.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
