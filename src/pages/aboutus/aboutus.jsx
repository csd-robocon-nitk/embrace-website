import s from './aboutus.module.css'
import OtherTeamCard from './components/OtherTeamCard/OtherTeamCard'
import Partners from './partners/partners'
import Vision from './vision/vision'

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

			<div className={s.content}>
				<h1>Our Mission</h1>
				<p>
					To harness the power of amateur radio technology and
					education to enhance disaster management, communication, and
					community empowerment in coastal regions of Karnataka,
					India.
				</p>
			</div>

			<Vision />

			{/* <div className={s.content}>
				<h1>Our Vision</h1>
				<div className={s.cards}>
					<div className={s.card}>
						<h2>Sustainability</h2>
						<p>
							EMBRACE aims to become self-sustained, securing
							support from various sources like government grants,
							corporate partnerships, philanthropy, alumni
							contributions, NITK support, and community
							involvement.
						</p>
					</div>

					<div className={s.card}>
						<h2>Resource Sharing</h2>
						<p>
							EMBRACE will collaborate closely with MARC to ensure
							that the resources it develops, including HAM radio
							equipment, mobile stations, and educational
							materials, are accessible to empower disaster
							resilience and education.
						</p>
					</div>

					<div className={s.card}>
						<h2>Curriculum Integration & Open Access</h2>
						<p>
							EMBRACE intends to integrate its educational
							resources into formal academic systems, particularly
							within NITK's curriculum, and continues to emphasize
							open access, making its content freely available to
							a global audience.
						</p>
					</div>

					<div className={s.card}>
						<h2>Innovation and Research</h2>
						<p>
							EMBRACE is committed to fostering innovation and
							research in disaster management and amateur radio
							through conferences, symposiums, and workshops.
						</p>
					</div>

					<div className={s.card}>
						<h2>Long-term Impact</h2>
						<p>
							EMBRACE's future vision is characterized by
							sustainability, expansion, technological
							advancement, collaboration, adaptability, and a deep
							commitment to empowering communities. It aspires to
							be a beacon of disaster resilience and amateur radio
							education, making a lasting positive impact.
						</p>
					</div>

					<div className={s.card}>
						<h2>Sustainability</h2>
						<p>
							EMBRACE aims to become self-sustained, securing
							support from various sources like government grants,
							corporate partnerships, philanthropy, alumni
							contributions, NITK support, and community
							involvement.
						</p>
					</div>
				</div>

				<p>
					In essence, EMBRACE envisions a future where disaster
					resilience, unbreakable communication, and education
					empowerment are widespread realities, achieved through
					sustainability, innovation, and community collaboration.
				</p>
			</div> */}

			{/* <div className={s.content}>
				<h1>Supporting Partners</h1>
				<img src="/stakeholders.png" alt="" />
			</div> */}

			<Partners />

			<div className={s.content}>
				<h1>Team</h1>
				<div className={s.coreteam}>
					<h2>Core Team</h2>
					<div className={s.cards}>
						<div className={s.card}>
							<img src="/team/KVG.png" alt="" />
							<h2>Dr. K. V. Gangadharan</h2>
							<p>(VU2TAO)</p>
							<div className={s.designation}>
								<h3>Project Head</h3>
								<p>EMBRACE</p>
							</div>
							<div>
								<a href="mailto:kvganga@nitk.edu.in">
									<img
										src="./email.png"
										id={s.email}
										alt="Email"
									/>
								</a>
								<a target="_blank" href="https://in.linkedin.com/in/kvganga">
									<img src="./linkedin_white.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
						<div className={s.card}>
							<img src="/team/PU.png" alt="" />
							<h2>Dr. Pruthviraj Umesh</h2>
							<p>&nbsp;</p>
							<div className={s.designation}>
								<h3>Execution Head</h3>
								<p>EMBRACE</p>
							</div>
							<div>
								<a href="mailto:pruthviu@nitk.edu.in">
									<img
										src="./email.png"
										id={s.email}
										alt="Email"
									/>
								</a>
								<a target="_blank" href="https://in.linkedin.com/in/dr-pruthviraj-u">
									<img src="./linkedin_white.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
						<div className={s.card}>
							<img src="/team/mohit.jpg" alt="" />
							<h2>Dr. Mohit P. Tahiliani</h2>
							<p>&nbsp;</p>
							<div className={s.designation}>
								<h3>Open Source Head</h3>
								<p>EMBRACE</p>
							</div>
							<div>
								<a href="mailto:tahiliani@nitk.edu.in">
									<img
										src="./email.png"
										id={s.email}
										alt="Email"
									/>
								</a>
								<a target="_blank" href="https://in.linkedin.com/in/mohittahiliani">
									<img src="./linkedin_white.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
						<div className={s.card}>
							<img src="/team/shradha.png" alt="" />
							<h2>Ms. Shradha Shetty V</h2>
							<p>(VU3CMY)</p>
							<div className={s.designation}>
								<h3>Project Staff</h3>
								<p>Centre for System Design<br />NITK Surathkal</p>
							</div>
							<div>
								{/* <a href="#">
									<img
										src="./email.png"
										id={s.email}
										alt="Email"
									/>
								</a> */}
								<a target="_blank" href="https://in.linkedin.com/in/shradha-shetty-705329128">
									<img src="./linkedin_white.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
						<div className={s.card}>
							<img src="/team/jayalekshmi.png" alt="" />
							<h2>Dr. B. R. Jayalekshmi</h2>
							<p>&nbsp;</p>
							<div className={s.designation}>
								<h3>Professor</h3>
								<p>Dept. of Civil Engineering<br />NITK Surathkal</p>
							</div>
							<div>
								<a href="mailto:brjaya@nitk.edu.in">
									<img
										src="./email.png"
										id={s.email}
										alt="Email"
									/>
								</a>
								<a target="_blank" href="https://in.linkedin.com/in/jaya-lekshmi-3330b422">
									<img src="./linkedin_white.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
						<div className={s.card}>
							<img src="/team/srikanth.png" alt="" />
							<h2>Mr. Shrikanth Bhat</h2>
							<p>(VU2SBJ)</p>
							<div className={s.designation}>
								<h3>Member</h3>
								<p>Mangalore Amateur Radio Club<br />Alumni, NITK Surathkal</p>
							</div>
							<div>
								{/* <a href="#">
									<img
										src="./email.png"
										id={s.email}
										alt="Email"
									/>
								</a> */}
								<a target="_blank" href="https://in.linkedin.com/in/srikanth-bhat-07b66b19">
									<img src="./linkedin_white.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
						<div className={s.card}>
							<img src="/team/sukanya.png" alt="" />
							<h2>Dr. Sukanya Rao</h2>
							<p>(VU2RDJ)</p>
							<div className={s.designation}>
								<h3>Member</h3>
								<p>Mangalore Amateur Radio Club<br />Alumni, NITK Surathkal</p>
							</div>
							<div>
								{/* <a href="#">
									<img
										src="./email.png"
										id={s.email}
										alt="Email"
									/>
								</a> */}
								{/* <a href="#">
									<img src="./linkedin_white.png" alt="LinkedIn" />
								</a> */}
							</div>
						</div>
						<div className={s.card}>
							<img src="/team/kiran.png" alt="" />
							<h2>Mr. Kiran Padiyar</h2>
							<p>(VU2XE)</p>
							<div className={s.designation}>
								<h3>Member</h3>
								<p>Mangalore Amateur Radio Club <br /><br /></p>
							</div>
							<div>
								{/* <a href="#">
									<img
										src="./email.png"
										id={s.email}
										alt="Email"
									/>
								</a> */}
								<a target="_blank" href="https://in.linkedin.com/in/kiranpadiyar">
									<img src="./linkedin_white.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
						<div className={s.card}>
							<img src="/team/amba.png" alt="" />
							<h2>Dr. Amba Shetty</h2>
							<p>&nbsp;</p>
							<div className={s.designation}>
								<h3>GIS Head</h3>
								<p>EMBRACE <br /><br /></p>
							</div>
							<div>
								<a href="mailto:amba@nitk.edu.in">
									<img
										src="./email.png"
										id={s.email}
										alt="Email"
									/>
								</a>
								<a target="_blank" href="https://in.linkedin.com/in/amba-shetty-3331b626">
									<img src="./linkedin_white.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<h2>HAM Operating Team</h2>
				<div class={s.otherteam}>
					<OtherTeamCard
						name="Mr. Rajath C Kotekar"
						callsign="VU3LHV"
						photoURL = "/team/ham/Rajath Kotekar.png"
						linkedinURL="https://www.linkedin.com/in/rajath-c-kotekar-22009a153"
					/>
					<OtherTeamCard
						name="Mr. Rakshith Kotian"
						callsign="VU3LGQ"
						photoURL = "/team/ham/Rakshith.png"
						linkedinURL="http://linkedin.com/in/rakshith-kotian-5a7b7212b"
					/>
					<OtherTeamCard
						name="Mr. Steven Sequera"
						callsign="VU3LGA"
						photoURL = "/team/ham/Steven Loyd Sequera.png"
						linkedinURL="https://www.linkedin.com/in/steevan-loyd-sequeira-79891414a"
					/>
					<OtherTeamCard
						name="Mr. Manish ES"
						callsign="VU3FCT"
						photoURL = "/team/ham/ManishES.png"
						linkedinURL="#"
					/>
					<OtherTeamCard
						name="Mr. Latheesh Shetty"
						callsign="VU3FCC"
						photoURL = "/team/ham/Latheesh shetty.png"
						linkedinURL="https://www.linkedin.com/in/lathesh-shetty-819ab6138/"
					/>
					<OtherTeamCard
						name="Mr. Dixith Karkera"
						callsign="VU3CJX"
						photoURL = "/team/ham/dixith.jfif"
						linkedinURL="https://www.linkedin.com/in/dixith-k-karkera-aa088b180"
					/>
					<OtherTeamCard
						name="Mr. Abdhul Shameer"
						callsign="VU3LIJ"
						photoURL = "/team/ham/abdul shameer.png"
						linkedinURL="#"
					/>
					<OtherTeamCard
						name="Mr. Keith Christan Noronha"
						callsign=""
						photoURL = "/team/ham/keith.jfif"
						linkedinURL="https://www.linkedin.com/in/keith-noronha-600aa8255"
					/>
				</div>

				<h2>Project Managers</h2>
				<div class={s.otherteam}>
					<OtherTeamCard
						name="Mr. Abhijith P A"
						designation="Project Manager"
						photoURL = "/team/pm/abhijit pa2.png"
						linkedinURL="#"
					/>
					<OtherTeamCard
						name="Mr. Naveen rao"
						designation="Project Manager"
						photoURL = "/team/pm/Naveen Rao.png"
						linkedinURL="#"
					/>
				</div>

				<h2>Support Team</h2>
				<div class={s.otherteam}>
					<OtherTeamCard
						name="Mr. Suveen"
						designation="Project Documenter"
						photoURL = "/team/support/Suveen Poojary.png"
						linkedinURL="#"
					/>						
					<OtherTeamCard
						name="Mr. Shibi Manohar"
						designation="Illustrator"
						photoURL = "/team/support/shibi manohar.png"
						linkedinURL="https://in.linkedin.com/in/shibi-shetty"
					/>						
					<OtherTeamCard
						name="Mr. Hemanth Nitesh Kumar"
						designation="Technical Assistant"
						photoURL = "/team/empty photo.jpg"
						linkedinURL="http://linkedin.com/in/hemanth-nitesh-kumar-a3937b2201"
					/>						
					<OtherTeamCard
						name="Ms. Lavanya K"
						designation="Junior Assistant"
						photoURL = "/team/support/Lavanya.jpeg"
						linkedinURL="#"
					/>						
					<OtherTeamCard
						name="Ms. Meghana"
						designation="Junior Assistant"
						photoURL = "/team/support/meghana.jpeg"
						linkedinURL="#"
					/>						
				</div>

				<h2>Web Design Team</h2>
				<div class={s.otherteam}>
					<OtherTeamCard
						name="Mr. Apoorva Agrawal"
						designation="Web Designer"
						photoURL = "/team/apoorva.jpg"
						linkedinURL="https://www.linkedin.com/in/apoorva-agrawal-8302b825a"
					/>						
					<OtherTeamCard
						name="Mr. J Hariharan"
						designation="Web Designer"
						photoURL = "/team/hariharan.jpg"
						linkedinURL="https://www.linkedin.com/in/hariharan-j-47aa43244"
					/>																
				</div>
			</div>
		</main>
	)
}
