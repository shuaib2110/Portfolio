import React from "react";
import aboutimage from "../../assets/Aboutimg.png";
import TextChange from "../Textchanger";

const Home = () => {
  return (
    <div className="text-[#fff] flex flex-col md:flex-row w-full justify-between items-center md:items-start p-5 md:p-10 lg:p-20">
      <div className="md:w-2/4 md:pt-10 mt-10 md:mt-20 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange/>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-3 md:mt-5">
          Passionate React Native developer with a keen interest in full-stack
          development.
        </p>
        <button
          className="mt-5 md:mt-10 text-white py-2 px-3 md:text-lg md:py-2 md:px-4 hover:opacity-85
           duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          <a
            href="C:\Users\shuai\OneDrive\Desktop\ReactPortfolio\src\assets\MY RESUME (shuaib ahmad).pdf"
            role="button"
          >
            Download CV
          </a>
        </button>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          className="w-72 h-72 md:w-96 md:h-96 lg:w-[35rem] lg:h-[35rem] border-b-4 border-[#101423] rounded-lg"
          src={aboutimage}
          alt="About img"
        />
      </div>
    </div>
  );
};

export default Home;
