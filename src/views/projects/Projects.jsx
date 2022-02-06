import React from 'react';
import { completedProjects, inProgressProjects, earlyProjects } from '../../components/data'
import './projects.css'

function Projects(props) {
    return (
        <div>
            <div>Completed Projects: </div>
                <div>
                    {completedProjects.map(project => {
                        return (
                            <div key={project.id}>
                            <div>{project.title}</div>{" "}
                            <img src={require(`../../assets/${project.image}`)} alt="project" className='projectPic'/>{" "}
                            {project.technologyUsed.map(tech => tech)}{" "}
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer">GitHub</a>{" "}
                            <a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed Link</a>
                            </div>
                        )
                    })}
                </div>
            <div>In Progress: </div>
                <div>
                    {inProgressProjects.map(project => {
                        return (
                            <div key={project.id}>
                            <div>{project.title}</div>{" "}
                            <img src={require(`../../assets/${project.image}`)} alt="project" className='projectPic'/>{" "}
                            {project.technologyUsed.map(tech => tech)}{" "}
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer">GitHub</a>{" "}
                            <a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed Link</a>
                            </div>
                        )
                    })}
                </div>
            <div>Early Work: </div>
                <div>
                    {earlyProjects.map(project => {
                        return (
                            <div key={project.id}>
                            <div>{project.title}</div>{" "}
                            <img src={require(`../../assets/${project.image}`)} alt="project" className='projectPic'/>{" "}
                            {project.technologyUsed.map(tech => tech)}{" "}
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer">GitHub</a>{" "}
                            <a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed Link</a>
                            </div>
                        )
                    })}
                </div>
        </div>
    );
}

export default Projects;