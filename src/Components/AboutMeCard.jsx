import React from 'react'

function AboutMeCard({Year,Discription}) {
  return (
    <div className="pl-24 mt-10 font-serif relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
        <h3 className="absolute left-0 text-lg font-semibold">{Year}</h3>
        <p className=''>
           {Discription}
        </p>
    </div>
  )
}

export default AboutMeCard