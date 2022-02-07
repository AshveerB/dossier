import React from 'react';
import Portrait from '../../assets/portrait.jpg'
import PledgeCard from '../../components/cards/pledges/PledgeCard';
import TechnologyCard from '../../components/cards/technology/TechnologyCard';
import { description } from '../../components/data'
import './about.css'

function About(props) {
    return (
        <div className='aboutContainer'>
            <div>
                <div className='aboutTop'>
                    <img src={Portrait} alt='protrait' className='pic'/>
                </div>
                <div className='promises'>
                    <PledgeCard />
                </div>
            </div>
            <div className='aboutBottom'>
                <div className='desc'>
                    {description}
                </div>
                <div className='tech'>
                    <TechnologyCard />
                </div>
            </div>
        </div>
    );
}

export default About;