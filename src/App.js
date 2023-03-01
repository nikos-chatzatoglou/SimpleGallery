import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<div className='pb-16'>
					<Header />
				</div>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/gallery' element={<Gallery />}></Route>
				</Routes>
			</Router>
		</>
	);
};

export default App;
