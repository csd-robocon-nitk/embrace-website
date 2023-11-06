import s from './simulations.module.css'

export default function Materials() {
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
			<div><br />
			<h2>Our Lab Simulation</h2><br />
			<iframe
				src="https://embrace-nitk.github.io/morse-code-nitk/"
				width='900px'
				height='610px'
				frameborder="0"
				allowfullscreen
			></iframe>
			</div><br />
		</section>
	)
}
