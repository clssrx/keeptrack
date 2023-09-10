import React from "react";
import Project from "./Project";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img src={project.imageUrl} alt={project.name}></img>
          <section>
            <h3 className="strong">{project.name}</h3>
            <p>{project.description}</p>
            <p>Budget: {project.budget}</p>
            <p>Signed: {project.contractSignedOn.toLocaleDateString()}</p>
            <p>
              <mark className="active">
                {project.isActive ? "active" : "inactive"}
              </mark>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
