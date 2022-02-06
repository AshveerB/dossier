import React from 'react';
import { completedProjects } from '../../data'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function CompletedProjects(props) {
    return (
        <div>
            {completedProjects.map(project => {
                return (
                    <div key={project.id}>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <img src={require(`../../../assets/${project.image}`)} alt="project" className='projectPic'/>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            {project.technologyUsed.map(tech => {
                                return <ListGroupItem>{tech}</ListGroupItem>
                            })}
                        </ListGroup>
                        <Card.Body>
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer">GitHub</a>{" "}
                            <a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed Link</a>
                        </Card.Body>
                    </Card>
                    </div>
                    )
                })}     
        </div>
    );
}

export default CompletedProjects;