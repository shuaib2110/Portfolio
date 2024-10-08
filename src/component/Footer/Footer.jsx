import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import React from "react";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-between bg-[#465697] text-white p-6 md:p-12 items-center"
    >
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free to Reach Out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl text-center md:text-left space-y-3">
        <li className="m-1 flex items-center justify-center md:justify-start">
          <MailOutlined className="mr-2" />
          jrshuaib4152@gmail.com
        </li>
        <li className="m-1 flex items-center justify-center md:justify-start">
          <LinkedinOutlined className="mr-2" />
          linkedin.com/username
        </li>
        <li className="m-1 flex items-center justify-center md:justify-start">
          <GithubOutlined className="mr-2" />
          github.com/username
        </li>
      </ul>
    </div>
  );
};

export default Footer;
