import React from 'react';
import { earlyProjects } from '../../data'
import { Card } from 'react-bootstrap'

function EarlyProjects(props) {
    return (
        <div><span className='cardTitle'>Early Projects: </span>
            {earlyProjects.map(project => {
                return (
                    <div key={project.id} className='cardSize'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Body>
                            <Card.Title><span>{project.title}</span></Card.Title>
                            <Card.Img variant="top" src={require(`../../../assets/${project.image}`)} className='img'/>
                        </Card.Body>
                        <Card.Body>
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer" className='links'>GitHub Link</a>{" "}<br />
                            <a href={project.deployedLink} target="_blank" rel="noreferrer" className='links'>Deployed Link</a>
                        </Card.Body>
                    </Card>
                    </div>
                    )
                })}     
        </div>
    );
}

export default EarlyProjects;