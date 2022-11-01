import './App.css';
import NavBar from './Components/Navbar';
import Red from './Components/Red';
import Blue from './Components/Blue';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';

function App() {
	return (
		<>
			<div className="">
				<NavBar/>
				<BrowserRouter>
					<Routes>
						<Route path="/">
							<Route path="Red" element={<Red/>} />
							<Route path="Blue" element={<Blue/>} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
