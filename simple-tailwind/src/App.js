import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
	add_to_firebase,
	read_data,
	read_collection,
} from "./actions_from_firebase";

const App = () => {
	return (
		<>
			<Router>
				<div className='pb-16'>
					<Header />
				</div>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/portfolio' element={<Portfolio />}></Route>
				</Routes>
			</Router>
		</>
	);
};

export default App;
