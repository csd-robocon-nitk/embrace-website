import s from './aboutus.module.css'

export default function Aboutus() {
	return (
		<main className={s.aboutus}>
			<div className={s.heading}>
				<div className={s.container}>
					<h1>ABOUT US</h1>
					<h2>
						Empowering Communities through 
						<br />
						Disaster Resilience and Education
					</h2>
				</div>
			</div>
			<div className={s.content}>
				<h1>What we do</h1>
				<p>
					EMBRACE aims to address several interconnected goals centred
					around amateur radio and its significance in disaster
					management, education, gender empowerment, promoting HAM
					radio and introducing innovative communication solutions in
					the coastal regions of the Karnataka state.
				</p>
                <br />
				<p>
					EMBRACE is a multifaceted project centered around leveraging
					amateur radio technology in coastal regions of Karnataka,
					India. Its objectives include establishing a dedicated
					on-campus infrastructure for amateur radio to enhance
					communication during emergencies, creating a Center for
					Experiential Learning in Amateur Radio to educate and build
					a knowledgeable community, introducing HAM radio technology
					to rural schools and colleges, developing mobile HAM
					solutions for reliable communication during disasters, and
					establishing 15 nodal centers for skill development in
					amateur radio. Overall, EMBRACE aims to empower communities,
					improve disaster management capabilities, and promote
					education and innovation through amateur radio technology.
				</p>
			</div>
		</main>
	)
}
