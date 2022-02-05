import React from 'react';
import { contactLinks } from '../../components/data'
import './contact.css'

function Contact(props) {
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

export default Contact;