import React from "react";
import { data } from "./projectData.js";

const Projects = () => {
  const projects = data;

  return (
    <div
      name="projects"
      className="w-full pt-[100px] pb-[50px] bg-[#E0E0E0] dark:bg-[#0a192f] text-[#0a192f] dark:text-blue-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 px-1 border-[#382bf0]">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-7">
          {/* grid items*/}
          {projects.map((item, index) => (
            <div className="flex flex-col rounded-lg projectCard hover:-translate-y-1 duration-300" key={index}>
              <span className="px-4 py-2 text-[23px] font-bold text-[#0a192f] dark:text-blue-300 border-b-4 border-[#382bf0] tracking-wider">
                {item.name}
              </span>
              <img className="mx-2 mt-6 projectCard hover:-translate-y-2 duration-300" src={item.image} />
              <div className="py-5 text-center">
                <a href={item.live}>
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-[#5e43f3] shadow-lg shadow-[#040c166b] text-black font-bold text-lg hover:bg-[#382bf0] dark:shadow-lg dark:shadow-[#000000] hover:-translate-y-1 duration-300">
                    Try here
                  </button>
                </a>
                <a href={item.github}>
                  <button className="text-center rounded-full px-4 py-2 m-2 bg-[#5e43f3] shadow-lg shadow-[#040c166b] text-black font-bold text-lg hover:bg-[#382bf0] dark:shadow-lg dark:shadow-[#000000] hover:-translate-y-1 duration-300">
                    Source Code
                  </button>
                </a>
              </div>
              <div className="px-4 pt-0 pb-5">
                <p className="pb-3" ><b>Technology used: </b>{item.tech}</p>
                <p><b>Description: </b>{item.description}</p>
              </div>
              {/* <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                hover effects
                <div
                  className="opacity-0 w-full h-full flex flex-col justify-center items-center bg-[#0a192fe8] hover:opacity-100"
                  id="project"
                >
                  <span className="px-3 text-3xl font-bold text-gray-100 tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-5 pb-5 text-center">
                    <a href={item.live}>
                      <button className="text-center rounded-sm px-4 py-2 m-2 bg-[#0a192f] border-2 shadow-lg shadow-[#040c16] text-gray-300 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={item.github}>
                      <button className="text-center rounded-sm px-4 py-2 m-2 bg-[#0a192f] border-2 shadow-lg shadow-[#040c16] text-gray-300 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
