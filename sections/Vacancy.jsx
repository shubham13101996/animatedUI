"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { vacancyList } from "../constants";
import { staggerContainer } from "../utils/motion";
import { VacancyCard, TitleText, TypingText } from "../components";

const Vacancy = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Ahead App || Apply Now..!!" textStyles="text-center" />
        <TitleText
          title={
            <>
              Apply Now..!! <br className="md:block hidden" /> Open Vacancies,
              Grab the deal
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {vacancyList.map((world, index) => (
            <VacancyCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Vacancy;
