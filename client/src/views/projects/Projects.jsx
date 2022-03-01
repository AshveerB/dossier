import React from 'react';
import { EarlyProjects, CompletedProjects, InProgressProjects } from '../../components/cards/projects';
import { Helmet } from 'react-helmet-async';
import './projects.css'

function Projects(props) {
    return (
        <>
            <Helmet>
                <title>Ashveer Bhayroo Projects</title>
                <meta name='description' content='Ashveer portfolio projects page'/>
                <meta name='author' content='Ashveer Bhayroo'/>
                <meta name='keywords' content='javascript, python, react, node, django'/>
                <link rel="canonical" href="/projects" />
            </Helmet>
            <h1>Portfolio's Project Page</h1>
            <div className='projects'>
                <CompletedProjects />
                <InProgressProjects />
                <EarlyProjects />
            </div>
        </>
    );
}

export default Projects;