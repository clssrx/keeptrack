import React from "react";

const ProjectForm = () => {
    return(
        <form className="input-group vertical">
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
                <button className="bordered medium">Cancel</button>
            </div>
        </form>
    )
}

export default ProjectForm;