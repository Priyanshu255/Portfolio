// import Navbar from "./components/Navbar"
// import Home from "./components/Home"
// import About from "./components/About"
// import Skills from "./components/Skills"
// import Projects from "./components/Projects"
// import Contact from "./components/Contact"
import { HiExternalLink } from "react-icons/hi";

function App() {
  return (
    <>
      {/* <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
      <div
        name="home"
        className="w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]"
      >
        <p className="text-white font-semibold mb-2">
          Sorry For Your Inconvenience
        </p>
        <a
          href="https://priyanshupandit.vercel.app/"
          className="text-[#E0E0E0] font-bold shadow-lg bg-[#5e43f3] shadow-[#040c166b] group rounded-full px-6 py-3 md:mb-2 mt-2 mb-5 flex items-center hover:bg-[#382bf0] hover:-translate-y-1 duration-300"
        >
          Link to New Portfolio Website
          <span>
            <HiExternalLink className="ml-3" size={25} />
          </span>
        </a>
      </div>
    </>
  );
}

export default App;
