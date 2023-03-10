import React from "react";
import { data } from "../data/projects.js";

const Projects = () => {
  const projects = data;

  return (
    <div name="projects" className="w-full h-auto bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-center pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
        </div>

        <div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white mx-2"
              >
                <img
                  className="mx-auto w-full h-48"
                  src={project.image}
                  alt={project.name}
                />
                <p className="my-4">{project.name}</p>
                <div className="flex justify-between p-3">
                  <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  </button>
                  <button className="px-4 py-2 text-sm text-orange-100 bg-orange-500 rounded shadow">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
