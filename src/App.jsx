import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/home.jsx'

import Header from './components/header/header'
import Aboutus from './pages/aboutus/aboutus'
import Contact from './pages/contact/contact'
import Nodalcentres from './pages/nodalcentres/nodalcentres'
import Resources from './pages/resources/resources'
import Getinvolved from './pages/getinvolved/getinvolved'
import Gallery from './pages/gallery/gallery'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path = "/" element={<Home />}/>
				<Route path = "/aboutus" element={<Aboutus />}/>
				<Route path = "/centres" element={<Nodalcentres />}/>
				<Route path = "/resources" element={<Resources />}/>
				<Route path = "/involve" element={<Getinvolved />}/>
				<Route path = "/gallery" element={<Gallery />}/>
				<Route path = "/contact" element={<Contact />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
