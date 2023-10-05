import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Page from './pages/Page.jsx'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path = "/" element={<Home />}/>
				<Route path = "/page" element={<Page />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
