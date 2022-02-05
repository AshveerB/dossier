import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/nav/NavBar.jsx';
import { Home, About, Projects, Contact } from './views';

function App() {
	return (
		<div className='App'>
			<NavBar />
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
