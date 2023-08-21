import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "json.carzano@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-0 mt-[90px] flex xl:flex-row flex-col-reverse overflow-hidden relative`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black p-10"
      >
        <p className={`${styles.sectionSubText} bg-black text-white`}>
          Send me a Message
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 xl:pr-[90px] bg-black"
        >
          <label className="flex flex-col">
            <span className="text-secondary font-medium bg-black pb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your full name?"
              className="py-4 px-4 placeholder:text-secondary text-secondary outline-[#adadad] bg-black outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-secondary font-medium pb-4 bg-black">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-black py-4 px-4 placeholder:text-secondary outline-[#adadad] text-secondary outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-secondary font-medium pb-4 bg-black">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-black py-4 px-4 placeholder:text-secondary outline-[#adadad] text-secondary outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#8ece95] py-3 px-8 rounded-xl   w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-aut relative"
      >
        <div className=" md:h-[400px] md:w-[400px] h-[220px] w-[180px] relative">
          <div className="border-b-[6px] border-green-700 absolute md:h-[400px] md:w-[400px] h-[240px] w-[280px] bg-[#dddddd] xl:top-[200px] xl:left-[-55px] md:top-[120px] md:left-[80%] sm:top-[-10px] sm:left-[70%] top-[2px] left-[40%] z-20">
            {/* Contact me section */}
            <div className="relative flex justify-center items-center w-full h-full bg-[#dfdfdf]">
              <div class="absolute xl:right-[-40px] xl:top-[80px] right-[20px] top-[10px] bg-transparent">
                <span className="font-bold xl:text-[45px] sm:text-[40px] text-[25px] bg-transparent text-black relative z-[2]">
                  <span className="bg-[#bcd0b9] absolute h-10 w-[25%] top-[5%] left-[1%] z-[-1] rounded-full transform -skew-x-12"></span>
                  Contact Me
                </span>
              </div>

              {/* subtext */}
              <div className="xl:px-10 p-2 xl:mt-16 mt-1 text-gray-900 bg-transparent">
                <p className="bg-transparent text-[12px] xl:text-[18px] md:text-[18px]">
                  I will read Email. Send me any message you want. Ill get back
                  to you.
                </p>
                <br />
                <p className="bg-transparent text-[12px] xl:text-[18px] md:text-[18px]">
                  I need you Name and Email address
                </p>
              </div>
            </div>
            {/* small triangle */}
            <div class="absolute left-[30px] top-[30px] w-6 h-6 bg-transparent">
              <div class="w-full h-full border-4 border-black transform rotate-45 relative z-10 bg-transparent"></div>
              <div className="w-full h-full absolute top-0 left-[9px] bg-[#8ab582] z-9 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
