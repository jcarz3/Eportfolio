import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="py-0"
      contentStyle={{
        background: "white",
        color: "#000000",
        font: "black",
      }}
      contentArrowStyle={{ borderRight: "7px solid black", color: "#ffffff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain bg-white"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold bg-white">
          {experience.title}
        </h3>
        <p
          className="text-gray-900 text-[16px] font-semibold bg-white"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 bg-white">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-800 text-[14px] pl-1 tracking-wider bg-white"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <span
          className={`${styles.sectionHeadText} bg-transparent relative z-[2]`}
        >
          <span className="z-[-1] w-[31%] h-[68%] bg-[#d2eecd] absolute bottom-2 right-[-15px]"></span>
          Experience.
        </span>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
