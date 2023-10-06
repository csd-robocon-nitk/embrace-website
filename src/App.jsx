import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Page from './pages/Page.jsx'

import Header from './components/header/header'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path = "/" element={<Home />}/>
				<Route path = "/page" element={<Page />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
