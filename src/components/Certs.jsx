import React from "react";

import AwsSaaImg from "../assets/awssaa.png";
import AwsDvaImg from "../assets/awsdva.png";
import PmpImg from "../assets/pmp.png";
import CsmImg from "../assets/csm.png";
import SafeSPCImg from "../assets/safe-spc.png";
import KmpImg from "../assets/kmp.png";

const Certs = () => {
  return (
    <div name="certs" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-center pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Certs
          </p>
        </div>

        <div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={AwsSaaImg} alt="HTML icon" />
              <p className="my-4">AWS Associate Architect</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={AwsDvaImg} alt="HTML icon" />
              <p className="my-4">AWS Associate Developer</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={PmpImg} alt="HTML icon" />
              <p className="my-4">Project Management Professionalt</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CsmImg} alt="HTML icon" />
              <p className="my-4">Certified Scrum Master</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={SafeSPCImg} alt="HTML icon" />
              <p className="my-4">SAFe Program Consultant (SPC)</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={KmpImg} alt="HTML icon" />
              <p className="my-4">Kanban Management Professional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certs;
