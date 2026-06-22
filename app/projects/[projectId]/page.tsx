import React from 'react';
import { useParams } from 'next/navigation';

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();

  // Placeholder data - replace with real data fetching as needed
  const project = {
    title: `Project ${projectId}`,
    description: 'This is a placeholder description for the project.',
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6">{project.description}</p>
      <section className="border-t pt-4">
        <h2 className="text-2xl font-semibold mb-2">Analytics</h2>
        <p className="text-gray-600">Analytics data will be displayed here.</p>
      </section>
    </div>
  );
}
