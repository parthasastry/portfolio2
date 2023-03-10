import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div name="home" className="w-fll h-screen bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full pt-[160px]">
          <h1 className="text-3xl sm:text-6xl font-bold text-[#ccd6f6] ">
            Parthasarathy Sastry
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8892b0] pt-5">
            Technical Program Manager & Agile Coach
          </h2>
          <p className="text-[#8892b0]">
            I am an IT industry veteran with more than two decades of experience
            in leading complex greenfield application development and cloud
            migration programs. I am also an Agile coach and practitioner with
            expertise in Scrum and Kanban. A hobbyist programmer, who loves
            coding in Python, React and AWS serverless services. During my
            leisure, I spend time learning Vedic philosophy.
          </p>
          <div className="flex justify-between py-8">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/partha-sastry/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={50} />
            </a>

            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/parthasastry"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={50} />
            </a>

            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/parthasarathy.sastry/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={50} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
