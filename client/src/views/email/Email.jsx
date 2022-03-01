import React, { useState } from 'react';
import axios from 'axios'
import './email.css'
import Button from 'react-bootstrap/Button'

function Email(props) {
    const initialState = {
        to: '',
        subject: '',
        body: ''
    }

    const [formState, setFormState] = useState(initialState);

    const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.to === '' || formState.subject === '' || formState.body === '') {
            return alert("Please fill all fields")
        } else {
            axios({method: 'post', url:'http://localhost:5000/sendmail', data: formState})
            .then(setFormState(initialState))
            .catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <div className='email'>
            <div>Send Me A Short Email: </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='to'>Enter Email: </label>
                <input type="email" id='to' required placeholder='ashveerbhayroo@gmail.com' value={formState.to} onChange={handleChange} />
                <label htmlFor='subject'>Enter Subject: </label>
                <input type="text"  id='subject' required placeholder='Subject: ' value={formState.subject} onChange={handleChange}/>
                <label htmlFor='body'>Enter Body: </label>
                <textarea type="text-area" id='body' maxLength={250} required placeholder='Body: ' value={formState.body} onChange={handleChange}/><br />
                <Button variant="outline-success" onClick={handleSubmit}>Send</Button>
            </form>
        </div>
    );
}

export default Email;