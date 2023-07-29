import React from 'react'
import {data} from './skillData';

const Skills = () => {
    const skills = data;
  return (
    <div name = 'skills' className='w-full pt-[100px] bg-[#E0E0E0] dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-300'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-center py-8'>

            {skills.map((items) => (
                <div key={items.id} className='pt-5 skillCard hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={items.src} alt={`${items.alt} icon`} />
                <p className='my-4'>{items.name}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
