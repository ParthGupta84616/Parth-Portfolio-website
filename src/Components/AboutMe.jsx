import React from 'react'
import AboutMeCard from './AboutMeCard'

function AboutMe() {
  return (
    <div>
        <div className="container m-auto px-4 ">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                <AboutMeCard Year={"Start"} Discription={"I graduated from Excellent Circle Of Studies, affiliated with CBSE Board, Gwalior, MP, India, in 2021 with a 74% in PCM stream."} />
                <AboutMeCard Year={2022} Discription={" I scored 84 percentile in JEE Mains, leading to admission at Acropolis Institute Of Technology And Research, Bhopal."} />
                <AboutMeCard Year={2023} Discription={" Passionate about software development, I began my journey with C and JS. By mid-2023, I mastered HTML, CSS, and JavaScript."} />
                <AboutMeCard Year={2023} Discription={"Fueled by curiosity, I delved into programming, mastering CPP and Python for competitive programming. Choosing Flask for web development, I crafted projects showcasing creativity and technical skill."} />
                <AboutMeCard Year={2023} Discription={"In late 2023, I explored frontend frameworks like UI Path and Angular before finding my match in React JS. Its versatility and robust features captivated me, setting the stage for an exciting journey ahead."}/>
                <AboutMeCard Year={2024} Discription={"In 2024, I focused on creating captivating frontend projects like Chat and Weather Applications. Each project enhanced my skills in React and boosted my confidence in web development."} />
                <AboutMeCard Year={'Here'} Discription={"Now, I'm ready to pursue software development internships with a commitment to excellence and a hunger for knowledge. I'm prepared to seize every opportunity, eager to contribute my skills and creativity to the ever-evolving world of technology."}/>
            </div>
          </div>
    </div>
  )
}

export default AboutMe