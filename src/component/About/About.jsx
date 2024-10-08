import React from "react";
import Resumeimg from "../../assets/Main-img.png";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
      <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex md:flex-row items-center gap-12 mt-8">
          {/* Image Section */}
          <img
            className="border-2 border-[#fff] bg-opacity-45 rounded-lg w-full md:w-1/2 shadow-lg"
            src={Resumeimg}
            alt="About Me"
          />

          {/* Text Section */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-4 h-auto max-h-64 overflow-auto p-4 md:p-0">
              Hello! I'm a passionate web developer with a love for creating dynamic and responsive web applications. With a focus on clean design and efficient code, I aim to bring ideas to life on the web.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-4 h-auto max-h-64 overflow-auto p-4 md:p-0">
              Over the past few years, I have honed my skills in various technologies, including React.js, JavaScript, and Tailwind CSS. I believe in the power of collaboration and constant learning, and I'm always excited about taking on new challenges.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 h-auto max-h-64 overflow-auto p-4 md:p-0">
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
