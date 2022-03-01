import React, { useState } from 'react';
import axios from 'axios'

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
        console.log(formState)
        axios({method: 'post', url:'http://localhost:5000/sendmail', data: formState})
        .then(setFormState(initialState))
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='email'>
            Email
            <form onSubmit={handleSubmit}>
                <input type="email" id='to' required placeholder='To: ' value={formState.to} onChange={handleChange}/>
                <input type="text"  id='subject' required placeholder='Subject: ' value={formState.subject} onChange={handleChange}/>
                <input type="text-area" id='body' required placeholder='Body: ' value={formState.body} onChange={handleChange}/><br />
                <button onClick={handleSubmit}>Send</button>
            </form>
        </div>
    );
}

export default Email;