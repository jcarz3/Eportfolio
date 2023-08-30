import { motion } from "framer-motion";
import { styles } from "../styles";

import { arrow, Jason2 } from "../assets/index";
import { fadeIn, slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { AiOutlineArrowDown } from "react-icons/ai";
import Typical from "react-typical";
import TextAnimation from "./TextAnimation";

const Hero = () => {
  const japaneseText = "             ジェイソン     ";
  const englishText = "             Jason Carz";

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden text-black`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-6 rounded-2xl relative"
      >
        <h2 className={styles.sectionHeadText}>
          <span className="md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#13561e]">
            Hi, Im
          </span>{" "}
          {/* <Typical
            steps={["ジェイソンカーズ", 1000, "Jason Carz", 500]}
            loop={1}
          /> */}
          <TextAnimation
            japaneseText={japaneseText}
            englishText={englishText}
          />
        </h2>
        <p className="text-[20px] md:mt-[20px] sm:mt-4">
          <span className="bg-gradient-to-r from-[#a1e7a8] to-[#d7f6e1] font-bold mr-1">
            Frontend Developer
          </span>
          with knowledge in React, typescript and xstate.
        </p>

        <div className="w-full md:mt-[100px] sm:mt[20px] mt:10px flex items-center gap-2">
          <a href="#about">
            <div className="w-[36px] h-[38px]  bg-black flex justify-center items-start pt-1">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <AiOutlineArrowDown className="text-white text-[20px] font-bold bg-black" />
              </motion.div>
            </div>
          </a>
          <p className="text-[12px]">scroll down</p>
        </div>
        {/* <motion.div className="" variants={slideIn("right", "tween", 0.2, 1)}> */}
        <img
          className="rotate-180 md:scale-y-[-1] md:h-[120px] md:w-[120px] sm:h-[70px] sm:w-[70px] h:[55px] w-[55px] absolute md:bottom-[20%] md:left-[75%] sm-bottom-[50%] sm:left-[50%] bottom-[75%] left-[75%]"
          src={arrow}
          alt=""
        />
        {/* </motion.div> */}
      </motion.div>

      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[390px] flex justify-center py-6"
      >
        <div className="relative bg-red-300">
          <img
            src={Jason2}
            alt="pizza Image"
            className="md:w-[430px] md:h-[560px] sm-w[300px] sm:h[400px] h-[350px] w-[260px] object-cover"
          />
          <div class="absolute left-[-20px] top-[50%] w-8 h-8 bg-transparent">
            <div class="w-full h-full border-4 border-black transform rotate-45 relative z-10 bg-transparent"></div>
            <div className="w-full h-full absolute top-0 left-[9px] bg-[#13561e] z-9 transform rotate-45"></div>
          </div>

          <div className="absolute md:w-[430px] md:h-[560px] sm-w[300px] sm:h[400px] h-[350px] w-[260px] border-[5px] border-gray-900 top-[20px] left-6 z-[-20]"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Hero, "hero");
