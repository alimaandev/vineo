import React from 'react';
import TeamMemberCard from '@/components/TeamMemberCard'; // Placeholder component

// Replace with actual data source as needed
const teamMembers = [
  { id: 1, name: 'Ayesha Khan', role: 'Project Manager', avatar: '/avatars/ayesha.jpg' },
  { id: 2, name: 'Bilal Ahmed', role: 'Frontend Engineer', avatar: '/avatars/bilal.jpg' },
  { id: 3, name: 'Logesh Kumar', role: 'Backend Engineer', avatar: '/avatars/logesh.jpg' },
  { id: 4, name: 'Zara Ibrahim', role: 'Design Lead', avatar: '/avatars/zara.jpg' },
];

const TeamPage: React.FC = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-6">Team</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {teamMembers.map(member => (
        <TeamMemberCard
          key={member.id}
          name={member.name}
          role={member.role} id={''}        />
      ))}
    </div>
  </div>
);

export default TeamPage;
