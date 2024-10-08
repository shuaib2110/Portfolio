import React from "react";

const Portfolio = () => {
  const projects = [
    {
      img: "https://cxotoday.com/wp-content/uploads/2023/02/ecommerce.png",
      title: "E-commerce Website",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi sapiente nisi repellendus perspiciatis, enim veritatis quo. Laboriosam, dicta perferendis voluptates molestias atque, ex iste dolorum perspiciatis maiores odio provident voluptas!",
    },
    {
      img: "https://static.semrush.com/blog/uploads/media/10/86/1086a4f1302931277c096afa72fc458a/social-media-ads.svg",
      title: "Social Media Website",
      description:
        "Create an E-commerce app of clothing using React Native, including browsing products, and managing acart, The app provides a seamless shopping experience,",
    },
    {
      img: "https://static.toiimg.com/thumb/msid-75897210,width-400,resizemode-4/75897210.jpg",
      title: "Food Delivery Website",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi sapiente nisi repellendus perspiciatis, enim veritatis quo. Laboriosam, dicta perferendis voluptates molestias atque, ex iste dolorum perspiciatis maiores odio provident voluptas!",
    },
  ];

  return (
    <section className="h-screen bg-burlywood">
      <div className="container mx-auto py-10">
        <h3 className="text-center text-2xl font-bold uppercase mb-12 text-white">
          Portfolio
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              className="w-full sm:w-80 bg-white border border-red-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-lavender"
              key={index}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">
                  {project.title}
                </h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <button className="mt-4 px-4 py-2 bg-[#ffee63] text-black font-semibold rounded hover:bg-[#ffd700] transition duration-200">
                  Explore more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
