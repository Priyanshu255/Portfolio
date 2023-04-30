import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/myname.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="fixed w-full h-[80px] shadow-md shadow-[#040c16] flex justify-between items-center px-7 bg-[#0a192f] text-gray-300">
        <div>
          <img src={Logo} alt="logo image" style={{ width: "90px" }} />
        </div>

        {/* menu */}
        <ul className="hidden md:flex">
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 inline hover:border-b-4 border-pink-600"
            spy={true}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 inline hover:border-b-4 border-pink-600"
            spy={true}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 inline hover:border-b-4 border-pink-600"
            spy={true}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 inline hover:border-b-4 border-pink-600"
            spy={true}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 inline hover:border-b-4 border-pink-600"
            spy={true}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {/* mobile menu */}
        <ul
          className={
            nav
              ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
              : "hidden"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/priyanshu-pandit-b8415b220"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/Priyanshu255/"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:priyanshu4443@gmail.com"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="http://"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
