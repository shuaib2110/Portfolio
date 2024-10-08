import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillImg from "../../assets/Skills.png";
import School from "../../assets/School.png";
import College from "../../assets/Univercity.png";

const Education = () => {
  const skillImgRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (skillImgRef.current) {
      VanillaTilt.init(skillImgRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      controls.start({
        y: 100,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <div id="Qualification" className="p-6 md:p-10 lg:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-6">
        Qualification
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center  gap-4 md:gap-10 mb-10">
        <h2 className="font-serif text-[#ccc] text-2xl md:text-3xl">Skill's</h2>
        <h2 className="font-serif text-[#ccc] text-2xl md:text-3xl">Education</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-12">
        <motion.div
          className="md:w-2/5 flex justify-center p-4"
          ref={ref}
          animate={controls}
          initial={{ y: 100, opacity: 0 }}
        >
          <span
            ref={skillImgRef}
            className="p-3 flex items-center rounded-2xl tilt"
          >
            <img
              className="border-2 border-[#fff] rounded-lg w-full max-w-[25rem] h-auto md:w-96 md:h-96"
              src={SkillImg}
              alt="Skills Icon"
            />
          </span>
        </motion.div>

        <div className="md:w-3/5 space-y-4">
          <div className="flex gap-4 md:gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center mx-auto md:ml-0">
            <img className="w-12 h-12" src={College} alt="University" />
            <span className="text-white">
              <h2 className="leading-tight">BCA</h2>
              <p className="text-sm leading-tight font-thin">2023 - Present</p>
              <ul className="text-sm p-2">
                <li>- IGNOU</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-4 md:gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center mx-auto md:ml-0">
            <img className="w-12 h-12" src={School} alt="School" />
            <span className="text-white">
              <h2 className="leading-tight">12th</h2>
              <p className="text-sm leading-tight font-thin">Apr 2021 - Apr 2023</p>
              <ul className="text-sm p-2">
                <li>- CBSE</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-4 md:gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center mx-auto md:ml-0">
            <img className="w-12 h-12" src={School} alt="School" />
            <span className="text-white">
              <h2 className="leading-tight">10th</h2>
              <p className="text-sm leading-tight font-thin">Apr 2019 - Apr 2020</p>
              <ul className="text-sm p-2">
                <li>- CBSE</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
