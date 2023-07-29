import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#E0E0E0] dark:bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-700 dark:text-pink-400">Hi, my name is</p>

        <h1 className="text-4xl sm:text-7xl font-bold text-[#0a192f] dark:text-[#ccd6f6]">
          Priyanshu Pandit
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-end Developer
        </h2>

        <p className="text-[#0a192f] dark:text-[#8892b0] py-4 max-w-[700px]">
          I'm a Front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive Front-end web applications.
        </p>

        <div>
        <Link to="projects" smooth={true} duration={500} >
          <button className="text-white shadow-lg bg-[#0a192f] shadow-[#040c166b] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 origin-right duration-300 group-hover:translate-y-1 ">
              <HiArrowNarrowRight className="ml-6" />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
