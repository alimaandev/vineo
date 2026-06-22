import React from "react";

// Placeholder component for a team member detail page.
// In a real app, you would fetch the member data based on the
// dynamic route parameter `memberId` (e.g., from a database or API).

export default function TeamMemberPage() {
  // Placeholder data
  const member = {
    name: "John Doe",
    role: "Senior Developer",
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{member.name}</h1>
      <p>Role: {member.role}</p>
    </div>
  );
}
