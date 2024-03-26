import "./App.css";
import Porfile  from './assets/Photo.png';
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import ProjectCard from "./Components/ProjectCard";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20 `} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-gray-950 rounded-3xl">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center ">
            <div>
            <a href="#main">
              <h1 className="font-bold text-2xl hover:scale-105 transition-all duration-200 ">Parth Portfolio</h1>
            </a>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer ">
                    <h1 className="hover:scale-105 transition-all duration-200 hover:font-bold">Projects</h1>
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                  <h1 className="hover:scale-105 transition-all duration-200 hover:font-bold">Technologies</h1>
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                  <h1 className="hover:scale-105 transition-all duration-200 hover:font-bold">Certification</h1>
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                  <h1 className="hover:scale-105 transition-all duration-200 hover:font-bold">About me</h1>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section id="main">
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl hover:scale-105 transition-all duration-1000 c:\Users\Parth\Downloads\Profile\Profile.png">Hello, I'm Parth Gupta,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text hover:scale-105 transition-all duration-1000">frontend developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400 hover:scale-105 transition-all duration-1000">
                Currently pursuing my Bachelor's in Technology, I'm actively seeking internships to bolster my skills and expand my knowledge base. Passionate about learning and growth, I aim to contribute effectively to collaborative projects while honing my communication and teamwork abilities.
                </p>
                <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px] rounded-full hover:scale-105 transition-all duration-700 " />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11 font-medium">
              <ProjectCard 
              imgURL={Project1}
              projectTitle={"Advance Todo App"}
              projectDescription={"Your Ultimate Task Manager! Effortlessly add, remove, and update tasks. Set deadlines and stay on track. Enjoy a personalized experience with Google sign-in. Stay organized and productive with TodoApp!"}
              projectGithub={"https://github.com/ParthGupta84616/TodoApp-ReactJs"}
              projectLive={'https://todo-app-pg.netlify.app'}
              / >
              <ProjectCard 
              imgURL={Project2}
              projectTitle={"World Of Weather"}
              projectDescription={"Discover real-time weather updates with our Weather App. Track time, temperature, humidity, pressure, wind speed, and sunrise/sunset times for your location and searched cities. Enjoy a sleek UI with dynamic background changes. Made with React JS."}
              projectLive={"https://worldofweather.netlify.app/"}
              projectGithub={'https://github.com/ParthGupta84616/Weather_App_ReactJs'}
              / >
              
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
            <ProjectCard 
              imgURL={Project3}
              projectTitle={"Spotify FrontPage Clone"}
              projectDescription={"A Spotify front-end clone developed with ReactJS and the Spotify API. Users can log in to their Spotify accounts and view their playlists, all fetched dynamically. No hardcoded data; everything is API-driven for an authentic experience."}
              projectGithub={"https://github.com/ParthGupta84616/Spotify-Frontend-Clone-ReactJs"}
              projectLive={'https://spotify-front-end-clone-pg.netlify.app/'}
              / >
              <ProjectCard 
              imgURL={Project4}
              projectTitle={"Temligram"}
              projectDescription={"Built using ReactJS and Firebase, this 1-1 chatting application offers users the ability to create or log in to their accounts, find other users, and engage in real-time chat conversations. Users can also share pictures with each other seamlessly within the app."}
              projectGithub={"https://github.com/ParthGupta84616/Chatting_App_Using_ReactJS_Firebase"}
              projectLive={'https://parthguptacp.netlify.app/login'}
              / >
            </div>
          </div>
        </section>
        
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
