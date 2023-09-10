import React, { SyntheticEvent, useState } from "react";
import Project from "./Project";
import ErrorCard from "../components/ErrorCard";

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
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
  });

  const validate = (project: Project) => {
    let errors: any = { name: "", description: "", budget: "" };

    if (project.name.length === 0) errors.name = "Name is required";
    if (project.name.length > 0 && project.name.length < 3)
      errors.name = "Name lenght too short! Min 3 characters";
    if (project.description.length === 0)
      errors.description = "Description is required";
    if (project.budget <= 0)
      errors.budget = "Budget can not be zero o negative!!!";

    return errors;
  };

  const isValid = () => {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid()) return;
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

    setErrors(() => validate(updatedProject));
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
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}

      <label htmlFor="description">Project Description</label>
      <input
        name="description"
        type="text"
        placeholder="enter project description"
        value={project.description}
        onChange={handleChange}
      />
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}

      <label htmlFor="budget">Project Budget</label>
      <input
        name="budget"
        type="text"
        placeholder="enter project budget"
        value={project.budget}
        onChange={handleChange}
      />
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}

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
