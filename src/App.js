import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './page/Cart';
import Home from './page/Home';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
