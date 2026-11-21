import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-52 w-full object-cover"
      />

      {/* Project Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          {project.title}
        </h3>

        <p className="mb-4 leading-6 text-gray-600">{project.description}</p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {technology}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
