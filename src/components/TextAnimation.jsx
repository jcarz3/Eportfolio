// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";

// const TextAnimation = () => {
//   const japaneseText = "ジェイソンカーズ  ";
//   const englishText = "Jason Carz";
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const initialTimeout = setTimeout(() => {
//       setCurrentIndex(1);
//     }, 5000); // Initial delay of 1.5 seconds

//     if (currentIndex < japaneseText.length) {
//       const charChangeTimeout = setTimeout(() => {
//         setCurrentIndex(currentIndex + 1);
//       }, 200); // Delay for each character change

//       return () => {
//         clearTimeout(initialTimeout);
//         clearTimeout(charChangeTimeout);
//       };
//     }
//   }, [currentIndex, japaneseText.length]);

//   return (
//     <div className="text-black">
//       <h2 className={styles.sectionHeadText}>
//         {japaneseText.split("").map((char, index) => (
//           <motion.span
//             key={index}
//             initial={{ opacity: 1, y: 0 }}
//             animate={{
//               opacity: index === currentIndex ? 0 : 1,
//               y: index === currentIndex ? -20 : 0,
//             }}
//             transition={{ type: "tween", duration: 0.5 }}
//           >
//             {currentIndex >= index ? englishText.charAt(index) : char}
//           </motion.span>
//         ))}
//       </h2>
//     </div>
//   );
// };

// export default TextAnimation;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const TextAnimation = ({ japaneseText, englishText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setCurrentIndex(1);
    }, 5000); // Initial delay of 5 seconds

    if (currentIndex < japaneseText.length) {
      const charChangeTimeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 200); // Delay for each character change

      return () => {
        clearTimeout(initialTimeout);
        clearTimeout(charChangeTimeout);
      };
    } else {
      setAnimationComplete(true); // Mark animation as complete
    }
  }, [currentIndex, animationComplete]);

  return (
    <div className="text-black">
      <h2 className={styles.sectionHeadText}>
        {japaneseText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: index === currentIndex ? 0 : 1,
              y: index === currentIndex ? -20 : 0,
            }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {currentIndex >= index ? englishText.charAt(index) : char}
          </motion.span>
        ))}
      </h2>
    </div>
  );
};

export default TextAnimation;
