import React from 'react';
import { EarlyProjects, CompletedProjects, InProgressProjects } from '../../components/cards/projects';
import { Helmet } from 'react-helmet-async';
import './projects.css'

function Projects(props) {
    return (
        <>
            <Helmet>
                <title>Ashveer Bhayroo Projects</title>
                <meta name='description' content='Ashveer Bhayroo projects page'/>
                <link rel="canonical" href="/projects" />
            </Helmet>
            <div className='projects'>
                <CompletedProjects />
                <InProgressProjects />
                <EarlyProjects />
            </div>
        </>
    );
}

export default Projects;