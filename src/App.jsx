import "./App.css";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import Project from "./Components/Project";
import Intro from "./Components/Intro";
import Technologies from "./Components/Technologies";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

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
              <h1 className="font-bold text-2xl hover:scale-105 transition-all duration-200 ">Parth's Portfolio</h1>
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
        <section id="main">
          <Intro/>
        </section>
        <section id="projects">
          <Project/>
        </section>
        <section className="py-10" id="technologies">
          <Technologies/>
        </section>
        <section>
          <Skills />
        </section>
        <section className="py-8" id="aboutme">
          
        </section>
      </main>
      <footer>
        <Footer/>
        
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} className="hover:scale-110 transition-all duration-300" />
          </button>
        )
      }
    </div>
  );
}

export default App;
