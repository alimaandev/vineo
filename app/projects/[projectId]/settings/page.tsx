import React from 'react';

export default function ProjectSettingsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Project Settings</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
}
