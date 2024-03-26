import React from 'react'

function TechnologiesCard({TechnologyName,TechnologyLevel,TechnologyPercentage}) {
  return (
    <div className="mt-8">
        <div className="flex justify-between items-center">
            <h2 className="font-semibold">{TechnologyName}</h2>
            <p className="text-gray-500">{TechnologyLevel} </p>
        </div>
        <span className="w-2/3 h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />

    </div>
  )
}

export default TechnologiesCard