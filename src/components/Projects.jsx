import React from 'react'
import {data} from './projectData.js';

const Projects = () => {

    const projects = data;

  return (
    <div name = 'projects' className='w-full pt-[100px] pb-[50px] text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
            <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

            {/* grid items*/}
            {projects.map((item) => (
            <div key={item.id} style={{backgroundImage: `url(${item.image})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 w-full h-full flex flex-col justify-center items-center bg-[#0a192fe8] hover:opacity-100' id='project'>
                        <span className='px-3 text-3xl font-bold text-gray-100 tracking-wider'>
                            {item.name}
                        </span>
                        <div className='pt-8 text-center'>
                            <a href= {item.live}>
                                <button className='text-center rounded-sm px-4 py-2 m-2 bg-[#0a192f] border-2 shadow-lg shadow-[#040c16] text-gray-300 font-bold text-lg'>Demo</button>
                            </a>
                            <a href= {item.github}>
                                <button className='text-center rounded-sm px-4 py-2 m-2 bg-[#0a192f] border-2 shadow-lg shadow-[#040c16] text-gray-300 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
