import React from 'react';
import Head from 'next/head';

// Placeholder ProjectCard component
const ProjectCard: React.FC<{ title: string }> = ({ title }) => (
  <div className="rounded-lg border p-4 shadow hover:shadow-md transition-shadow">
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="text-sm text-gray-500">Project description placeholder.</p>
  </div>
);

const ProjectsPage: React.FC = () => {
  // Placeholder list of projects
  const projects = [
    { id: 1, title: 'Project Alpha' },
    { id: 2, title: 'Project Beta' },
    { id: 3, title: 'Project Gamma' },
  ];

  return (
    <>
      <Head>
        <title>Projects – Agency Client Portal</title>
        <meta
          name="description"
          content="Browse all projects in the Agency Client Portal. View project overviews and access details."
        />
      </Head>
      <section className="mx-auto max-w-4xl p-6">
        <h1 className="mb-6 text-3xl font-bold">Projects</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} title={project.title} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
