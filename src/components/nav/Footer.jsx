import React from 'react';
import { contactLinks } from '../data'
import './navbar.css'

function Footer(props) {
    return (
        <>
            <div className='contact'>Contact Me: 
                {contactLinks.map((link) => {
                    return <a href={link.link} target="_blank" rel='noreferrer' className='links' key={link.id}> {link.name}{" "}</a>
                })}
            </div>
            <div>{" "}</div>
        </>
    );
}

export default Footer;