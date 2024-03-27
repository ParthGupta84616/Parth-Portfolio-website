import React, { useState } from 'react';

function ProjectCard({ imgURL, projectTitle, projectDescription, projectGithub, projectLive }) {
  const [hovered, setHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative border border-gray-500 p-4 w-full rounded-xl flex flex-col "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovered ? (
        <div className='flex flex-col justify-center items-center ' style={{height: '27.35vh' }} >
          <h1 className="font-semibold  text-base text-center   hover:scale-105 transition-all duration-700" >{projectDescription}</h1>
          <div className=" flex justify-center text-xl mt-4">
            <a href={projectGithub} className="text-blue-600 hover:underline mr-2  hover:scale-105 transition-all duration-700" target="_blank" rel="noopener noreferrer">GitHub</a>
            {projectLive && (
              <a href={projectLive} className="text-blue-600 hover:underline ml-2  hover:scale-105 transition-all duration-700" target="_blank" rel="noopener noreferrer">Live</a>
            )}
          </div>
        </div>
      ) : (
        <img src={imgURL} className="w-full h-full rounded-xl hover:rotate-360 transition duration-1000 " style={{height: '27.35vh' }} alt="Project" />
      )}
    </div>
  );
}

export default ProjectCard;
