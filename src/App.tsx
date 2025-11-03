import { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes.ts';
import Home from './views/home/Home.tsx';
import { BP_LARGE_PX, BP_LARGER_PX, BP_MEDIUM_PX, BP_SMALL_PX } from './utilities/constants.ts';
import Contact from "./views/contact/Contact.tsx";

function App() {
	// const [count, setCount] = useState(0);
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const smallMql = globalThis.matchMedia(`(min-width: ${BP_SMALL_PX}px)`);
		const mediumMql = globalThis.matchMedia(`(min-width: ${BP_MEDIUM_PX}px)`);
		const largeMql = globalThis.matchMedia(`(min-width: ${BP_LARGE_PX}px)`);
		const largerMql = globalThis.matchMedia(`(min-width: ${BP_LARGER_PX}px)`);
		const apply = () => {
			document.documentElement.classList.toggle('small', smallMql.matches);
			document.documentElement.classList.toggle('medium', mediumMql.matches);
			document.documentElement.classList.toggle('large', largeMql.matches);
			document.documentElement.classList.toggle('larger', largerMql.matches);
		};
		apply();
		smallMql.addEventListener('change', apply);
		mediumMql.addEventListener('change', apply);
		largeMql.addEventListener('change', apply);
		largerMql.addEventListener('change', apply);
		return () => {
			smallMql.removeEventListener('change', apply);
			mediumMql.removeEventListener('change', apply);
			largeMql.removeEventListener('change', apply);
			largerMql.removeEventListener('change', apply);
		};
	}, []);
	return (
		<>
			<BrowserRouter>
				<Navbar
					options={[
						{ href: routes.HOME, label: 'Hogar' },
						{ href: routes.ABOUT, label: 'Sobre' },
						{ href: routes.CONTACT, label: 'Contactanos' }
					]}
					main={{ href: routes.HOME, label: 'LMMS' }}
				></Navbar>
				<Routes>
					<Route index element={<Home />} />
					<Route path={routes.ABOUT} element={<h1> ABOUT </h1>} />
					<Route path={routes.CONTACT} element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
