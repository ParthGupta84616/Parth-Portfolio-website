import React from 'react';

function ProjectCard({ imgURL, projectTitle, projectDescription, projectGithub, projectLive }) {
  return (
    <div className="border border-gray-500 rounded-md p-5 flex-1 hover:scale-105 transition-all duration-1000 ">
      <img src={imgURL} className="w-full h-1/2 rounded-xl hover:scale-105 transition-all duration-1000 " />
      <h3 className="text-2xl font-semibold mt-8 hover:scale-105 transition-all duration-1000">
        {projectTitle}
      </h3>
      <p className="text-gray-400 text-sm hover:scale-105 transition-all duration-1000 mt-2 h-1/4">
        {projectDescription}
      </p>
      <div className="flex gap-2 mb-10">
        <button className="hover:scale-105 transition-all duration-1000 flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700" onClick={() => window.open(projectLive, '_blank')}>
          Live preview
        </button>
        <button className="hover:scale-105 transition-all duration-1000 flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" onClick={() => window.open(projectGithub, '_blank')}>
          Checkout GitHub
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
