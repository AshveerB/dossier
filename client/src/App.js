import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/nav/NavBar.jsx';
import { Home, About, Projects, Email } from './views';
import Footer from './components/nav/Footer';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='projects' element={<Projects />} />
				<Route path='email' element={<Email />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
