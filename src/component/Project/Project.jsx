import React from "react";
import BlogLogo from "../../assets/BlogLogo.png";
import blogpost from "../../assets/blogpost.png";
import ecomm from "../../assets/ecomm.png";

const projects = [
  {
    title: "BlogPost (MERN)",
    description: "Create Blog-post web app to share your thought and experiences using mern stack create restful api and backend server in node.js and express develope Front-end using react.js and develope database Schema in mongodb.",
    img: blogpost,
    demoLink: "#",
    sourceCodeLink: "#",
  },
  {
    title: "E-Commerce Clothing App (React Native)",
    description: "Developed a fully functional e-commerce clothing app using React Native, featuring a sleek user interface with bottom tab navigation, custom icons, and gradient backgrounds.",
    img: ecomm,
    demoLink: "#",
    sourceCodeLink: "#",
  },
  {
    title: "Portfolio",
    description: "Lorem ipsum dolor sit amet consectetur...",
    img: BlogLogo,
    demoLink: "#",
    sourceCodeLink: "#",
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
        Projects
      </h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-3 md:p-6 flex flex-col w-80 border-2  shadow-xl shadow-slate-900 rounded-sm mx-auto transform hover:scale-105 hover:bg-[#0c0e19] transition duration-300 ease-in-out"
          >
            <img
              className="p-4"
              src={project.img}
              alt={`${project.title} logo`}
            />
            <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
              {project.title}
            </h3>
            <p className="px-4 text-base md:text-md leading-tight py-2">
              {project.description}
            </p>
            <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
             
              <a
                href={project.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-xl bg-[#465697]">
                  Source Code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
