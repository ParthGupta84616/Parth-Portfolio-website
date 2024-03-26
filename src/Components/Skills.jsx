import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  return (
    <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <SkillCard skill={"Git"}/>
              <SkillCard skill={"Team Work"}/>
              <SkillCard skill={"Quick Learner"}/>
              <SkillCard skill={"Hackerrank"}/>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
            <SkillCard skill={"Engagement"}/>
            <SkillCard skill={"B2 English"}/>
            <SkillCard skill={"RND"}/>
            </div>
          </div>
  )
}

export default Skills