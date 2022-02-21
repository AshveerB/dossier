import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Router>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</Router>,
	document.getElementById('root')
);
