import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition">
      
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="text-xs border border-gray-700 px-2 py-1 rounded-md text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm">
        <a
          href={project.liveLink}
          className="hover:underline"
          target="_blank"
        >
          Live
        </a>
        <a
          href={project.githubLink}
          className="hover:underline"
          target="_blank"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;