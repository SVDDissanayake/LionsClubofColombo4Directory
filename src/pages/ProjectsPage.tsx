import React, { useEffect, useState } from "react";
import { APP_NAME } from "@/utils/constants";
import { projectService, type Project } from "@/services/projectService";

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    document.title = `Projects | ${APP_NAME}`;

    const loadProjects = async () => {
      const { data } = await projectService.getProjects();
      setProjects(data ?? []);
    };

    loadProjects();
  }, []);

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary text-white py-16 px-4 shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Projects
          </h1>
          <p className="text-xl text-accent font-medium italic">
            Community service in action
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <span className="absolute left-4 bottom-4 inline-block px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-text-muted mb-3">
                  <span>{project.date}</span>
                  <span>{project.impact}</span>
                </div>

                <h2 className="font-heading text-2xl font-bold text-text mb-3 leading-tight">
                  {project.title}
                </h2>

                <p className="text-text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
