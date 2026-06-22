import React from 'react';
import Link from 'next/link';

export default function BillingPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Billing</h1>
      <p className="mb-6">Your billing information will appear here.</p>
      <Link href="/settings/billing/manage">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Manage Payment Method
        </button>
      </Link>
    </div>
  );
}
