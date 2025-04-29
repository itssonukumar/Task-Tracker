import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (newProject) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      { id: Date.now(), title: newProject.title },
    ]);
  };
 

  const updateProject = (id, updatedTitle) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, title: updatedTitle } : project
      )
    );
  };
  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };
  

  return (
    <Router>
     

        <Routes>
         
        <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<ProjectList projects={projects}  addProject={addProject} updateProject={updateProject} deleteProject={deleteProject}/>} />
      
     
        </Routes>
    
    </Router>
  )
}

export default App
