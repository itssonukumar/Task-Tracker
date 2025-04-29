import React, { useState } from "react";
import ProjectItem from "./ProjectItem";


function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not Started");

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newProject = {
     
      title,
      description,
      status,
      createdAt: new Date().toISOString(),
      completedAt: status === "Completed" ? new Date().toISOString() : null,
    };

    setProjects([...projects, newProject]);
    setTitle("");
    setDescription("");
    setStatus("Not Started");
  };

  const updateProject = (id, updatedProject) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedProject } : p))
    );
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Projects</h2>

      <form onSubmit={handleAddProject} className="mb-10 grid gap-4 md:grid-cols-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          className="p-3 border rounded-lg"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="p-3 border rounded-lg"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-3 border rounded-lg"
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition md:col-span-3"
        >
          Add Project
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length === 0 ? (
          <div className="text-gray-500 text-center col-span-full">No projects yet. Add one!</div>
        ) : (
          projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              updateProject={updateProject}
              deleteProject={deleteProject}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProjectList;





