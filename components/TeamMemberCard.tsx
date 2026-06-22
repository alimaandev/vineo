import Link from 'next/link';
import React from 'react';

interface TeamMemberCardProps {
  id: string | number;
  name: string;
  role: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ id, name, role }) => {
  return (
    <Link href={`/team/${id}`}>
      <a className="block rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </a>
    </Link>
  );
};

export default TeamMemberCard;
