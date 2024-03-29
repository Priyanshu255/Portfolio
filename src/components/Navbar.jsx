import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { BsMoon } from "react-icons/bs";
import { HiOutlineMoon } from "react-icons/hi2";
import { BiSun } from "react-icons/bi";
import Logo from "../assets/apple-touch-icon.png";
import { Link } from "react-scroll";
// import Resume from "../assets/resume/PriyanshuPandit.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("dark");
  const handleClick = () => setNav(!nav);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // console.log(theme);
  };

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="fixed z-50 w-full h-[80px] projectCard flex justify-between items-center px-7 bg-[#E0E0E0] dark:bg-[#0a192f] text-[#0a192f] dark:text-white">
        <div>
          <img src={Logo} alt="logo image" style={{ width: "40px", boxShadow: "2px 2px 20px #382bf0", borderRadius: "10px" }} />
        </div>

        {/* menu */}
        <ul className="hidden md:flex">
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 px-1 inline font-bold hover:border-b-[3px] border-[#382bf0]"
            spy={true}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 px-1 inline font-bold hover:border-b-[3px] border-[#382bf0]"
            spy={true}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 px-1 inline font-bold hover:border-b-[3px] border-[#382bf0]"
            spy={true}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 px-1 inline font-bold hover:border-b-[3px] border-[#382bf0]"
            spy={true}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 px-1 inline font-bold hover:border-b-[3px] border-[#382bf0]"
            spy={true}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          <div onClick={handleTheme} className="ml-6 cursor-pointer dark:text-[#E0E0E0] text-[#0a192f]">
            {theme === "dark" ? <BiSun size={27} /> : <HiOutlineMoon size={25} />}
          </div>
        </ul>

        {/* hamburger */}
        <div
          onClick={handleTheme}
          className="md:hidden absolute right-[80px] cursor-pointer text-[#0a192f] dark:text-blue-300"
        >
          {theme === "dark" ? <BiSun size={27} /> : <HiOutlineMoon size={26} />}
        </div>
        <div onClick={handleClick} className="md:hidden z-10 text-[#0a192f] dark:text-blue-300">
          {nav ? <FaTimes size={30} /> : <FaBars size={25} />}
        </div>

        {/* mobile menu */}
        <ul
          className={
            nav
              ? "absolute top-0 left-0 w-full h-screen bg-[#E0E0E0] dark:text-blue-300 dark:bg-[#0a192f] flex flex-col justify-center items-center"
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
        {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
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
                href={Resume}
                download
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
