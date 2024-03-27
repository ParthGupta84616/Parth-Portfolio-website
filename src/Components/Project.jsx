import React from 'react'
import ProjectCard from './ProjectCard'
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";

function Project() {
  return (
    <div className="container m-auto px-4 sm:py-5">
            <h2 className="text-2xl font-semibold  hover:scale-105 transition-all duration-1000">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-8 mt-11 font-medium">
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
            <div className="flex flex-col sm:flex-row gap-8 mt-8">
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
  )
}

export default Project