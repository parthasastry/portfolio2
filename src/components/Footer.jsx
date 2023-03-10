import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full bg-[#4a4d51] grid grid-cols-1 md:grid-cols-3 p-6">
      <div className="col-span-2 flex">
        <h1 className="text-md  text-[#ccd6f6] ">
          {year}, Copyright &copy; Parthasarathy Sastry
        </h1>
      </div>
      <div className="col-span-1 flex pt-2">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://www.linkedin.com/in/partha-sastry/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>

        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://github.com/parthasastry"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={30} />
        </a>

        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://www.facebook.com/parthasarathy.sastry/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
