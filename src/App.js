import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar.jsx';
import { Home, About, Projects, Contact } from './views';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='projects' element={<Projects />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
