import Link from 'next/link';
import React from 'react';

export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Settings</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/settings/profile" className="text-blue-600 hover:underline">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/settings/billing" className="text-blue-600 hover:underline">
            Billing
          </Link>
        </li>
      </ul>
    </div>
  );
}
