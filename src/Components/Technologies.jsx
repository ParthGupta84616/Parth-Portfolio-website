import React from 'react'
import TechnologiesCard from './TechnologiesCard'
import TechnologiesCard1 from './TechnologiesCard1'

function Technologies() {
  return (
    <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold  hover:scale-105 transition-all duration-1000">Technologies</h2>
            <div >
              <TechnologiesCard 
              TechnologyName={"HTML"}
              TechnologyLevel={"Intermediate"} 
              />
              <TechnologiesCard 
              TechnologyName={"CSS, Tailwind"}
              TechnologyLevel={"Intermediate"} 
              />
              <TechnologiesCard 
              TechnologyName={"JavaScript"}
              TechnologyLevel={"Intermediate"} 
              />
              <TechnologiesCard 
              TechnologyName={"React JS"}
              TechnologyLevel={"Intermediate"} 
              />
              <TechnologiesCard 
              TechnologyName={"Python"}
              TechnologyLevel={"Intermediate"} 
              />
              <TechnologiesCard 
              TechnologyName={"Flask"}
              TechnologyLevel={"Intermediate"} 
              />
              <TechnologiesCard1 
              TechnologyName={"Mongo DB"}
              TechnologyLevel={"Basic"} 
              />
              <TechnologiesCard1 
              TechnologyName={"C"}
              TechnologyLevel={"Basic"} 
              />
              <TechnologiesCard1 
              TechnologyName={"C++"}
              TechnologyLevel={"Basic"} 
              />

            </div>
          </div>
  )
}

export default Technologies