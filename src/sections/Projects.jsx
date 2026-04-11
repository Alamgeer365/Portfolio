import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-10">
        Selected Work
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;