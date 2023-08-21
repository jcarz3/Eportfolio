import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="hover:bg-white p-5 sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover"
          />

          <div className="absolute bg-transparent inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain bg-black"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-gray-800 font-bold text-[24px] ">{name}</h3>
          <p className="mt-2 text-gray-600 text-[14px] ">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px]  ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <span
          className={`${styles.sectionHeadText} bg-transparent relative z-[2]`}
        >
          <span className="z-[-1] w-[31%] h-[68%] bg-[#d2eecd] absolute bottom-2 left-[-15px] rounded-full transform -skew-x-12"></span>
          Projects.
        </span>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-700 text-[17px] max-w-3xl leading-[30px]"
        >
          Below are a few projects that demonstrate my skills and experience
          with practical examples of my work. I've provided brief descriptions
          along with links to code repositories and live demos. These projects
          highlight my ability to solve complex problems, work with various
          technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
