import React from 'react';
import { contactLinks } from '../../components/data'

function Contact(props) {
    return (
        <>
        <div>
            {contactLinks.map((link) => {
                return <a href={link.link} target="_blank" rel='noreferrer'>{link.name}{" "}</a>
            })}
        </div>
        <div>{" "}</div>
        </>
    );
}

export default Contact;