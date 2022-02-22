import React from 'react';
import Portrait from '../../assets/portrait.jpg'
import PledgeCard from '../../components/cards/pledges/PledgeCard';
import TechnologyCard from '../../components/cards/technology/TechnologyCard';
import { description } from '../../components/data'
import { Helmet } from 'react-helmet-async';
import './about.css'

function About(props) {
    return (
        <>
            <Helmet>
                <title>Ashveer Bhayroo About</title>
                <meta name='description' content='Ashveer portfollio about page'/>
                <link rel="canonical" href="/about" />
            </Helmet>
            <h1>Portfolio's About Page</h1>
            <div className='about'>
            <div className='aboutContainer'>
                <div className='aboutLeft'>
                    <img src={Portrait} alt='protrait' className='pic'/><br />
                    <PledgeCard />
                </div>
                <div className='aboutRight'>
                    <div className='desc'>{description}</div>
                    <div className='techContainer'>
                        <TechnologyCard />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default About;