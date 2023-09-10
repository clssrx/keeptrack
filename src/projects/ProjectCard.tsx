import React from "react";
import { Project } from "./Project";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project, onEdit } = props;

  const handleClick = (project: Project) => {
    onEdit(project);
  };

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <Link to={"/projects/" + project.id}>
            <strong>{project.name}</strong>
          </Link>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget: {project.budget.toLocaleString()}</p>
        <button className="bordered" onClick={() => handleClick(project)}>
          <span className="icon-edit" />
          Edit
        </button>
      </section>
    </div>
  );
};

export default ProjectCard;
