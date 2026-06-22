import Link from "next/link";
import type { FC } from "react";

interface Project {
  id: string | number;
  title: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <a className="block rounded-lg border border-gray-200 bg-white p-4 shadow hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-500">Project ID: {project.id}</p>
      </a>
    </Link>
  );
};

export default ProjectCard;
