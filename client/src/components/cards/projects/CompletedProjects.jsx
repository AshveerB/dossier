import React from 'react';
import { completedProjects } from '../../data'
import { Card } from 'react-bootstrap'

function CompletedProjects(props) {
    return (
        <div><span className='cardTitle'>Completed Projects:</span>
            {completedProjects.map(project => {
                return (
                    <div key={project.id} className='cardSize'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Body>
                            <Card.Title><span>{project.title}</span></Card.Title>
                            <Card.Img variant="top" src={require(`../../../assets/${project.image}`)} className='img' alt='project'/>
                        </Card.Body>
                        <Card.Body>
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer" className='links'>GitHub Link</a>{" "}<br />
                            <a href={project.deployedLink} target="_blank" rel="noreferrer" className='links'>Deployed Link</a>
                        </Card.Body>
                    </Card>
                    </div>
                    )
                })}<br /><br /><br /><br /><br />
        </div>
    );
}

export default CompletedProjects;