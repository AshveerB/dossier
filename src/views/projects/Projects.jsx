import React from 'react';
import { EarlyProjects, CompletedProjects, InProgressProjects } from '../../components/cards/projects';
import './projects.css'

function Projects(props) {
    return (
        <div className='projects'>
            <CompletedProjects />
            <InProgressProjects />
            <EarlyProjects />
        </div>
    );
}

export default Projects;