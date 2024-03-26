import React from 'react'
import Porfile  from '../assets/Photo.png';

function Intro() {
  return (
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
  )
}

export default Intro