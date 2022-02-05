import React from 'react';
import { name, title } from '../../components/data'
import './home.css'

function Home(props) {
    return (
        <>
            <div className='homeContainer'>
                <div className='greeting'>Hello! My name is <span className='name'>{name}</span>.<br />I am a <span className='title'>{title}</span>.</div>
            </div>
        </>
    );
}

export default Home;