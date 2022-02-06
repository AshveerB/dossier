import React from 'react';
import { EarlyProjects, CompletedProjects, InProgressProjects } from '../../components/cards/projects';
import './projects.css'

function Projects(props) {
    return (
        <div>
            <CompletedProjects />
            <InProgressProjects />
            <EarlyProjects />
        </div>
    );
}

export default Projects;