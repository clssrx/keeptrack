import React, { useEffect, useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import Project from "./Project";
import { ProjectAPI } from "./projectAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorCard from "../components/ErrorCard";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await ProjectAPI.get(currentPage);
        setError("");
        if (currentPage === 1) setProjects(data);
        else setProjects((projects) => [...projects, ...data]);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);

  const saveProject = (project: Project) => {
    ProjectAPI.put(project)
      .then((updatedProject) => {
        let updatedProjects = projects.map((p: Project) =>
          p.id === project.id ? new Project(updatedProject) : p
        );

        setProjects(updatedProjects);
      })
      .catch((error) => {
        if (error instanceof Error) setError(error.message);
      });
  };

  return (
    <>
      <h1>Projects</h1>

      {error && <ErrorCard errorMessage={error} />}

      <ProjectList projects={projects} onSave={saveProject} />

      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="blue" onClick={handleMoreClick}>
                gimme, gimme (more), gimme (more), gimme, gimme (more)...
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && <LoadingSpinner />}
    </>
  );
};

export default ProjectsPage;
