import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-[100px] pb-[50px] bg-[#E0E0E0] dark:bg-[#0a192f] text-black dark:text-[#E0E0E0]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#382bf0]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right sm:text-4xl text-2xl pr-10 sm:pr-0 font-bold">
            <p>
              Hi, I'm Priyanshu, nice to meet you. Please take a look around.
            </p>
          </div>
          <div className=" text-sm font-bold ">
            {/* <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p> */}
            <p>
              I am a dedicated student at Medicaps University pursuing a
              Bachelor of Technology in Computer Science and Engineering (B.Tech
              CSE). With a natural curiosity and a passion for learning, I
              thrive on exploring new horizons in the world of technology. 
              <br/><br/>My coding journey has led me to become proficient in languages such
              as C, C++, Python, and Java. I've also honed my skills in web
              development, with expertise in HTML, CSS, JavaScript, ReactJS, and
              the MERN stack. 
              <br/><br/>I take pride in my ability to turn ideas into
              reality, having completed numerous web projects that showcase my
              creativity and problem-solving skills. My proficiency with Git and
              GitHub ensures collaborative and efficient development practices.
              <br/><br/>Beyond my current endeavors, I am actively engaged in the exciting
              field of Machine Learning, always eager to expand my knowledge and
              explore its potential applications. I am passionate about
              leveraging technology to make a positive impact on the world and
              look forward to connecting with like-minded professionals and
              opportunities in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
