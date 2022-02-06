import React from 'react';
import Portrait from '../../assets/portrait.jpg'
import { promises, description } from '../../components/data'
import './about.css'

function About(props) {
    return (
        <div className='aboutContainer'>
            <div >
                <img src={Portrait} alt='protrait' className='pic'/>
            </div>
            <div className='promises'>
                {promises.map(promise => promise + '  ')}
            </div>
            <div className='desc'>
                {description}
            </div>
            <div className='tech'>
                <i className="devicon-javascript-plain colored"></i>{" "}
                <i className="devicon-python-plain colored"></i>{" "}
                <i className="devicon-html5-plain-wordmark colored"></i>{" "}
                <i className="devicon-css3-plain-wordmark colored"></i>{" "}
                <i className="devicon-react-original-wordmark colored"></i>{" "}
                <i className="devicon-nodejs-plain colored"></i>{" "}
                <i className="devicon-express-original colored"></i>{" "}
                <i className="devicon-mongodb-plain-wordmark colored"></i>{" "}
                <i className="devicon-django-plain-wordmark colored"></i>{" "}
                <i className="devicon-postgresql-plain-wordmark colored"></i>{" "}
                <i className="devicon-markdown-original colored"></i>{" "}
                <i className="devicon-vscode-plain-wordmark colored"></i>{" "}
                <i className="devicon-git-plain-wordmark colored"></i>{" "}
                <i className="devicon-github-original-wordmark colored"></i>{" "}
                <i className="devicon-bootstrap-plain-wordmark colored"></i>{" "}
                <i className="devicon-socketio-original-wordmark colored"></i>{" "}
                <i className="devicon-codepen-plain colored"></i>{" "}
                <i className="devicon-figma-plain colored"></i>{" "}
                <i className="devicon-firebase-plain-wordmark colored"></i>{" "}
                <i className="devicon-heroku-plain-wordmark colored"></i>{" "}
                <i className="devicon-linux-plain colored"></i>{" "}
                <i className="devicon-materialui-plain colored"></i>{" "}
                <i className="devicon-mocha-plain colored"></i>{" "}
                <i className="devicon-npm-original-wordmark colored"></i>{" "}
                <i className="devicon-redux-original colored"></i>{" "}
                <i className="devicon-trello-plain-wordmark colored"></i>{" "}
                <i className="devicon-ubuntu-plain-wordmark colored"></i>
            </div>
        </div>
    );
}

export default About;