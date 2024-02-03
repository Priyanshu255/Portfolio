import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TiDownload } from "react-icons/ti";
import Resume from "../assets/resume/PriyanshuPandit_Resume.pdf";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#E0E0E0] dark:bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#5e43f3] dark:text-[#5e43f3] font-bold">Hi, my name is</p>

        <h1 className="text-4xl sm:text-7xl font-bold text-[#0a192f] dark:text-[#5e43f3]">
          Priyanshu Pandit
        </h1>

        <h2 className="text-2xl sm:text-6xl font-bold text-[#5e43f3]">
          I'm a
          <span className="dark:text-blue-300 text-gray-6400">
            <TypeAnimation
              sequence={[
                " Front-end Developer",
                1000,
                " Back-end Developer",
                1000,
                " Data Scientist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>

        <p className="text-[#5e43f3] dark:text-[#5e43f3] py-4 max-w-[700px] font-semibold">
          I'm a Full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive Full-stack web applications.
        </p>

        <div className="py-4 text-[#5e43f3]">
          <ul className="flex justify-start">
            <li className="hover:scale-150 px-2 duration-300">
              <a href="https://www.linkedin.com/in/priyanshu-pandit-b8415b220 ">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="hover:scale-150 px-2 duration-300">
              <a href="https://github.com/Priyanshu255/">
                <FaGithub size={30} />
              </a>
            </li>
            <li className="hover:scale-150 px-2 duration-300">
              <a href="mailto:priyanshu4443@gmail.com">
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="hover:scale-150 px-2 duration-300">
              <a href={Resume} download>
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>

        <div className="md:flex gap-3">
          <a href={Resume} download>
            <button className="text-[#E0E0E0] font-bold shadow-lg bg-[#5e43f3] shadow-[#040c166b] group rounded-full px-6 py-3 md:mb-2 mt-2 mb-5 flex items-center hover:bg-[#382bf0] hover:-translate-y-1 duration-300">
              My Resume
              <span>
                <TiDownload className="ml-3" />
              </span>
            </button>
          </a>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-[#E0E0E0] font-bold shadow-lg bg-[#5e43f3] shadow-[#040c166b] group rounded-full px-6 py-3 my-2 flex items-center hover:bg-[#382bf0] hover:-translate-y-1 duration-300">
              View Work
              {/* <span className="group-hover:rotate-90 origin-right duration-300 group-hover:translate-y-1 "> */}
              <span>
                <HiArrowNarrowDown className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
