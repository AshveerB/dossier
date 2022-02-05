import React from 'react';
import { projects } from '../../components/data'

function Projects(props) {
    return (
        <div>
            {projects.map(project => {
                return (
                    <div key={project.id}>
                    <div>{project.title}</div>{" "}
                    <img src={require(`../../assets/${project.image}`)} alt="project"/>{" "}
                    {project.technologyUsed.map(tech => tech)}{" "}
                    <a href={project.gitHubLink} target="_blank" rel="noreferrer">GitHub</a>{" "}
                    <a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed Link</a>
                    </div>
                )
            })}
        </div>
    );
}

export default Projects;