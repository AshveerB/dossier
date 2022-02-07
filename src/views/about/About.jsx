import React from 'react';
import Portrait from '../../assets/portrait.jpg'
import PledgeCard from '../../components/cards/pledges/PledgeCard';
import TechnologyCard from '../../components/cards/technology/TechnologyCard';
import { description } from '../../components/data'
import './about.css'
import { Container, Row, Col } from 'react-bootstrap/'

function About(props) {
    return (
        <div className='aboutContainer'>
            <Container>
                <Row>
                    <Col>
                        <img src={Portrait} alt='protrait' className='pic'/>
                    </Col>
                    <Col>
                        <div className='desc'>{description}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TechnologyCard />
                    </Col>
                    <Col>
                        <PledgeCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;