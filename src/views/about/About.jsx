import React from 'react';
import Portrait from '../../assets/portrait.jpg'
import PledgeCard from '../../components/cards/pledges/PledgeCard';
import TechnologyCard from '../../components/cards/technology/TechnologyCard';
import { description } from '../../components/data'
import './about.css'

function About(props) {
    return (
        <div className='about'>
        <div className='aboutContainer'>
            <div className='aboutLeft'>
                <img src={Portrait} alt='protrait' className='pic'/><br />
                <PledgeCard />
            </div>
            <div className='aboutRight'>
                <div className='desc'>{description}</div>
                <TechnologyCard /><br /><br /><br />
            </div>
        </div>
        </div>
    );
}

export default About;