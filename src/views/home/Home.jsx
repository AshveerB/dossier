import React from 'react';
import { name, title } from '../../components/data'
import { Helmet } from 'react-helmet-async';
import './home.css'

function Home(props) {
    return (
        <>
            <Helmet>
                <title>Ashveer Bhayroo Home</title>
                <meta name='description' content='Ashveer portfolio home page'/>
                <link rel="canonical" href="/" />
            </Helmet>
            <h1>Portfolio's Home Page</h1>
            <div className='homeContainer'>
                <div className='greeting'>Hello! My name is <span className='name'>{name}</span>.<br />I am a <span className='title'>{title}</span>.</div>
            </div>
        </>
    );
}

export default Home;