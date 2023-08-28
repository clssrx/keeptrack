import React, { SyntheticEvent, useState } from "react";
import Project from "./Project";

interface ProjectFormProps {
    onSave: (project: Project) => void;
    onCancel: () => void;
    project: Project;
}

const ProjectForm = ({ onSave, onCancel, project: initialProject }: ProjectFormProps) => {
    const [project, setProject] = useState(initialProject);

    // const handleChange = (event: any) => {
    //     const { type, name, value, check } = event.target;

        
    // } 

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        onSave(new Project({name: 'Updated project'}))
    }

    return(
        <form className="input-group vertical" onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input name="name" type="text" placeholder="enter project name"/>
            
            <label htmlFor="description">Project Description</label>
            <input name="description" type="text" placeholder="enter project description"/>

            <label htmlFor="budget">Project Budget</label>
            <input name="budget" type="text" placeholder="enter project budget"/>

            <label htmlFor="isActive">Active?</label>
            <input name="isActive" type="checkbox"/>

            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span/>
                <button className="bordered medium" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default ProjectForm;