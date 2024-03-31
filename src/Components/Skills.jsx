import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  return (
    <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold hover:scale-105 transition-all duration-700">
              Technology and Skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <SkillCard skill={"Git"} />
              <SkillCard skill={"Team Work"}/>
              <SkillCard skill={"Quick Learner"}/>
              <SkillCard skill={"Hackerrank"}/>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-32 mt-4 sm:mt-6 w-[80%] ">
            <SkillCard skill={"Engagement"}/>
            <SkillCard skill={"B2 English"}/>
            {/* <SkillCard skill={"RND"}/> */}
            <SkillCard skill={"Problem Solving"}/>
            </div>
            <h2 className="text-2xl font-semibold hover:scale-105 transition-all duration-700 mt-10">
              Programming Skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%] ">
            <SkillCard skill={"C"}/>
            <SkillCard skill={"C++"}/>
            <SkillCard skill={"HTML/CSS"}/>
            <SkillCard skill={"JavaScript"}/>
            <SkillCard skill={"React"}/>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%] ">
            {/* <SkillCard skill={"HTML"}/> */}
            <SkillCard skill={"Python"}/>
            <SkillCard skill={"Flask"}/>
            <SkillCard skill={"Restfull API"}/>
            <SkillCard skill={"MongoDB"}/>
            {/* <SkillCard skill={"React"}/> */}
            </div>
          </div>
  )
}

export default Skills