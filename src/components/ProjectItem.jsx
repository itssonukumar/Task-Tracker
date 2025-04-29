import React, { useState } from "react";

function ProjectItem({ project, updateProject, deleteProject }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(project.title);

  const handleUpdate = () => {
    if (!editedTitle.trim()) return;
    updateProject(project.id, { ...project, title: editedTitle });
    setIsEditing(false);
  };

  return (
    <div className="border p-6 rounded-lg shadow hover:shadow-lg transition space-y-4 bg-white">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-between">
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-indigo-600">{project.title}</h2>
          <p className="text-gray-700"><strong>Description:</strong> {project.description}</p>
          <p className="text-gray-700"><strong>Status:</strong> {project.status}</p>
          <p className="text-sm text-gray-500"><strong>Created:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>
          {project.completedAt && (
            <p className="text-sm text-green-600"><strong>Completed:</strong> {new Date(project.completedAt).toLocaleDateString()}</p>
          )}
          <div className="flex justify-between pt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={() => deleteProject(project.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectItem;


