import React from 'react'
import AboutMeCard from './AboutMeCard'

function AboutMe() {
  return (
    <div>
        <div className="container m-auto px-4 ">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                <AboutMeCard Year={"Start"} Discription={"I recently graduated from high school in 2021 from Gwalior, Madhya Pradesh, India. During my time at Excellent Circle Of Studies, affiliated with the CBSE Board, I achieved a commendable 74% in the PCM stream (Physics, Chemistry, Mathematics)."} />
                <AboutMeCard Year={2022} Discription={"I secured an impressive 84 percentile in JEE Mains in 2022. This accomplishment opened doors to exciting opportunities, leading me to accept admission to the esteemed Acropolis Institute Of Technology And Research affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal."} />
                <AboutMeCard Year={2023} Discription={" I delved into the world of software development with a burning passion. Starting with C and JS, I swiftly navigated through the realms of HTML, CSS, and JavaScript, honing my skills till the mid of 2023."} />
                <AboutMeCard Year={2023} Discription={"Driven by a thirst for knowledge, I delved deeper into the intricacies of programming languages, mastering CPP and Python for competitive programming. It was during this time that I envisioned my future in web development and chose Flask as my backend language, crafting remarkable projects that showcased my creativity and technical prowess."} />
                <AboutMeCard Year={2023} Discription={"As I ventured into the last quarter of 2023, I felt a magnetic pull towards frontend frameworks. Exploring options like UI path and Angular, I finally found my match in React JS. Its versatility and robust features captivated me, setting the stage for an exciting journey ahead."}/>
                <AboutMeCard Year={2024} Discription={"I entered 2024 with a singular focus: to bring my creative visions to life through captivating frontend projects. With each project, whether it be a Chat Application or a Weather Application, I pushed the boundaries of creativity and functionality, honing my skills and bolstering my confidence along the way. These experiences not only solidified my expertise in React but also ignited a spark within me to explore new horizons and pursue opportunities in web development."} />
                <AboutMeCard Year={'Here'} Discription={"Now, as I set my sights on internships in the field of software development, I do so with an unwavering commitment to excellence and a thirst for knowledge. I am ready to seize every opportunity that comes my way, eager to contribute my skills and creativity to the dynamic world of technology."}/>
            </div>
          </div>
    </div>
  )
}

export default AboutMe