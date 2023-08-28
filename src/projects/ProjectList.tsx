import React from "react";
import { Project } from './Project';
import ProjectCard from './ProjectCard'

interface ProjectListProps{
    projects: Project[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <ul className="row">
            {projects.map(project => (
                <ProjectCard project={project} />
            ))}
        </ul>
    )
}

export default ProjectList;