import React, { SyntheticEvent, useState } from "react";
import Project from "./Project";

interface ProjectFormProps {
  onSave: (project: Project) => void;
  onCancel: () => void;
  project: Project;
}

const ProjectForm = ({
  onSave,
  onCancel,
  project: initialProject,
}: ProjectFormProps) => {
  const [project, setProject] = useState(initialProject);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(project);
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    let updatedValue = type === "checkbox" ? checked : value;

    if (type === "number") updatedValue = Number(updatedValue);

    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;

    setProject((project) => {
      updatedProject = new Project({ ...project, ...change });
      return updatedProject;
    });
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        name="name"
        type="text"
        placeholder="enter project name"
        value={project.name}
        onChange={handleChange}
      />

      <label htmlFor="description">Project Description</label>
      <input
        name="description"
        type="text"
        placeholder="enter project description"
        value={project.description}
        onChange={handleChange}
      />

      <label htmlFor="budget">Project Budget</label>
      <input
        name="budget"
        type="text"
        placeholder="enter project budget"
        value={project.budget}
        onChange={handleChange}
      />

      <label htmlFor="isActive">Active?</label>
      <input
        name="isActive"
        type="checkbox"
        checked={project.isActive}
        onChange={handleChange}
      />

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button className="bordered medium" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
