import React from 'react';
import Portrait from '../../assets/portrait.jpg'
import { promises, description } from '../../components/data'

function About(props) {
    return (
        <div>
            <img src={Portrait} alt='protrait'/>
            {promises.map(promise => promise + '  ')}
            <br/>
            {description}
            <br />
            <i class="devicon-javascript-plain colored"></i>{" "}
            <i class="devicon-python-plain colored"></i>{" "}
            <i class="devicon-html5-plain-wordmark colored"></i>{" "}
            <i class="devicon-css3-plain-wordmark colored"></i>{" "}
            <i class="devicon-react-original-wordmark colored"></i>{" "}
            <i class="devicon-nodejs-plain colored"></i>{" "}
            <i class="devicon-express-original colored"></i>{" "}
            <i class="devicon-mongodb-plain-wordmark colored"></i>{" "}
            <i class="devicon-django-plain-wordmark colored"></i>{" "}
            <i class="devicon-postgresql-plain-wordmark colored"></i>{" "}
            <i class="devicon-markdown-original colored"></i>{" "}
            <i class="devicon-vscode-plain-wordmark colored"></i>{" "}
            <i class="devicon-git-plain-wordmark colored"></i>{" "}
            <i class="devicon-github-original-wordmark colored"></i>{" "}
            <i class="devicon-bootstrap-plain-wordmark colored"></i>{" "}
            <i class="devicon-socketio-original-wordmark colored"></i>{" "}
            <i class="devicon-codepen-plain colored"></i>{" "}
            <i class="devicon-figma-plain colored"></i>{" "}
            <i class="devicon-firebase-plain-wordmark colored"></i>{" "}
            <i class="devicon-heroku-plain-wordmark colored"></i>{" "}
            <i class="devicon-linux-plain colored"></i>{" "}
            <i class="devicon-materialui-plain colored"></i>{" "}
            <i class="devicon-mocha-plain colored"></i>{" "}
            <i class="devicon-npm-original-wordmark colored"></i>{" "}
            <i class="devicon-redux-original colored"></i>{" "}
            <i class="devicon-trello-plain-wordmark colored"></i>{" "}
            <i class="devicon-ubuntu-plain-wordmark colored"></i>
        </div>
    );
}

export default About;