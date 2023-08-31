import React from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import Project from "./Project";

const ProjectsPage = () => {
  const saveProject = (project: Project) => {
    console.log("saving project " + project.name);
  };

  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} onSave={saveProject} />
    </>
  );
};

export default ProjectsPage;
