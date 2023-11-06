import { useState } from 'react'
import s from './simulations.module.css'

export default function Materials() {
	let [ active, setActive ] = useState(0)

	return (
		<section className={s.simulations}>
			<h2>Lab Simulations</h2>
			<p>
				Our lab simulations offer valuable hands-on experience in
				amateur radio operations, allowing you to acquire essential
				skills and knowledge. These interactive simulations are designed
				to provide practical training and real-world understanding in
				various aspects of amateur radio
			</p>
			<br /><br />
			<h2>Our Lab Simulation</h2>
			<h3>Exploring Morse Codes</h3>

			<div className={s.tabs}>
				<span 
					className = {active == 0 ? s.active : ""}
					onClick = {() => setActive(0)}
				>
					Numbers
				</span>
				<span
					className = {active == 1 ? s.active : ""}
					onClick = {() => setActive(1)}
				>
					Q Codes
				</span>
				<span
					className = {active == 2 ? s.active : ""}
					onClick = {() => setActive(2)}
				>
					Alphabets
				</span>
			</div>

			{ active == 0 ? frame0 : null }
			{ active == 1 ? frame1 : null }
			{ active == 2 ? frame2 : null }

			<br />
		</section>
	)
}

let frame0 = 
<iframe
src="https://embrace-nitk.github.io/morse-code-nitk/"
width='900px'
height='610px'
className={s.frame}
frameborder="0"
allowfullscreen
></iframe>

let frame1 = 
<iframe
src="https://embrace-nitk.github.io/morse-code-qcode/"
width='900px'
height='610px'
className={s.frame}
frameborder="0"
allowfullscreen
></iframe>

let frame2 = 
<iframe
src="https://embrace-nitk.github.io/morse-code-alphabets/"
width='900px'
height='610px'
className={s.frame}
frameborder="0"
allowfullscreen
></iframe>
