import React, { useEffect, useState } from "react";
import ProjectDetail from "./ProjectDetail";
import Project from "./Project";
import { ProjectAPI } from "./projectAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorCard from "../components/ErrorCard";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  // const id = 1
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setLoading(true);
    ProjectAPI.find(id)
      .then((project) => {
        setProject(project);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h1>Project Detail</h1>

      {loading && <LoadingSpinner />}

      {error && <ErrorCard errorMessage={error} />}

      {project && <ProjectDetail project={project} />}
    </div>
  );
};

export default ProjectPage;
