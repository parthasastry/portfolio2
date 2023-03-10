import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div className="font-mono font-bold text-4xl italic">PS</div>

        <div>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="certs" smooth={true} duration={500} offset={-100}>
                Certs
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} offset={-100}>
                Skills
              </Link>
            </li>

            <li>
              <Link to="projects" smooth={true} duration={500} offset={-100}>
                Work
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-100}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li>
            <Link to="home" onClick={handleClick} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="certs"
              onClick={handleClick}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Certs
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              onClick={handleClick}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              onClick={handleClick}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={handleClick}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Scoial icons */}
        {/* <div className="flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/partha-sastry/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/parthasastry"
                target="_blank"
                rel="noreferrer"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
