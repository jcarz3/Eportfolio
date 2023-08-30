import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("down", "spring", index * 0.5, 0.75)}
        className="w-full bg-[#ffffff] hover:border-[5px] border-gray-500 relative rounded-md"
      >
        {/* <div className="w-full h-full absolute z-[-10] top-5 left-5 border-[4px] border-[#13561e]"></div> */}

        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#ffffff] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain bg-white"
          />

          <h3 className="text-gray-900 text-[20px] font-bold text-center bg-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <span
          className={`${styles.sectionHeadText} bg-transparent relative z-[2]`}
        >
          <span className="z-[-1] w-[30%] h-[65%] bg-[#d2eecd] absolute top-0 right-[-20px] rounded-md transform -skew-y-12"></span>
          Overview.
        </span>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-700 text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled web developer specializing in creating captivating and
        interactive online experiences. With a strong foundation in JavaScript,
        <span className="bg-gradient-to-r from-[#a1e7a8] to-[#d7f6e1] ">
          React
        </span>
        , HTML, CSS, TypeScript, and the power of state management through
        XState, I'm dedicated to crafting seamless and user-friendly web
        applications. My journey began with an insatiable curiosity for the
        digital world, and I've since honed my skills through practical projects
        and continuous learning.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
