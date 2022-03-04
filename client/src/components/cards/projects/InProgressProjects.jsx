import React from 'react';
import { inProgressProjects } from '../../data'
import { Card } from 'react-bootstrap'

function InProgressProjects(props) {
    return (
        <div><span className='cardTitle'>In Progress: </span>
            {inProgressProjects.map(project => {
                return (
                    <div key={project.id} className='cardSize'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Body>
                            <Card.Title><span>{project.title}</span></Card.Title>
                            <Card.Img variant="top" src={require(`../../../assets/${project.image}`)} className='img' alt='project'/>
                        </Card.Body>
                        <Card.Body>
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer" className='links'>GitHub Link</a>{" "}<br /><br />
                            <a href={project.deployedLink} target="_blank" rel="noreferrer" className='links'>Deployed Link</a>
                        </Card.Body>
                    </Card>
                    </div>
                    )
                })}     
        </div>
    );
}

export default InProgressProjects;