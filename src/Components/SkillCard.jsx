import React from 'react'

function SkillCard({skill}) {
  return (
    <div>
        <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5 hover:scale-105 transition-all duration-500">
            {skill}
        </p>
    </div>
  )
}

export default SkillCard